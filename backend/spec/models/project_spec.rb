require 'rails_helper'

RSpec.describe Project, type: :model do
  describe '#count_risks_high_or_extreme' do 
    subject { Fabricate :project }

    context 'no risks' do 
      specify { expect(subject.count_risks_high_or_extreme).to eq 0 }
    end

    context 'with a risk' do 
      let!(:risk) { Fabricate(:risk, project: subject) }

      context 'rated medium' do       
        let!(:ra) { Fabricate(:risk_assessment, risk: risk,
          rating_after_mitigation: 'Medium') }
      
        specify { expect(subject.count_risks_high_or_extreme).to eq 0 }
      end

      context 'major risk in the past, rating now reduced' do 
        let!(:old_ass) { Fabricate(:assessment_collection,
          dimo_period_name: 'Q1_2017') }
        let!(:new_ass) { Fabricate(:assessment_collection,
          dimo_period_name: 'Q2_2017')  }
        let!(:old_ra) { Fabricate(:risk_assessment, risk: risk,
          assessment_collection: old_ass, rating_after_mitigation: 'High') }
        let!(:ra) { Fabricate(:risk_assessment, risk: risk,
          assessment_collection: new_ass, rating_after_mitigation: 'Medium') }

        specify { expect(subject.count_risks_high_or_extreme).to eq 0 }
      end

      context 'rated high' do       
        let!(:ra) { Fabricate(:risk_assessment, risk: risk,
          rating_after_mitigation: 'High') }
      
        specify { expect(subject.count_risks_high_or_extreme).to eq 1 }
      end

      context 'rated extreme' do       
        let!(:ra) { Fabricate(:risk_assessment, risk: risk,
          rating_after_mitigation: 'Extreme') }
      
        specify { expect(subject.count_risks_high_or_extreme).to eq 1 }
      end
    end
  end
end
