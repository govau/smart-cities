class Api::V1::ProjectAssessmentsController < Api::V1::BaseController
  def index
    @project_assessments = ProjectAssessment.all.decorate
  end
end
