class CreateProjectAssessments < ActiveRecord::Migration[5.0]
  def change
    create_table :project_assessments do |t|
      t.references :project, foreign_key: true, null: false
      t.references :assessment_collection, foreign_key: true, null: false
      t.integer :total_spend_to_date
      t.string :time_score
      t.string :time_score_note
      t.string :ict_cost_score
      t.string :spend_time_deviation
      t.decimal :spend_percentage, precision: 6, scale: 2
      t.decimal :time_percentage, precision: 6, scale: 2
      t.integer :overall_benefit_viability_assessor
      t.integer :overall_benefit_status_assessor
      t.integer :overall_benefit_rating
      t.text :overall_benefit_assessor_note
      t.string :overall_risk_logical_complete_current
      t.string :overall_risk_residual_risks
      t.integer :overall_risk_assessor
      t.text :overall_risk_assessor_note
      t.text :delivery_confidence_assessor_note
      t.string :public_impact_population
      t.string :public_impact_quantum
      t.integer :public_impact_score
      t.text :public_impact_score_note
      t.text :general_note
      t.text :recommendations
      t.integer :duration
      t.string :assessment_priority
      t.integer :delivery_confidence_assessor_score
      t.integer :overall_residual_risk_score
      t.string :delivery_confidence_dimo
      t.string :delivery_confidence_agency
      t.text :status_commentary_agency

      t.timestamps
    end
  end
end
