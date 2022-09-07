class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # homepage
    get "/" do
      "welcome to the homepage!!"
    end

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

    # sort in descending order
    get "/products?sort=desc" do
      products = Product.find_by(name: :desc)
      products.to_json
    end

    # update product

    # update review

    # delete review

    
  
end