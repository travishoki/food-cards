# frozen_string_literal: true

class FoodCardsController < ApplicationController
  def index
    @categories = FoodCatalog.menu_categories
    grouped = FoodCatalog.foods_grouped_for_index

    requested = params[:category].to_s.strip
    if requested.present? && FoodCatalog::CATEGORY_ORDER.include?(requested)
      @foods_by_category = grouped.select { |g| g[:key] == requested }
      @active_category = requested
    else
      @foods_by_category = grouped
      @active_category = nil
    end
  end
end
