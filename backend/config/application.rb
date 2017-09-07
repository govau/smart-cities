require_relative 'boot'

require 'rails/all'
#require 'action_dispatch/debug_locks'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module IctDashboard
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # config.middleware.insert_before Rack::Sendfile, ActionDispatch::DebugLocks

    config.generators do |g|
      g.test_framework :rspec, fixture_replacement: :fabrication
      g.fixture_replacement :fabrication, dir: 'spec/fabricators'
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.view_specs false
      g.decorator false
    end

    config.autoload_paths << "#{Rails.root}/app/errors"

    config.action_mailer.default_url_options = {
      host:                 ENV['URL_HOST'] || 'ict.dashboard.gov.au',
      port:                 ENV['URL_PORT'] || 80,
      protocol:             ENV['URL_PROTOCOL'] || 'http' }

    config.to_prepare do    
      Devise::TwoFactorAuthenticationController.layout 'simple'
    end
  end
end
