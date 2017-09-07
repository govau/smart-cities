Fabricator(:benefit) do
  project
  description 'Lorem ipsum'
  dimo_uid { sequence(:benefit_dimo_uid) {|i| "BENEFIT_#{i}" } }
  start_date { 2.months.ago }
end
