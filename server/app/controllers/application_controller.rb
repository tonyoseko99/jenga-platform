class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    # default route products
    get "/products" do
      products = Product.all
      products.to_json
    end

    # get product by id
    get "/products/:id" do
      products = Product.find(params[:id])
      products.to_json
    end

    # get all reviews
    get "/reviews" do
      reviews = Review.all
      reviews.to_json
    end

    # get review by id
    get "/reviews/:product_id" do
      review = Review.find(params[:product_id])
      review.to_json
    end

    # get all users
    get "/users" do
      users = User.all
      users.to_json
    end

    # get user by id
    get "/users/:id" do
      user = User.find(params[:id])
      user.to_json
    end

    # post item
    post "/products" do
      product = Product.create(
        title: params[:title],
        description: params[:description],
        image_url: params[:image_url],
        price: params[:price],
      )
      product.to_json
    end
    



    # update product

    # update review

    # delete review

    
  
end