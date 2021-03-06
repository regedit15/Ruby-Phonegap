class ProductsController < ApplicationController
    before_action :set_product, only: [:show, :edit, :update, :destroy]
    skip_before_filter  :verify_authenticity_token

    # GET /products
    # GET /products.json
    def index
        @products = Product.all
    end


    # GET /hola
    # GET /hola.json
    def hola
        logger.error "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        @p = Product.first
        render json: @p
        logger.error "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"

    end

    # GET /products/1
    # GET /products/1.json
    def show
    end

    # GET /products/new
    def new
        @product = Product.new
    end

    # GET /products/1/edit
    def edit
    end

    # POST /products
    # POST /products.json
    def create
        #  respond_with Product.create(product_params)
        #
        logger.error "SI-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-"

        @product = Product.new(product_params)

        # respond_to do |format|
        #   if @product.save
        #     format.html { redirect_to @product, notice: 'Product was successfully created.' }
        #     format.json { render :show, status: :created, location: @product }
        #   else
        #     format.html { render :new }
        #     format.json { render json: @product.errors, status: :unprocessable_entity }
        #   end
        # end

        if @product.save
            render json: @product, status: :created
        else
            render json: @product.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /products/1
    # PATCH/PUT /products/1.json
    def update
        respond_to do |format|
            if @product.update(product_params)
                format.html { redirect_to @product, notice: 'Product was successfully updated.' }
                format.json { render :show, status: :ok, location: @product }
            else
                format.html { render :edit }
                format.json { render json: @product.errors, status: :unprocessable_entity }
            end
        end
    end

    # DELETE /products/1
    # DELETE /products/1.json
    def destroy
        if @product.destroy
            render json: @product, status: :created
        else
            render json: @product.errors, status: :unprocessable_entity
        end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
        @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
        params.require(:product).permit(:title, :description)
    end
end
