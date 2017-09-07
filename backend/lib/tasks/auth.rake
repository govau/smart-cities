namespace :dash do
  namespace :auth do 
    desc 'Generate client SSL certificates for any users currently lacking them'
    task generate: :environment do |task|
      User.where(certificate: nil).each do |user|
        generate_user_cert user
      end

      puts "Done generating client certificates"
    end

    desc 'Regenerate client SSL certificates for ALL users (warning: will invalidate existing certs!)'
    task regenerate_all: :environment do |task|
      User.all.each do |user|
        generate_user_cert user
      end

      puts "Done generating client certificates"
    end

    def generate_user_cert(user)
      user.generate_certificate
      user.save!
      puts "For #{user.email}, generated certificate at #{user.certificate_path}" + 
        " with password: #{user.certificate_password}"
    end
  end
end
