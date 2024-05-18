class Admin::OrdersController < ApplicationController
  
  def index # 注文一覧を表示する
    @orders = Order.page(params[:page])
  end

  def show #注文履歴を表示する
    @order = Order.find(params[:id])
    @order_details = @order.order_details.all
    @total_payment = @order.calculate_total_payment
  end

  def update # データを更新する
    @order = Order.find(params[:id])
    if @order.update(order_params)
      redirect_to admin_order_path(@order)
    else
      render :edit
    end
  end

  def destroy # データを削除する
    @order = Order.find(params[:id])
    @order.destroy
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :shipping_postal_code, :shipping_address, :shipping_name, :postage, :total_payment, :payment_method)
  end
  
end
