class Agency < ApplicationRecord
  belongs_to :portfolio
  has_many :projects

  validates :name, presence: true, uniqueness: true
  validates :short_name, presence: true, uniqueness: true
  validates :portfolio_id, presence: true
end
