class HomeController < ApplicationController
  authorize_resource class: false if AUTH_CONFIG.enabled

  def index
  end
end
