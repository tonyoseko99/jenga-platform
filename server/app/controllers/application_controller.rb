class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    # default route products
    get "/products" do
      products = Product.all
      products.to_json
    end

    # get product by id including supplier name
    get "/products/:id" do
      products = Product.find(params[:id])
      products.to_json(include: :reviews)
    end

    #get all suppliers
    get "/suppliers" do
      suppliers = Supplier.all
      suppliers.to_json
    end

    # et supplier by id
    get "/suppliers/:id" do
      suppliers = Supplier.find(params[:id])
      suppliers.to_json
    end

    # get all reviews
    get "/reviews" do
      reviews = Review.all
      reviews.to_json
    end

    # get review by id
    get "/reviews/:id" do
      reviews = Review.find(params[:id])
      reviews.to_json
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

    # post to cart
    post "/carts" do
      product = Cart.create(
        title: params[:title],
        description: params[:description],
        image_url: params[:image_url],
        price: params[:price],
      )
      product.to_json
    end

    # get items from cart
    get "/carts" do
      products = Cart.all
      products.to_json
    end

    # delete item from cart
    delete "/carts/:id" do
      products = Cart.find(params[:id])
      products.to_json
    end

    # get users
    get "/users" do
      users = User.all
      users.to_json
    end

    get "/users/:id" do
      users = User.find(params[:id])
      users.to_json
    end

    # post users
    post "/users" do
      user = User.create(
        username: params[:username],
        email: params[:email],
        password: params[:password]
      )
      user.to_json
    end
    
  
end