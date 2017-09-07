module Assessed
  extend ActiveSupport::Concern

  included do 
    scope :for_collection, -> (collection) {
      where(assessment_collection_id: collection.id)
    }

    belongs_to :assessment_collection
    validates :assessment_collection_id, presence: true
    validates :assessment_collection, presence: true
  end
end