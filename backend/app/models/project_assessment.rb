class ProjectAssessment < ApplicationRecord
  include Assessed

  belongs_to :project

  validates :project, presence: true
end
