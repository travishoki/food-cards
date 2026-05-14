# frozen_string_literal: true

class FoodCardsController < ApplicationController
  def index
    @categories = FoodCatalog.menu_categories
    @foods_by_category = FoodCatalog.foods_grouped_for_index
  end
end
