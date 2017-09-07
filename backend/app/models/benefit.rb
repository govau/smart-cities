class Benefit < ApplicationRecord
  belongs_to :project
  has_many :benefit_assessments

  validates :description, presence: true
  validates :dimo_uid, presence: true, uniqueness: true
  validates :project_id, presence: true
  validates :project, presence: true
end
