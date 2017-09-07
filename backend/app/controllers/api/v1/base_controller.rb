class Api::V1::BaseController < ApplicationController
  before_action :authorize_api_read, only: [:index] 

  def authorize_api_read
    if AUTH_CONFIG.enabled
      authorize! :read, :api
    end
  end
end