class CreateBusinessCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :business_categories do |t|
      t.string :name

      t.timestamps
    end

    add_column :projects, :business_category_id, :integer
  end
end
