Fabricator(:project_assessment) do
  project
  assessment_collection
  total_spend_to_date 100
  time_score '<20%'
  time_score_note 'Lorem ipsum'
  spend_time_deviation '<>25-50%'
  spend_percentage 12.5
  time_percentage 18.2
  overall_benefit_viability_assessor 1
  overall_benefit_status_assessor 1
  overall_benefit_rating 1
  overall_benefit_assessor_note 'Lorem ipsum'
  overall_risk_logical_complete_current 'Illogical, incomplete and out of date'
  overall_risk_residual_risks 'Risks are residual'
  overall_risk_assessor 3
  overall_risk_assessor_note 'Pretty risky'
  delivery_confidence_assessor_note 'Dangerous'
  public_impact_population '2 - Population - Medium'
  public_impact_quantum '1 - Quantum - Low'
  public_impact_score 3
  public_impact_score_note 'Much impact'
  general_note 'So general'
  recommendations 'Wow'
  duration 123
  assessment_priority 'Involve'
  delivery_confidence_assessor_score 1
  overall_residual_risk_score 1
  delivery_confidence_dimo 'Amber'
  delivery_confidence_agency 'Green' 
  status_commentary_agency 'She\'ll be right'
end
