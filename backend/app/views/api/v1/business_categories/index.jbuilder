json.array! @business_categories do |bc|
  json.(bc, :id, :name)
end