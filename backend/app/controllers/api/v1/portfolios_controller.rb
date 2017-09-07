class Api::V1::PortfoliosController < Api::V1::BaseController
  def index
    @portfolios = Portfolio.all
  end
end
