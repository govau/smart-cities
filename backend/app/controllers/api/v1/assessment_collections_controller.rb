class Api::V1::AssessmentCollectionsController < Api::V1::BaseController
  def index
    @assessment_collections = AssessmentCollection.all
  end
end
