Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'messages#index'
  resources :messages do
    resources :comments, only: [:new, :create, :destroy]
  end
  resources :users, only: [:show]
end
