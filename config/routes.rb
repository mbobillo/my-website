Rails.application.routes.draw do
  get '/home' => "static_pages#home"
  get '/webdev' => "static_pages#webdev"
  get '/consulting' => "static_pages#consulting"
  get '/about' => "static_pages#about"
  root 'static_pages#home'
  resources :contacts, only: [:new, :create]
  get 'contact', to: 'contacts#new', as: 'contact'
  post 'contact', to: 'contacts#create'
end
