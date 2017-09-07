class CreateAgencies < ActiveRecord::Migration[5.0]
  def change
    create_table :agencies do |t|
      t.string :name, null: false
      t.string :short_name, null: false
      t.references :portfolio

      t.timestamps
    end

    add_index :agencies, :name, unique: true
    add_index :agencies, :short_name, unique: true
  end
end
