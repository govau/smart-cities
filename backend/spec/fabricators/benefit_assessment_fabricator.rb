Fabricator(:benefit_assessment) do
  benefit
  assessment_collection
  date_of_last_update { 2.days.ago }
  realisation_start_date { 2.years.from_now }
  status 'On track'
  assessor_note 'Lorem ipsum'
  viability_assessor 1
  status_assessor 2
  rating 3
  status_rating 4
end
