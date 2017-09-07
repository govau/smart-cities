class DataImporter 
  def initialize(path)
    @path = path
  end

  def run 
    @workbook = RubyXL::Parser.parse @path

    ActiveRecord::Base.transaction do
      import_portfolios_and_agencies
      import_projects_and_assessments
      import_benefits
      import_risks
      import_business_categories
    end
  end

  private 

  def import_benefits
    worksheet_rows('PP_Benefits') do |row|
      project = find_entity! Project, :dimo_uid, row, 0
      collection = find_entity! AssessmentCollection, :dimo_period_name, row, 1

      benefit = Benefit.where(dimo_uid: cell_value(row, 2),
          project: project).first_or_create.tap do |b|
        b.start_date = cell_value row, 11
        b.description = cell_value row, 4
      end

      benefit.save!

      assessment = BenefitAssessment.where(
        benefit_id: benefit.id,        
        assessment_collection_id: collection.id
      ).first_or_create.tap do |a|
        a.date_of_last_update = cell_value row, 3
        a.realisation_start_date = cell_value row, 5
        a.status = cell_value row, 6, /^\d_/
        a.assessor_note = cell_value row, 7
        a.viability_assessor = cell_value row, 8
        a.status_assessor = cell_value row, 9
        a.rating = cell_value row, 10
        a.status_rating = cell_value row, 12
      end

      assessment.save!
    end
  end

  def import_business_categories
    worksheet_rows('PP_BusinessCategory') do |row|
      project = find_entity! Project, :dimo_uid, row, 0
      project.update_attribute :business_category,
        BusinessCategory.where(name: cell_value(row, 1)).first_or_create
    end
  end

  def import_risks
    worksheet_rows('PP_Risks') do |row| 
      project = find_entity! Project, :dimo_uid, row, 0
      collection = find_entity! AssessmentCollection, :dimo_period_name, row, 1

      risk = Risk.where(dimo_uid: cell_value(row, 2),
          project: project).first_or_create.tap do |r|
        r.description = cell_value row, 4
      end

      risk.save!

      assessment = RiskAssessment.where(
        risk_id: risk.id,        
        assessment_collection_id: collection.id
      ).first_or_create.tap do |a|        
        a.date_of_last_update = cell_value row, 3
        a.rating_before_mitigation = cell_value row, 5, /^\d_/
        a.mitigation_strategy = cell_value row, 6
        a.rating_after_mitigation = cell_value row, 7, /^\d_/
        a.assessor_note = cell_value row, 8
        a.logical_complete_current = cell_value row, 9
        a.residual_risks = cell_value row, 10
        a.residual_risks_score = cell_value row, 12
      end

      assessment.save!
    end
  end

  def import_portfolios_and_agencies
    worksheet_rows('AgencyPortfolio') do |row|
      if portfolio_name = cell_value(row, 0)
        portfolio = Portfolio.where(name: portfolio_name).first_or_create
        agency_name = cell_value row, 1
        agency_short_name = cell_value row, 2

        if agency_name.present? && agency_short_name.present?
          agency = Agency.where(name: agency_name,
              short_name: agency_short_name).first_or_initialize.tap do |a|
            a.portfolio = portfolio
          end

          agency.save!
        end
      end
    end
  end

  def import_projects_and_assessments
    worksheet_rows('PP_Assessments') do |row|
      agency = find_entity! Agency, :short_name, row, 0
      dimo_uid = cell_value! row, 1, 'No project ID'
      
      project = Project.where(dimo_uid: dimo_uid).first_or_initialize.tap do |p|
        p.agency = agency
        p.name = cell_value row, 3
        p.start_date = cell_value row, 4
        p.completion_date = cell_value row, 5
        p.kind = cell_value row, 34
        p.objectives = cell_value row, 35
        p.total_budget = cell_value row, 7
        p.ict_budget = cell_value row, 9
        p.agency_coordinator_email = cell_value row, 44
        p.agency_sro_email = cell_value row, 45
      end

      project.save!

      collection = AssessmentCollection.where(
        dimo_period_name: cell_value(row, 2)
      ).first_or_create

      collection.populate_dates!
      collection.save!

      assessment = ProjectAssessment.where(
        assessment_collection_id: collection.id,
        project_id: project.id
      ).first_or_create.tap do |a|
        a.project = project
        a.assessment_collection = collection
        a.total_spend_to_date = cell_value row, 8
        a.time_score = cell_value row, 10
        a.time_score_note = cell_value row, 11
        a.ict_cost_score = cell_value row, 12
        a.spend_time_deviation = cell_value row, 13
        a.spend_percentage = cell_value(row, 14) * 100 if cell_value(row, 14).present?
        a.time_percentage = cell_value(row, 15) * 100 if cell_value(row, 15).present?
        a.overall_benefit_viability_assessor = cell_value row, 16
        a.overall_benefit_status_assessor = cell_value row, 17
        a.overall_benefit_rating = cell_value row, 18
        a.overall_benefit_assessor_note = cell_value row, 19
        a.overall_risk_logical_complete_current = cell_value row, 20
        a.overall_risk_residual_risks = cell_value row, 21
        a.overall_risk_assessor = cell_value row, 22
        a.overall_risk_assessor_note = cell_value row, 23
        a.delivery_confidence_assessor_note = cell_value row, 24
        a.public_impact_population = cell_value row, 25
        a.public_impact_quantum = cell_value row, 26
        a.public_impact_score = cell_value row, 27
        a.public_impact_score_note = cell_value row, 28
        a.general_note = cell_value row, 29
        a.recommendations = cell_value row, 30
        a.duration = cell_value row, 31
        a.assessment_priority = cell_value row, 32
        a.delivery_confidence_assessor_score = cell_value row, 33
        a.overall_residual_risk_score = cell_value row, 36
        a.delivery_confidence_dimo = cell_value row, 47, /^\d_/
        a.delivery_confidence_agency = cell_value row, 50, /^\d_/
        a.status_commentary_agency = cell_value row, 43
        a.dimo_assessment = cell_value row, 51
      end

      assessment.save!
    end
  end

  # Utility methods

  def worksheet_rows(worksheet_name)
    sheet = @workbook[worksheet_name]
    raise ImportError.new("Worksheet missing: #{worksheet_name}") unless sheet

    sheet.each_with_index do |row, idx|
      if idx > 0 && row.cells.any?(&:value)
        yield row
      end
    end
  end

  def cell_value(row, col_idx, strip_pattern=nil)
    if row.present? && row[col_idx].present?
      if strip_pattern.present? 
        (row[col_idx].value || '').gsub strip_pattern, ''
      else
        row[col_idx].value
      end
    end
  end

  def cell_value!(row, col_idx, error_message=nil)
    cell_value(row, col_idx).presence ||
      raise_cell_error(row, col_idx, error_message || "Empty cell")
  end

  def find_entity!(clazz, prop, row, col_idx, pretty_prop = nil)
    value = cell_value(row, col_idx)
    obj = clazz.find_by prop => value

    unless obj.present? 
      prop_name = pretty_prop || prop.to_s.humanize(capitalize: false)
      missing = "#{clazz.to_s} with #{prop_name} '#{value}' not found"
      raise_cell_error row, col_idx, missing
    end

    obj
  end

  def raise_cell_error(row, col_idx, details)
    row_idx = row.r
    sheet_name = row.worksheet.sheet_name
    message = "Invalid value found in worksheet '#{sheet_name}'," + 
      " row #{row_idx}, column #{col_idx}: #{details}."
    raise ImportError.new message
  end
end

