puts "Seeding begin ......."

puts "Seeding products table....."
# products 
p_1 = Product.create(title: "bag", image_url: "", description: "lorem", price: 44.50)
20.times do p_1
end

# reviews
review_one = Review.create(review_content: "this is review content for the product", user_id: user_id, product_id: product_id)
40.times do review_one
end

# users
user_one = User.create(username: "Nickky", email: "nicky254@gmail.com", password: "niccky245")
10.times do user_one
end


puts "Seeding end ....."