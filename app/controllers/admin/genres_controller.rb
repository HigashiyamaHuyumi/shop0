class Admin::GenresController < ApplicationController
  before_action :authenticate_admin!

  def create
    @genre = Genre.new(genre_params)
    if @genre.save
      redirect_to admin_genres_path, notice: '新しいジャンルが作成されました'
    else
      flash[:notice] ='タグ名が空白か、既に存在します'
      @genres = Genre.all
      render :index
    end
  end

  def edit
    @genre = Genre.find(params[:id])
  end

  def update
    @genre = Genre.find(params[:id])
    @genre.update(genre_params)
    redirect_to admin_genres_path
  end

  def index
    @genre = Genre.new
    @genres = Genre.all
  end

  def destroy
    
    @genre = Genre.find(params[:id])
    @genre.destroy
    redirect_to admin_genres_path, notice: 'ジャンルが削除されました。'
  end

  private

  def genre_params
    params.require(:genre).permit(:name)
  end



end