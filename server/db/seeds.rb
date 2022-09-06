puts "Seeding begin ......."

# products 
p_1 = Product.create(title: "bag", image_url: "https://www.cittadesign.com/market-bag/5637394358.p", description: "lorem", price: 44.50)
19.times do Product.create(title: "bag", image_url: "https://www.cittadesign.com/market-bag/5637394358.p", description: "lorem", price: 44.50)
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