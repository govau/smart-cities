require 'rails_helper'
require 'static_data_generator'

describe StaticDataGenerator do
  def entity_data(entity)
    JSON.parse File.read "#{Rails.root}/tmp/#{entity}.json"
  end

  subject { described_class.new "#{Rails.root}/tmp/" }

  let!(:portfolio) { Fabricate :portfolio }
  let!(:business_category) { Fabricate :business_category }
  let!(:agency) { Fabricate :agency, portfolio: portfolio }
  let!(:project) { Fabricate :project, agency: agency }
  let!(:assessment_collection) { Fabricate :assessment_collection }
  let!(:project_assessment) { Fabricate :project_assessment, project: project,
    assessment_collection: assessment_collection }
  let!(:benefit) { Fabricate :benefit, project: project }
  let!(:benefit_assessment) { Fabricate :benefit_assessment, benefit: benefit,
    assessment_collection: assessment_collection }
  let!(:risk) { Fabricate :risk, project: project }
  let!(:risk_assessment) { Fabricate :risk_assessment, risk: risk,
    assessment_collection: assessment_collection }

  before { subject.run }

  { portfolio: %w(id name),
    agency: %w(id name portfolio_id),
    project: %w(id name agency_id dimo_uid kind start_date completion_date
      objectives budget_funded ict_budget total_budget agency_coordinator_email
      agency_sro_email business_category_id),
    assessment_collection: %w(dimo_period_name begins_at ends_at),
    project_assessment: %w(total_spend_to_date time_score time_score_note
      spend_time_deviation spend_percentage time_percentage
      overall_benefit_viability_assessor overall_benefit_status_assessor
      overall_benefit_rating overall_benefit_assessor_note
      overall_risk_logical_complete_current overall_risk_residual_risks
      overall_risk_assessor overall_risk_assessor_note 
      delivery_confidence_assessor_note public_impact_population
      public_impact_quantum public_impact_score public_impact_score_note
      general_note recommendations duration assessment_priority
      delivery_confidence_assessor_score overall_residual_risk_score
      delivery_confidence_dimo delivery_confidence_agency
      status_commentary_agency project_id assessment_collection_id),
    benefit: %w(id project_id description dimo_uid start_date),
    benefit_assessment: %w(id benefit_id assessment_collection_id
      date_of_last_update realisation_start_date status assessor_note
      viability_assessor status_assessor rating status_rating),
    risk: %w(id project_id description dimo_uid),
    risk_assessment: %w(id risk_id assessment_collection_id
      date_of_last_update rating_before_mitigation mitigation_strategy
      rating_after_mitigation assessor_note logical_complete_current
      residual_risks residual_risks_score),
    business_category: %w(id name)
  }.each do |entity, atts|
    atts.each do |att|
      specify do
        data = entity_data entity.to_s.pluralize
        json_att = data.first[att]
        model_att = method(entity).call.method(att).call
        # puts "#{entity}.#{att}; model: #{model_att}, JSON: #{json_att}"
        expect(json_att.to_s).to eq model_att.to_s
      end
    end
  end
end 
