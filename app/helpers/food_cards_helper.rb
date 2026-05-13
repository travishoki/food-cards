# frozen_string_literal: true

module FoodCardsHelper
  def food_image_left_px
    background_width = 750
    food_width = 613
    ((background_width - food_width) / 2) + 4
  end
end
