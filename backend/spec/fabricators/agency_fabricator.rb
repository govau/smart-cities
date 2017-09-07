Fabricator(:agency) do 
  portfolio
  name { sequence(:name) {|i| "Agency #{i}" } }
  short_name { sequence(:short_name) {|i| "AG#{i}" } }
end
