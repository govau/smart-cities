Fabricator(:user) do 
  transient roles: []

  email { sequence(:email) {|i| "user#{i}@example.com" } }
  phone_number { sequence(:phone) {|i| "+614#{i.to_s.rjust 8, '0'}" }}
  name { sequence(:name) {|i| "User #{i}" } }
  password 'whatever'

  after_create do |user, transients|
    transients[:roles].each do |role|
      user.add_role role
    end
  end
end
