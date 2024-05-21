class User::GenresController < ApplicationController

  def index
    @genres = Genre.all
  end

  def show
    @genre = Genre.find(params[:id])
    @items = @genre.items
  end

  def genre_params
    params.require(:genre).permit(:name, :image)
  end

end
