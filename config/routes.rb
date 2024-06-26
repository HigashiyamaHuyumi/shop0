Rails.application.routes.draw do


  # 管理者用
  # URL /admin/sign_in ...
  devise_for :admin, skip: [:registrations, :passwords], controllers: {
    sessions: "admin/sessions"
  }


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
    resources :users, only: [:update] do
 		  get :confirm, on: :member # 退会確認
     patch :withdrawal, on: :member # 退会処理
 		end
 		resources :items, only: [:index, :show]
 		resources :cart_items, only: [:create, :index, :update, :destroy]
 		resources :orders, only: [:new, :create, :index, :show]
 		post '/orders/confirmation', to: 'orders#confirmation', as: 'orders_confirmation'
  	get '/orders/complete', to: 'orders#complete', as: 'orders_complete'
  	resources :genres,only: [:show, :index]
  end


  namespace :admin do
		resources :items,only: [:index, :new, :create, :show, :edit, :update, :destroy]
	  resources :users,only: [:index, :show, :edit, :update]
    resources :orders,only: [:show, :index]
    resources :orders_detail,only: [:show]
    resources :genres
	end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "homes#top"
end
