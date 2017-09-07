if ENV['SEED_USER_EMAIL']
  atts = { email: ENV['SEED_USER_EMAIL'],
    password: ENV['SEED_USER_PASSWORD'], 
    name: 'Bootstrap user',
    phone_number: ENV['SEED_USER_PHONE_NUMBER'] }

  user = User.find_by(email: ENV['SEED_USER_EMAIL']) ||
    User.create(atts)

  user.update_attributes(atts)

  user.add_role :viewer
  user.add_role :inviter
  user.add_role :uploader
  user.add_role :auditer
end