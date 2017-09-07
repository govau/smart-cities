class AddDimoAssessmentToProjectAssessments < ActiveRecord::Migration[5.1]
  def change
    add_column :project_assessments, :dimo_assessment, :text
  end
end
