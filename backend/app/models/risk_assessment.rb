class RiskAssessment < ApplicationRecord
  include Assessed

  belongs_to :risk

  scope :with_rating, -> (rating) {
    where(rating_after_mitigation: rating)
  }
  
  validates :risk, presence: true
  validates :risk_id, presence: true, uniqueness:
    { scope: :assessment_collection_id }
end
