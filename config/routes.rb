Rails.application.routes.draw do


  # 顧客用
  # URL /customers/sign_in ...
  devise_for :users, skip: [:passwords], controllers: {
    registrations: "user/registrations",
    sessions: 'user/sessions'
  }

  scope module: 'user' do
 		get '/users/mypage', to: 'users#mypage', as: 'mypage'
 		get '/users/mypage/info', to: 'users#info', as: 'info'
 		get '/users/mypage/info_edit', to: 'users#edit', as: 'edit'
     resources :users, only: [:show, :update] do
 		  get :confirm, on: :member # 退会確認
     patch :withdrawal, on: :member # 退会処理
 		end
  end

  # 管理者用
  # URL /admin/sign_in ...
  devise_for :admin, skip: [:registrations, :passwords], controllers: {
    sessions: "admin/sessions"
  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "homes#top"
end
