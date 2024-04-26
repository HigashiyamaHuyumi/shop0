class User::UsersController < ApplicationController
  before_action :is_matching_login_user, only: [:mypage, :info, :edit, :update, :confirm, :withdrawal]

  def mypage #顧客のマイページ
    @user = current_user
  end

  def info #顧客の登録情報画面
    @user = current_user
  end

  def edit #顧客の登録情報編集画面
    @user = current_user
  end

  def update #顧客の登録情報更新
    @user = current_user
    if @user.update(user_params)
      flash[:notice] = '登録情報を更新しました'
      redirect_to info_path
    else
      render 'users_info_edit'
    end
  end

  def confirm #退会確認画面
    is_matching_login_user
    @user = User.find(params[:id])
  end

  def withdrawal  #退会画面
    @user = User.find(params[:id])
    @user.update(is_active: false)
    sign_out @user
    redirect_to root_path, notice: "アカウントが削除されました。"
  end

  private

  def user_params
    params.require(:user).permit(:last_name, :first_name, :last_name_kana, :first_name_kana, :email, :postal_code, :address, :telephone_number, :is_active, :password, :password_confirmation)
  end

  def is_matching_login_user
    @user = current_user
    unless @user.id == current_user.id
      redirect_to mypage_path
    end
  end

end
