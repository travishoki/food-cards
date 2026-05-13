# frozen_string_literal: true

Rails.application.routes.draw do
  root "food_cards#index"

  namespace :api do
    resources :foods, only: [:index]
  end
end
