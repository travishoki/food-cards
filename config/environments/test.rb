# frozen_string_literal: true

require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.enable_reloading = true
  config.eager_load = ENV["CI"].present?
  config.public_file_server.enabled = true
  config.public_file_server.headers = { "cache-control" => "public, max-age=3600" }
  config.consider_all_requests_local = true
  config.action_controller.allow_forgery_protection = false
  config.cache_store = :null_store
  config.action_dispatch.show_exceptions = :rescuable
  config.active_support.deprecation = :stderr
  config.active_support.disallowed_deprecation = :raise
  config.active_support.disallowed_deprecation_warnings = []
  config.active_storage.service = :test
  config.secret_key_base = ENV.fetch(
    "SECRET_KEY_BASE",
    "food_cards_test_secret_key_base_must_be_at_least_32_characters_long_ok"
  )
end
