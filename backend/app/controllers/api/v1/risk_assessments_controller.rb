class Api::V1::RiskAssessmentsController < Api::V1::BaseController
  def index
    @risk_assessments = AssessmentCollection.latest.risk_assessments
  end
end
