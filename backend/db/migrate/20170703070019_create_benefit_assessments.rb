class CreateBenefitAssessments < ActiveRecord::Migration[5.0]
  def change
    create_table :benefit_assessments do |t|
      t.references :benefit, foreign_key: true
      t.references :assessment_collection, foreign_key: true
      t.date :date_of_last_update
      t.date :realisation_start_date
      t.string :status
      t.text :assessor_note
      t.integer :viability_assessor
      t.integer :status_assessor
      t.integer :rating
      t.integer :status_rating

      t.timestamps
    end
  end
end
