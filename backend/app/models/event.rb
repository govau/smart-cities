class Event < ApplicationRecord
  belongs_to :user

  scope :by_time, -> { order(created_at: :desc) }
end
