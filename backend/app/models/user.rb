class User < ApplicationRecord
  rolify

  before_create :generate_certificate, if: Proc.new { AUTH_CONFIG.certificates.enabled }

  # n.b. This is a transient attribute and is *not* saved to the database! 
  #      It will be set during #generate_password.
  attr_reader :certificate_password
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :invitable, :two_factor_authenticatable, :database_authenticatable,
         :recoverable, :trackable, :validatable, :timeoutable

  has_one_time_password(encrypted: true)

  def need_two_factor_authentication?(request)
    !request.local?
  end

  def to_s 
    name
  end

  def send_two_factor_authentication_code(code)
    t = Telstra::SMS.new(AUTH_CONFIG.sms.consumer_key, AUTH_CONFIG.sms.consumer_secret)
    t.send_sms(to: phone_number, body: "Your ICT Dashboard login code is #{code}")
    # puts "SMS status: #{t.get_message_status(message_id)}"
    # puts "SMS response: #{t.get_message_response(message_id)}"
  end
  
  def certificate_path 
    "#{cert_dir}/#{email.parameterize}.p12"
  end

  def generate_certificate
    # Load root certificate & key
    root_certificate = OpenSSL::X509::Certificate.new File.read(
      AUTH_CONFIG.certificates.root_cert_path)
    root_key = OpenSSL::PKey::RSA.new File.read(
      AUTH_CONFIG.certificates.root_key_path), AUTH_CONFIG.certificates.root_key_pass

    # GENERATE KEY:
    # openssl genrsa -des3 -out client.key 4096

    key = OpenSSL::PKey::RSA.new 4096

    # CREATE REQUEST:
    # openssl req -new -key client.key -out client.csr

    subject = OpenSSL::X509::Name.new([
      ['C',             'AU',           OpenSSL::ASN1::PRINTABLESTRING],
      ['ST',            'ACT',          OpenSSL::ASN1::PRINTABLESTRING],
      ['L',             'Canberra',     OpenSSL::ASN1::PRINTABLESTRING],
      ['O',             'Commonwealth', OpenSSL::ASN1::UTF8STRING],
      ['OU',            'DTA',          OpenSSL::ASN1::UTF8STRING],
      ['CN',            name,           OpenSSL::ASN1::UTF8STRING],
      ['emailAddress',  email,          OpenSSL::ASN1::UTF8STRING]      
    ]) 

    req = OpenSSL::X509::Request.new
    req.version = 0
    req.subject = subject
    req.public_key = key.public_key
    req.sign key, OpenSSL::Digest::SHA1.new

    # CREATE SELF-SIGNED CLIENT CERT:
    # openssl x509 -req -days 365 -in client.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out client.crt    

    name = OpenSSL::X509::Name.parse "CN=#{name}/DC=example"
    
    cert = OpenSSL::X509::Certificate.new
    cert.serial = 0
    cert.version = 2
    cert.not_before = Time.now
    cert.not_after = Time.now + 1.year
    cert.subject = name
    cert.public_key = key.public_key
    cert.issuer = root_certificate.subject

    ef = OpenSSL::X509::ExtensionFactory.new
    ef.subject_certificate = cert
    ef.issuer_certificate = root_certificate

    cert.add_extension ef.create_extension 'keyUsage', 'digitalSignature', true
    cert.add_extension ef.create_extension 'subjectKeyIdentifier', 'hash', false
    cert.sign root_key, OpenSSL::Digest::SHA256.new

    # CONVERT TO P12:
    # openssl pkcs12 -export -clcerts -in client.crt -inkey client.key -out client.p12

    @certificate_password = SecureRandom.base64(8)

    p12 = OpenSSL::PKCS12.create @certificate_password, nil, key, cert
    
    File.open(certificate_path, 'w:ASCII-8BIT') do |f|
      f.write p12.to_der
    end

    self.certificate = cert.to_s
  end

  private 

  def cert_dir
    AUTH_CONFIG.certificates.location
  end
end
