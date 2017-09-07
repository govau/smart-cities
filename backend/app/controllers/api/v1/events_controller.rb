class Api::V1::EventsController < Api::V1::BaseController
  skip_before_action :verify_authenticity_token

  def create
    authorize! :write, Event
    @event = Event.create(user: current_user, 
      action: params[:event][:action],
      context: params[:event][:context])
  end
end
