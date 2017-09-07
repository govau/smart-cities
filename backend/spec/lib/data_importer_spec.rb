require 'rails_helper'
require 'data_importer'

describe DataImporter do
  before(:all) do 
    DataImporter.new('spec/support/sample_data.xlsx').run
  end

  let(:agency) { Agency.find_by! name: 'Agency A' }
  let(:assessment_collection) { AssessmentCollection.first }
  let(:benefit) { Benefit.find_by! dimo_uid: 'AGA_001_B_01' }
  let(:benefit_assessment) { benefit.benefit_assessments.first }
  let(:business_category) { BusinessCategory.find_by! name:
    'Invest in National Capability and Assets' }
  let(:portfolio) { Portfolio.find_by! name: 'Portfolio_I' }
  let(:project) { Project.find_by! dimo_uid: 'AGA_001' }
  let(:project_assessment) { project.project_assessments.first }
  let(:risk) { Risk.find_by! dimo_uid: 'ABS_001_R_04' }  
  let(:risk_assessment) { risk.risk_assessments.first }

  # Counts and relationships

  specify { expect(Portfolio.all.collect(&:name)).to eq(
    %w(Portfolio_I Portfolio_II) ) }
  specify { expect(portfolio.agencies.size).to eq 2 }
  specify { expect(portfolio.agencies).to include agency }
  specify { expect(Project.count).to eq 20 }  
  specify { expect(project.agency).to eq agency }
  specify { expect(project.business_category).to eq business_category }
  specify { expect(AssessmentCollection.count).to eq 1 }
  specify { expect(ProjectAssessment.count).to eq 20 }
  specify { expect(project_assessment.assessment_collection).to(
    eq assessment_collection) }
  specify { expect(project_assessment.overall_risk_logical_complete_current).to(
    include 'NOT logical, complete or current') }
  specify { expect(project_assessment.delivery_confidence_assessor_note).to(
    include 'A green-amber rating has been assigned') }
  specify { expect(Benefit.count).to eq 20 }
  specify { expect(benefit.project).to eq project }
  specify { expect(BenefitAssessment.count).to eq 20 }
  specify { expect(benefit_assessment.assessment_collection).to(
    eq assessment_collection) }
  specify { expect(Risk.count).to eq 20 } 
  specify { expect(risk.project).to eq project }
  specify { expect(RiskAssessment.count).to eq 20 }
  specify { expect(risk_assessment.assessment_collection).to(
    eq assessment_collection) }

  # Attributes

  { project: {
      name: 'Project Program 1',
      start_date: Date.parse('2015-07-01'),
      completion_date: Date.parse('2017-12-30'),
      kind: 'Project',
      objectives: 'Agency generated text',
      total_budget: 14744906,
      ict_budget: 183620000,
      agency_coordinator_email: 'firstname.lastname@Agency-A.gov.au',
      agency_sro_email: 'firstname.lastname@AGA_001.gov.au' },
    assessment_collection: {
      dimo_period_name: 'Q2_2017',
      begins_at: Date.parse('2017-04-01'),
      ends_at: Date.parse('2017-06-30') },
    project_assessment: {
      total_spend_to_date: 86028000,
      time_score: '70-90%',
      time_score_note: 'None',
      ict_cost_score: '<$20m',
      spend_time_deviation: '<>25-50%',
      spend_percentage: 81.33,
      time_percentage: 59.41,
      overall_benefit_viability_assessor: 2,
      overall_benefit_status_assessor: 1,
      overall_benefit_rating: 3,
      overall_benefit_assessor_note: 'Assessor generated text',      
      overall_risk_residual_risks: 'All of the residual risks are low or medium',
      overall_risk_assessor: 3,
      overall_risk_assessor_note: 'Assessor generated text',
      public_impact_population: '2 - Population - Medium',
      public_impact_quantum: '1 - Quantum - Low',
      public_impact_score: 2,
      public_impact_score_note: 'Assessor generated text',
      general_note: 'Assessor generated text',
      recommendations: 'Assessor generated text',
      duration: 3352,
      assessment_priority: 'Involve',
      delivery_confidence_assessor_score: 2,
      overall_residual_risk_score: 1,
      delivery_confidence_dimo: 'Green-Amber',
      delivery_confidence_agency: 'Green-Amber',
      status_commentary_agency: 'Agency generated text' },
    benefit: {
      description: 'Agency-Generated Text',
      start_date: Date.parse('2015-01-01') },
    benefit_assessment: {
      date_of_last_update: Date.parse('2018-12-30'),
      realisation_start_date: Date.parse('2017-07-01'),
      status: 'On Track',
      assessor_note: 'blah blah',
      viability_assessor: 4,
      status_assessor: 3,
      rating: 1,
      status_rating: 2 },
    risk: {
      description: 'Negative public campaigns reducing public cooperation.'
    },
    risk_assessment: {
      date_of_last_update: Date.parse('2017-03-12'),
      rating_before_mitigation: 'High',
      mitigation_strategy: 'Agency-generated Text',
      rating_after_mitigation: 'Medium',
      assessor_note: 'note from risk assessor',
      logical_complete_current: 'illogical, incomplete and out of date',
      residual_risks: 'residual',
      residual_risks_score: 3
    }
  }.each do |entity, props|
    props.each do |k, v|
      specify do
        obj = method(entity).call
        expect(obj.method(k).call).to eq v 
      end
    end
  end
end