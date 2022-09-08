class ProductsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.float :price
      t.integer :supplier_id
    end
  end
end
