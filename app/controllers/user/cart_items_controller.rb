class User::CartItemsController < ApplicationController
  before_action :set_cart_item, only: [:update,:destroy]

  def create
    item = Item.find(cart_item_params[:item_id])
    @user_cart_item = current_user.cart_items.find_by(item_id: item.id)
    amount = cart_item_params[:amount].to_i

    if @user_cart_item
      @user_cart_item.amount += amount
      @user_cart_item.save
    else
      @cart_item = current_user.cart_items.build(item: item, amount: amount)
      if @cart_item.save
        flash[:success] = "カートに追加しました。"
      else
        flash[:error] = "商品をカートに追加できませんでした。"
        redirect_to item_path(item)
      end
    end
    redirect_to cart_items_path
  end

  def index
    @cart_items = current_user.cart_items
    @total_amount = 0

    @cart_items.each do |cart_item|
      @total_amount += cart_item.subtotal
    end
  end

  def update #データを更新する
    if @cart_item.update(cart_item_params)
      flash[:success] = "カートアイテムを更新しました。"
    else
      flash[:error] = "カートアイテムの更新に失敗しました。"
    end
    redirect_to cart_items_path
  end

  def destroy
    @cart_item.destroy
    flash[:success] = "商品をカートから削除しました。"
    redirect_to cart_items_path
  end

  def destroy_all
    current_user.cart_items.destroy_all
    flash[:success] = "カート内のすべての商品を削除しました。"
    redirect_to item_index_path
  end

  private

  def set_cart_item
    @cart_item = CartItem.find(params[:id])
  end

  def cart_item_params
    params.require(:cart_item).permit(:item_id, :amount)
  end
end