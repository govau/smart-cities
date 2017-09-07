class Admin::EventsController < ApplicationController
  layout 'simple'
  
  def index    
    authorize! :read, :event
    @events = Event.by_time.page params[:page]
  end
end
