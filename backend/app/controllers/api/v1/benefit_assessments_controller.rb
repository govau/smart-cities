class Api::V1::BenefitAssessmentsController < Api::V1::BaseController
  def index
    @benefit_assessments = AssessmentCollection.latest.benefit_assessments
  end
end
