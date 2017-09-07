class Project < ApplicationRecord
  belongs_to :agency
  belongs_to :business_category
  has_many :project_assessments
  has_many :risks
  has_many :risk_assessments, through: :risks
  has_many :benefits
  has_many :benefit_assessments, through: :benefits

  validates :name, presence: true
  validates :dimo_uid, presence: true, uniqueness: true
  validates :agency_id, presence: true

  def count_risks_high_or_extreme
    count_risks_rated %w(High Extreme)
  end

  def count_risks_medium
    count_risks_rated 'Medium'
  end

  def count_risks_low 
    count_risks_rated 'Low'
  end
  
  def count_benefits_at_risk_or_removed
    count_benefits_rated ['At Risk', 'Removed']
  end

  def count_benefits_on_track_or_realised
    count_benefits_rated ['On Track', 'Realised']
  end

  def count_risks_rated(rating) 
    ac = AssessmentCollection.latest

    if ac
      risk_assessments.for_collection(ac).with_rating(rating).count
    else 
      0
    end
  end

  def count_benefits_rated(rating) 
    ac = AssessmentCollection.latest

    if ac
      benefit_assessments.for_collection(ac).with_status(rating).count
    else 
      0
    end
  end    
end
