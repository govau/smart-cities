Warden::Manager.after_set_user except: :fetch do |user, auth, opts|
  Event.create user: user, action: 'sign_in'
end