class SuppliersTable < ActiveRecord::Migration[6.1]
  def change
    create_table :suppliers do |t|
      t.string :name
      t.integer :quantity_left
    end
  end
end
