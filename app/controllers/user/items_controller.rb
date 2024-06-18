class User::ItemsController < ApplicationController

  def index
    @item = Item.new
    @items = Item.page(params[:page])
  end

  def show
    @item = Item.find(params[:id])
    if user_signed_in?
      @cart_item = current_user.cart_items.new
    else
      @item = Item.find(params[:id])
    end
    
  end

  private

  def item_params
    params.require(:item).permit(:name, :introduction, :price, :color, :image, :genre_id)
  end

end
