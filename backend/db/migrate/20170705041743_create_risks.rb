class CreateRisks < ActiveRecord::Migration[5.0]
  def change
    create_table :risks do |t|
      t.string :description
      t.references :project, foreign_key: true
      t.string :dimo_uid

      t.timestamps
    end

    add_index :risks, :dimo_uid, unique: true
  end
end
