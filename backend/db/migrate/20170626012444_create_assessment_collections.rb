class CreateAssessmentCollections < ActiveRecord::Migration[5.0]
  def change
    create_table :assessment_collections do |t|
      t.date :begins_at, null: false
      t.date :ends_at, null: false
      t.string :dimo_period_name, null: false

      t.timestamps
    end
  end
end
