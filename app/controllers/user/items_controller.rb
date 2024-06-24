class User::ItemsController < ApplicationController

  def index
    @item = Item.new
    @items = Item.page(params[:page])
  end
  
  def show
    @item = Item.find(params[:id])
    @cart_item = current_user.cart_items.new if user_signed_in?
  end

  private

  def item_params
    params.require(:item).permit(:name, :introduction, :price, :color, :image, :genre_id)
  end

end
