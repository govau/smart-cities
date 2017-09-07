json.array! @project_assessments do |assessment|
  json.(assessment,
    :id,
    :project_id, 
    :assessment_collection_id,
    :total_spend_to_date,
    :time_score,
    :time_score_note,
    :ict_cost_score,
    :spend_time_deviation,
    :spend_percentage,
    :time_percentage,
    :overall_benefit_viability_assessor,
    :overall_benefit_status_assessor,
    :overall_benefit_rating,
    :overall_benefit_assessor_note,
    :overall_risk_logical_complete_current,
    :overall_risk_residual_risks,
    :overall_risk_assessor,
    :overall_risk_assessor_note,
    :delivery_confidence_assessor_note,
    :public_impact_population,
    :public_impact_quantum,
    :public_impact_score,
    :public_impact_score_note,
    :general_note,
    :recommendations,
    :duration,
    :assessment_priority,
    :delivery_confidence_assessor_score,
    :overall_residual_risk_score,
    :delivery_confidence_dimo,
    :delivery_confidence_agency,
    :status_commentary_agency,
    :dimo_assessment)
end
