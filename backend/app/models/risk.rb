class Risk < ApplicationRecord
  belongs_to :project
  has_many :risk_assessments

  validates :description, presence: true
  validates :dimo_uid, presence: true, uniqueness: true
  validates :project_id, presence: true
  validates :project, presence: true
end
