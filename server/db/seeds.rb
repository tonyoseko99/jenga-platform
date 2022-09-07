require 'faker'
puts "Seeding begin ......."

# suppliers
supplier_one = Supplier.create(name: Faker::Name.name, quantity_left: rand(1...9))
19.times do Supplier.create(name: Faker::Name.name, quantity_left: rand(1...9))
end

# products 
p_1 = Product.create(title: "bag", image_url: "https://www.cittadesign.com/market-bag/5637394358.p", description: "lorem", price: 44.50, supplier_id: supplier_one.id)
19.times do Product.create(title: "bag", image_url: "https://www.cittadesign.com/market-bag/5637394358.p", description: "lorem", price: 44.50, supplier_id: supplier_one.id)
end

# users
user_one = User.create(username: "Nickky", email: "nicky254@gmail.com", password: "niccky245")
9.times do User.create(username: "Nickky", email: "nicky254@gmail.com", password: "niccky245")
end

# reviews
review_one = Review.create(review_content: "this is review content for the product", user_id: user_one.id, product_id: p_1.id)
19.times do Review.create(review_content: "this is review content for the product", user_id: user_one.id, product_id: p_1.id)
end




puts "Seeding end ....."