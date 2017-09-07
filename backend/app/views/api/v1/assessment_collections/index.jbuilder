json.array! @assessment_collections do |collection|
  json.(collection, :id, :dimo_period_name, :begins_at, :ends_at)
end
