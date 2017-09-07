class Api::V1::BusinessCategoriesController < Api::V1::BaseController
  def index
    @business_categories = BusinessCategory.all
  end
end
