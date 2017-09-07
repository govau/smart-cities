json.array! @risk_assessments do |ra|
  json.(ra,
    :id,
    :risk_id,
    :assessment_collection_id,
    :date_of_last_update,
    :rating_before_mitigation,
    :mitigation_strategy,
    :rating_after_mitigation,
    :assessor_note,
    :logical_complete_current,
    :residual_risks,
    :residual_risks_score)
end