# frozen_string_literal: true

class FoodCardsController < ApplicationController
  def index
    @food_ids = (1..6).to_a
  end
end
