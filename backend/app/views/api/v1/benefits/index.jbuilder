json.array! @benefits do |benefit|
  json.(benefit, :id, :project_id, :description, :dimo_uid, :start_date)
end