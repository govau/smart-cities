class CreatePortfolios < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolios do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :portfolios, :name, unique: true
  end
end
