class User::OrdersController < ApplicationController

  def new #注文情報入力
    if current_user.cart_items.empty?
    redirect_to item_index_path, alert: "カートに商品がありません。"
    else
      @order = Order.new
    end
  end

  def confirmation #注文情報確認
    @cart_items = current_user.cart_items
    @total_payment = 0
    @cart_items.each do |cart_item|
      @total_payment += cart_item.subtotal
    end

    @order = Order.new(order_params)
    @order.user_id = current_user.id
    @order.postage = 600  # 固定の送料金額
    @order.total_payment =  @order.postage + @total_payment

    @address_type = params[:order][:address_type]
    if @address_type == "user_address"
      @order.shipping_postal_code = current_user.postal_code
      @order.shipping_address = current_user.address
      @order.shipping_name = current_user.last_name + current_user.first_name
    elsif @address_type == "shipping_address"
      @order.shipping_postal_code = params[:order][:shipping_postal_code]
      @order.shipping_address = params[:order][:shipping_address]
      @order.shipping_name = params[:order][:shipping_name]
    end
  end

  def create
    @order = Order.new(order_params)
    @order.user_id = current_user.id
    @order.postage = 800
    if @order.save!
    @cart_items = current_user.cart_items
    @cart_items.each do |cart_item|
      order_detail = OrderDetail.new(order_id: @order.id)
      order_detail.purchase_price= cart_item.item.price
      order_detail.amount = cart_item.amount
      order_detail.item_id = cart_item.item_id
      order_detail.save!
    end
      @cart_items.destroy_all
      redirect_to orders_complete_path
    else
      render :new
    end
  end

  def complete #注文完了画面
  end

  def index #注文履歴画面
    @orders = current_user.orders.all
  end

  def show #注文履歴詳細画面
    @order = Order.find(params[:id])
    @order_details = @order.order_details.all
    @total_payment = @order.calculate_total_payment
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :shipping_postal_code, :shipping_address, :shipping_name, :postage, :total_payment, :payment_method)
  end
end