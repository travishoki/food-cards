# frozen_string_literal: true

class FoodCatalog
  Entry = Struct.new(
    :id, :name, :background, :icon, :image, :info,
    :category_key, :category_label,
    keyword_init: true
  )

  # Order used for the top menu and grouping on the index page.
  CATEGORY_ORDER = %w[
    sugar_fat_salt
    fats_oils
    protein
    dairy
    grains
    fruit_veg
  ].freeze

  def self.all
    [
      Entry.new(
        id: 1,
        name: "Donut",
        background: "backgrounds/1-red.png",
        icon: "icons/fruit.png",
        image: "image/sugar-fat-salt/glazed-donut.jpg",
        category_key: "sugar_fat_salt",
        category_label: "Sugar, Fat & Salt"
      ),
      Entry.new(
        id: 2,
        name: "Texas Toast",
        background: "backgrounds/2-yellow.png",
        icon: "icons/fruit.png",
        image: "image/fats-oils/texas-toast.jpg",
        info: "Preheat oven to 425",
        category_key: "fats_oils",
        category_label: "Fats & Oils"
      ),
      Entry.new(
        id: 3,
        name: "Peanut Butter",
        background: "backgrounds/3-orange.png",
        icon: "icons/fruit.png",
        image: "image/protien/peanut-butter.jpg",
        category_key: "protein",
        category_label: "Protein"
      ),
      Entry.new(
        id: 4,
        name: "Milk",
        background: "backgrounds/4-blue.png",
        icon: "icons/dairy.png",
        image: "image/dairy/milk.jpg",
        category_key: "dairy",
        category_label: "Dairy"
      ),
      Entry.new(
        id: 8,
        name: "Chocolate Milk",
        background: "backgrounds/4-blue.png",
        icon: "icons/dairy.png",
        image: "image/dairy/chocolate-milk.jpg",
        category_key: "dairy",
        category_label: "Dairy"
      ),
      Entry.new(
        id: 7,
        name: "Babybel Cheese",
        background: "backgrounds/4-blue.png",
        icon: "icons/dairy.png",
        image: "image/dairy/babybel-cheese.jpg",
        category_key: "dairy",
        category_label: "Dairy"
      ),
      Entry.new(
        id: 5,
        name: "Mashed Potatoes",
        background: "backgrounds/5-purple.png",
        icon: "icons/fruit.png",
        image: "image/grains/mashed-potatoes.jpg",
        category_key: "grains",
        category_label: "Grains"
      ),
      Entry.new(
        id: 6,
        name: "Grapes",
        background: "backgrounds/6-green.png",
        icon: "icons/fruit.png",
        image: "image/fruit-and-vegi/grapes.jpg",
        category_key: "fruit_veg",
        category_label: "Fruit & Vegetables"
      )
    ]
  end

  def self.menu_categories
    CATEGORY_ORDER.filter_map do |key|
      food = all.find { |f| f.category_key == key }
      next unless food

      { key: key, label: food.category_label }
    end
  end

  def self.foods_grouped_for_index
    menu_categories.map do |cat|
      {
        key: cat[:key],
        label: cat[:label],
        foods: all.select { |f| f.category_key == cat[:key] }.sort_by(&:id)
      }
    end
  end

  def self.sorted_by_category
    all.sort_by do |f|
      [CATEGORY_ORDER.index(f.category_key) || 99, f.id]
    end
  end

  def self.find(id)
    all.find { |food| food.id == id.to_i }
  end
end
