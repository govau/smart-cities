class AssessmentCollection < ApplicationRecord
  DIMO_PERIOD_NAME_FORMAT = /^Q([1-4])_20(\d{2})$/ # Works till 2099

  has_many :project_assessments
  has_many :benefit_assessments
  has_many :risk_assessments

  validates :dimo_period_name, presence: true
  validate :dimo_period_name_must_be_meaningful
  
  before_validation :populate_dates!

  def self.latest 
    order(:ends_at).last
  end
  
  def populate_dates!
    if period_info = parse_dimo_period_name
      month = (period_info[:quarter] - 1) * 3 + 1
      year = period_info[:year]
      self.begins_at = Date.parse "#{year}-#{month}-01"
      self.ends_at = [(begins_at >> 3) - 1, Date.today].min # Should not be in future!
    end
  end

  private 

  def dimo_period_name_must_be_meaningful
    unless parse_dimo_period_name
      errors.add :dimo_period_name, 'Invalid format'
    end
  end

  def parse_dimo_period_name
    matches = dimo_period_name.match DIMO_PERIOD_NAME_FORMAT

    if matches.present? 
      { quarter: matches[1].to_i, year: matches[2].to_i + 2000 }
    else
      false
    end
  end 
end
