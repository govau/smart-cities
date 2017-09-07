Fabricator(:risk) do
  project
  description 'Lorem ipsum'  
  dimo_uid { sequence(:risk_dimo_uid) {|i| "RISK_#{i}" } }
end
