# frozen_string_literal: true

module Api
  class FoodsController < BaseController
    def index
      base = request.base_url
      h = ActionController::Base.helpers

      foods = FoodCatalog.all.sort_by(&:id).map do |food|
        {
          id: food.id,
          name: food.name,
          background_url: "#{base}#{h.asset_path(food.background)}",
          icon_url: "#{base}#{h.asset_path(food.icon)}",
          image_url: "#{base}#{h.asset_path(food.image)}"
        }
      end

      render json: foods
    end
  end
end
