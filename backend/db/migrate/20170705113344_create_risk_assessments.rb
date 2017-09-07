class CreateRiskAssessments < ActiveRecord::Migration[5.0]
  def change
    create_table :risk_assessments do |t|
      t.references :risk, foreign_key: true
      t.references :assessment_collection, foreign_key: true
      t.date :date_of_last_update
      t.string :rating_before_mitigation
      t.text :mitigation_strategy
      t.string :rating_after_mitigation
      t.string :assessor_note
      t.text :logical_complete_current
      t.text :residual_risks
      t.integer :residual_risks_score

      t.timestamps
    end
  end
end
