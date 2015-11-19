module Api
  class ProductsController < JSONAPI::ResourceController
    #def index
      #render json: Product.all
    #end

    before_action :delay

    private
    def delay
      sleep 1
    end
  end
end
