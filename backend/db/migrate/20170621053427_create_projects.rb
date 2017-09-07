class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.references :agency
      t.string :dimo_uid
      t.string :kind
      t.datetime :start_date
      t.datetime :completion_date
      t.string :objectives
      t.boolean :budget_funded
      t.integer :total_budget
      t.integer :ict_budget
      t.string :agency_coordinator_email
      t.string :agency_sro_email

      t.timestamps
    end

    add_index :projects, :dimo_uid, unique: true
  end
end
