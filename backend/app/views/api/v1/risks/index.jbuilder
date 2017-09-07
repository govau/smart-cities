json.array! @risks do |risk|
  json.(risk, :id, :project_id, :description, :dimo_uid)
end