class User::ItemsController < ApplicationController

  def index
    @item = Item.new
    @items = Item.page(params[:page])
  end

  def show
    @item = Item.find(params[:id])
  end

  private

  def item_params
    params.require(:item).permit(:name, :introduction, :price, :image)
  end

end