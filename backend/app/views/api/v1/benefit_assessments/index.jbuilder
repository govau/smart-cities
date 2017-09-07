json.array! @benefit_assessments do |ba|
  json.(ba, :id, :benefit_id, :assessment_collection_id, :date_of_last_update,
  :realisation_start_date, :status, :assessor_note, :viability_assessor,
  :status_assessor, :rating, :status_rating)
end