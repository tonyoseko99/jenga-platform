class CreateCartProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.string :title
      t.string :description
      t.float :price
      t.string :image_url
    end

  end
end
