class Api::V1::AgenciesController < Api::V1::BaseController
  def index
    @agencies = Agency.all
  end
end
