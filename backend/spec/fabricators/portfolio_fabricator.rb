Fabricator(:portfolio) do 
  name { sequence(:name) {|i| "Portfolio #{i}" } }
end
