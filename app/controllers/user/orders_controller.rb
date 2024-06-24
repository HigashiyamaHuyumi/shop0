class User::OrdersController < ApplicationController

  def new #注文情報入力
    if current_user.cart_items.empty?
    redirect_to item_index_path, alert: "カートに商品がありません。"
    else
      @order = Order.new
      @total_amount = current_user.cart_items.sum(&:subtotal)
      @order.postage = @total_amount >= 5000 ? 0 : 550
    end
  end

  def confirmation #注文情報確認
    @cart_items = current_user.cart_items
    @order = Order.new(order_params)
    @order.user_id = current_user.id

    @total_amount = current_user.cart_items.sum(&:subtotal)
    @order.postage = @total_amount >= 5000 ? 0 : 550
    @total_payment = @total_amount + @order.postage

    @order.shipping_postal_code = current_user.postal_code
    @order.shipping_address = current_user.address
    @order.shipping_name = current_user.last_name + current_user.first_name
  end

  def create
    @order = Order.new(order_params)
    @order.user_id = current_user.id
    @total_amount = current_user.cart_items.sum(&:subtotal)
    @order.postage = @total_amount >= 5000 ? 0 : 550

    if @order.save
      @cart_items = current_user.cart_items
      @cart_items.each do |cart_item|
        order_detail = OrderDetail.new(
          order_id: @order.id, # order_idを設定
          purchase_price: cart_item.item.price,
          amount: cart_item.amount,
          size: cart_item.size,
          item_id: cart_item.item_id
        )
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
    @orders = current_user.orders.order(created_at: :desc)
  end

  def show # 注文履歴詳細画面
    if params[:id] == "complete"
      # 注文完了画面を表示する処理
      render "complete"
    else
      @order = Order.find(params[:id])
      @order_details = @order.order_details.all
      @total_payment = @order.calculate_total_payment
    end
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :shipping_postal_code, :shipping_address, :shipping_name, :postage, :total_payment, :payment_method)
  end
end