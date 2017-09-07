json.array! @projects do |project|
  json.(project,
    :id,
    :agency_id,
    :business_category_id,
    :name,
    :dimo_uid,
    :kind,
    :start_date,
    :completion_date,
    :objectives,
    :budget_funded,
    :total_budget,
    :ict_budget,
    :agency_coordinator_email,
    :agency_sro_email)

  json.meta do 
    json.count_benefits project.benefits.count
    json.count_benefits_at_risk_or_removed project.count_benefits_at_risk_or_removed
    json.count_benefits_on_track_or_realised project.count_benefits_on_track_or_realised
    json.count_risks project.risks.count
    json.count_risks_at_high_or_extreme project.count_risks_high_or_extreme
    json.count_risks_at_medium project.count_risks_medium
    json.count_risks_at_low project.count_risks_low
  end
end