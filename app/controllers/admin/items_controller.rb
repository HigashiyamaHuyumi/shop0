class Admin::ItemsController < ApplicationController

  def index
    @item = Item.new
    @items = Item.page(params[:page])
  end

  def new
    @item = Item.new
  end

  def create
    puts params.inspect
    @item = Item.new(item_params)
    if @item.save
      flash[:notice] ='商品を新規作成しました。'
      redirect_to admin_item_path(@item)
    else
      render :new
    end
  end

  def show
    @item = Item.find(params[:id])
    @genre = @item.genre
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update #データを更新する
   @item = Item.find(params[:id])
    if @item.update(item_params)
     #flash[:notice] ='You have updated book successfully.'
     redirect_to admin_item_path(@item.id)
    else
     render :edit
    end
  end

  def destroy #データを削除する
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to admin_items_path
  end

  private

  def item_params
    params.require(:item).permit(:name, :introduction, :price, :color, :genre_id, :image)
  end

end
