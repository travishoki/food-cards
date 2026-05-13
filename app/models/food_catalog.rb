# frozen_string_literal: true

class FoodCatalog
  Entry = Struct.new(:id, :name, :background, :icon, :image, keyword_init: true)

  def self.all
    [
      Entry.new(
        id: 1,
        name: "Donut",
        background: "backgrounds/1-red.png",
        icon: "icons/fruit.png",
        image: "image/sugar-fat-salt/glazed-donut.jpg"
      ),
      Entry.new(
        id: 2,
        name: "Texas Toast",
        background: "backgrounds/2-yellow.png",
        icon: "icons/fruit.png",
        image: "image/fats-oils/texas-toast.jpg"
      ),
      Entry.new(
        id: 3,
        name: "Peanut Butter",
        background: "backgrounds/3-orange.png",
        icon: "icons/fruit.png",
        image: "image/protien/peanut-butter.jpg"
      ),
      Entry.new(
        id: 4,
        name: "Milk",
        background: "backgrounds/4-blue.png",
        icon: "icons/dairy.png",
        image: "image/dairy/milk.jpg"
      ),
      Entry.new(
        id: 5,
        name: "Mashed Potatoes",
        background: "backgrounds/5-purple.png",
        icon: "icons/fruit.png",
        image: "image/grains/mashed-potatoes.jpg"
      ),
      Entry.new(
        id: 6,
        name: "Grapes",
        background: "backgrounds/6-green.png",
        icon: "icons/fruit.png",
        image: "image/fruit-and-vegi/grapes.jpg"
      )
    ]
  end

  def self.find(id)
    all.find { |food| food.id == id.to_i }
  end
end
