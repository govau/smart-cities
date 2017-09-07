class StaticDataGenerator
  def initialize(path = nil)
    @path = path || "#{Rails.root}/tmp/"
    FileUtils::mkdir_p @path unless File.exist? @path
  end

  def run 
    %w(agency assessment_collection benefit benefit_assessment
        business_category portfolio project project_assessment
        risk risk_assessment).each do |entity|
      write_entity entity
    end
  end

  private 

  def write_entity(entity)
    controller = "Api::V1::#{entity.pluralize.camelize}Controller".constantize
    assigns = { entity.pluralize.to_sym => entity.camelize.constantize.all }
    render_and_write entity.pluralize, controller, assigns
  end

  def render_and_write(entity, controller, assigns)
    content = controller.render :index, assigns: assigns
    File.write "#{@path}#{entity}.json", content
  end
end
