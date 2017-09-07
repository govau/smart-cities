Fabricator(:risk_assessment) do
  risk
  assessment_collection
  date_of_last_update "2017-07-05"
  rating_before_mitigation 5
  mitigation_strategy "Lorem ipsum"
  rating_after_mitigation 1
  assessor_note "Lorem ipsum"
  logical_complete_current "Is it logical"
  residual_risks "Certain risks"
  residual_risks_score 3
end
