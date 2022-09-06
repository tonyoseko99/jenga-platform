class ReviewsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review_content
    end
  end
end
