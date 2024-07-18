Rails.application.routes.draw do
  get '/home' => "static_pages#home"
  get '/webdev' => "static_pages#webdev"
  get '/consulting' => "static_pages#consulting"
  root 'static_pages#home'
end
