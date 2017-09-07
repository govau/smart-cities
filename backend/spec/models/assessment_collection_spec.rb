require 'rails_helper'

RSpec.describe AssessmentCollection, type: :model do
  subject { Fabricate.build(:assessment_collection, dimo_period_name: period) }

  context 'Second quarter, 2017' do 
    let(:period) { 'Q2_2017' }
    before { subject.save }
    specify { expect(subject.begins_at).to eq Date.parse '2017-04-01' }
    specify { expect(subject.ends_at).to eq Date.parse '2017-06-30' }
  end

  context 'Totally invalid period name' do
    let(:period) { 'potato' }
    specify { expect(subject).not_to be_valid }
  end

  context 'Irrational period name' do
    let(:period) { 'Q5_2017' }
    specify { expect(subject).not_to be_valid }
  end
end
