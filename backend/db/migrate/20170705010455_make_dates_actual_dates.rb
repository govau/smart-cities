class MakeDatesActualDates < ActiveRecord::Migration[5.0]
  def change
    change_column :projects, :start_date, :date
    change_column :projects, :completion_date, :date
  end
end
