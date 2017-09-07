require 'data_importer'
require 'static_data_generator'

class ImportsController < ApplicationController
  authorize_resource class: false if AUTH_CONFIG.enabled
  layout 'simple'

  def create
    path = nil

    begin
      uploaded_io = params[:import][:spreadsheet].presence ||
        raise(ImportError.new('No file specified.'))

      path = "/tmp/#{uploaded_io.original_filename}"

      File.open(path, 'wb') do |file|
        file.write(uploaded_io.read)
      end

      importer = DataImporter.new path
      importer.run

      flash[:notice] = 'Data has been successfully updated.'

      redirect_to import_url
    rescue ImportError => e
      @errors = [e.message]
      render status: :unprocessable_entity
    rescue ActiveRecord::RecordInvalid => e
      @errors = e.record.errors.full_messages
      render status: :unprocessable_entity
    rescue ActiveRecord::RecordNotFound => e 
      @errors = [e.message]
      render status: :not_found
    ensure 
      File.delete(path) if path.present? && File.exists?(path)
    end
  end

  def new
  end

  def show
    @portfolios = Portfolio.all
  end
end
