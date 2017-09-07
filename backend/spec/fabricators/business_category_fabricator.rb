Fabricator(:business_category) do
  name { sequence(:business_category_name) {|i| "Business Category #{i}" } }
end
