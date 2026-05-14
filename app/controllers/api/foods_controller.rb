# frozen_string_literal: true

module Api
  class FoodsController < BaseController
    def index
      base = request.base_url
      h = ActionController::Base.helpers

      foods = FoodCatalog.sorted_by_category.map do |food|
        {
          id: food.id,
          name: food.name,
          category_key: food.category_key,
          category_label: food.category_label,
          background_url: "#{base}#{h.asset_path(food.background)}",
          icon_url: "#{base}#{h.asset_path(food.icon)}",
          image_url: "#{base}#{h.asset_path(food.image)}",
          info: food.info
      }.compact
      end

      render json: foods
    end
  end
end
