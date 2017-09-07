class Api::V1::BenefitsController < Api::V1::BaseController
  def index
    @benefits = AssessmentCollection.latest.benefit_assessments.collect &:benefit
  end
end
