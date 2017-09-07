AUTH_CONFIG = Confstruct::Configuration.new do 
  # Don't allow auth bypass on prod
  enabled Rails.env.production? || !ENV['BYPASS_AUTH']

  certificates do 
    enabled !ENV['BYPASS_CLIENT_SSL']
    location ENV['CERT_DIR']
    root_cert_path ENV['ROOT_CERT_PATH']
    root_key_path ENV['ROOT_KEY_PATH']
    root_key_pass ENV['ROOT_KEY_PASS']
  end

  sms do 
    consumer_key ENV['SMS_CONSUMER_KEY']
    consumer_secret ENV['SMS_CONSUMER_SECRET']
  end
end
