require 'rails_helper'

RSpec.describe 'import', type: :feature do
  context 'Logged in' do 
    let(:user) { Fabricate(:user, roles: [:uploader]) }

    before do 
      visit '/users/sign_in'
      fill_in 'Email', with: user.email
      fill_in 'Password', with: 'whatever'
      click_on 'Log in'
    end
  end 
end