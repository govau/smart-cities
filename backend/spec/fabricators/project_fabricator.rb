Fabricator(:project) do
  agency
  business_category
  name { sequence(:name) {|i| "Project #{i}" } }
  dimo_uid { sequence(:dimo_uid) {|i| "DIMO#{i}" } }
  kind 'Project'
  start_date { 2.years.ago }
  completion_date { 2.years.from_now }
  objectives 'Lorem ipsum dolor sit amet'
  budget_funded true
  ict_budget 1000
  total_budget 9000
  agency_coordinator_email 'coordinator@example.org'
  agency_sro_email 'sro@example.org'
end
