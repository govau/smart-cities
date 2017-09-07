class CreateBenefits < ActiveRecord::Migration[5.0]
  def change
    create_table :benefits do |t|
      t.references :project
      t.string :dimo_uid
      t.date :start_date
      t.text :description

      t.timestamps
    end

    add_index :benefits, :dimo_uid, unique: true
  end
end
