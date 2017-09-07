class Api::V1::RisksController < Api::V1::BaseController
  def index
    @risks = AssessmentCollection.latest.risk_assessments.collect &:risk
  end
end
