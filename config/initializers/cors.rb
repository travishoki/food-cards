# frozen_string_literal: true

# Allow the Vite dev server (option 2: SPA on another origin) to call the Rails API directly.
# When you use Vite's proxy, the browser only talks to :5173; CORS still helps tools and direct API hits.
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(
      "http://localhost:5173",
      "http://127.0.0.1:5173"
    )

    resource "/api/*",
      headers: :any,
      methods: %i[get options head]
  end
end
