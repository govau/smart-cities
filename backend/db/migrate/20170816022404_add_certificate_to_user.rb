class AddCertificateToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :certificate, :text
  end
end
