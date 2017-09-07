require 'rails_helper'

shared_examples 'unauthorized' do
  specify { expect(page).to have_content 'necessary permissions' }
end

shared_examples 'unauthenticated' do 
  specify { expect(page).to have_content 'Remember me' }
end

shared_examples 'home content' do 
  specify { expect(page).to have_content 'Home#index' }
end

shared_examples 'invitation content' do 
  specify { expect(page).to have_content 'Send invitation' }
end

RSpec.describe 'authorisation', type: :feature, skip: true do
  let(:home_path) { '/' }
  let(:invitation_path) { '/users/invitation/new' }

  context 'Not logged in' do 
    describe 'viewing' do 
      before { visit home_path }
      it_behaves_like 'unauthenticated'
    end

    describe 'inviting' do 
      before { visit invitation_path }
      it_behaves_like 'unauthenticated'
    end
  end

  context 'Logged in' do 
    let(:user) { Fabricate(:user, roles: roles) }

    before do 
      visit '/users/sign_in'
      fill_in 'Email', with: user.email
      fill_in 'Password', with: 'whatever'
      click_on 'Log in'
      visit path
    end

    context 'User with no roles' do 
      let(:roles) { [] }

      describe 'viewing' do 
        let(:path) { home_path }
        it_behaves_like 'unauthorized'
      end

      describe 'inviting' do 
        let(:path) { invitation_path }
        it_behaves_like 'unauthorized' 
      end
    end

    context 'User with viewer role' do 
      let(:roles) { ['viewer'] }

      describe 'viewing' do 
        let(:path) { home_path }  
        it_behaves_like 'home content'
      end

      describe 'inviting' do 
        let(:path) { invitation_path }
        it_behaves_like 'unauthorized' 
      end
    end

    context 'User with inviter role (only)' do 
      let(:roles) { ['inviter'] }

      describe 'viewing' do 
        let(:path) { home_path }  
        it_behaves_like 'unauthorized' 
      end

      describe 'inviting' do 
        let(:path) { invitation_path }
        it_behaves_like 'invitation content'
      end
    end

    # TODO: uploading

    context 'User with all roles' do 
      let(:roles) { %w(inviter viewer uploader) }

      describe 'viewing' do 
        let(:path) { home_path }
        it_behaves_like 'home content'
      end

      describe 'inviting' do 
        let(:path) { invitation_path }
        it_behaves_like 'invitation content'
      end
    end
  end 
end