class BenefitAssessment < ApplicationRecord
  include Assessed

  belongs_to :benefit

  scope :with_status, -> (status) {
    where(status: status)
  }
  
  validates :benefit, presence: true
  validates :benefit_id, presence: true, uniqueness:
    { scope: :assessment_collection_id }
end
