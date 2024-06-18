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
    @total_amount = @cart_items.sum(&:subtotal)
    @postage = 0
    if @total_amount >= 5000
      @postage = 0
    else
      @postage = 550
    end
  end

  def update
    if @cart_item.update(cart_item_params)
      @total_amount = current_user.cart_items.sum(&:subtotal)
      respond_to do |format|
        format.html { redirect_to cart_items_path, notice: '数量が変更されました。' }
        format.json do
          render json: {
            item_id: @cart_item.id,
            item_subtotal: view_context.number_with_delimiter(@cart_item.subtotal),
            total_amount: view_context.number_with_delimiter(@total_amount)
          }
        end
      end
    else
      flash[:error] = "カートアイテムの更新に失敗しました。"
      render :index
    end
  end

  def destroy
    @cart_item.destroy
    flash[:success] = "商品をカートから削除しました。"
    redirect_to cart_items_path
  end

  private

  def set_cart_item
    @cart_item = CartItem.find(params[:id])
  end

  def cart_item_params
    params.require(:cart_item).permit(:item_id, :amount, :size)
  end
end