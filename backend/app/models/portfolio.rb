class Portfolio < ApplicationRecord
  has_many :agencies
  
  validates :name, presence: true, uniqueness: true
end
