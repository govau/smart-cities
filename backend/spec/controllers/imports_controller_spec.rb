require 'rails_helper'

RSpec.describe ImportsController, type: :controller do
  describe 'POST #create' do 
    let(:upload) { fixture_file_upload file, 
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' } # <-- urgh :(

    before do 
      sign_in user
      post :create, params: { import: { spreadsheet: upload } }
    end

    context 'logged in' do 
      let(:user) { Fabricate(:user, roles: roles) }

      context 'as uploader user' do
        let(:roles) { [:uploader] }

        # Happy path
        context 'with valid data' do 
          let(:file) { 'sample_data.xlsx' }
          specify { expect(response).to redirect_to('/import') }
          specify { expect(Portfolio.count).to eq 2 }
          specify { expect(assigns(:errors)).to be_nil }
        end

        context 'with invalid data' do 
          let(:file) { 'mismatched_data.xlsx' }
          let(:error) { "Invalid value found in worksheet 'PP_Assessments'," +
            " row 2, column 0: Agency with short name 'AGZ' not found." }
          specify { expect(response).to have_http_status :unprocessable_entity }
          specify { expect(Portfolio.count).to eq 0 }
          specify { expect(assigns(:errors)).to eq [error] }
        end

        context 'no data specified' do 
          let(:upload) { nil }
          specify { expect(response).to have_http_status :unprocessable_entity }
          specify { expect(assigns(:errors)).to eq ['No file specified.'] }
        end
      end

      context 'as non-uploader user' do 
        let(:roles) { [:viewer] }
        let(:file) { 'sample_data.xlsx' }
        specify { expect(response).to have_http_status :forbidden }
      end
    end
  end
end
