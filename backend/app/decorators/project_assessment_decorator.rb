class ProjectAssessmentDecorator < Draper::Decorator
  delegate_all

  def spend_percentage
    object.spend_percentage.to_f
  end

  def time_percentage
    object.time_percentage.to_f
  end
end
