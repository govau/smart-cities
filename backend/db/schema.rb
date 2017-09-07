# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170818033339) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agencies", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.string "short_name", null: false
    t.integer "portfolio_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_agencies_on_name", unique: true
    t.index ["portfolio_id"], name: "index_agencies_on_portfolio_id"
    t.index ["short_name"], name: "index_agencies_on_short_name", unique: true
  end

  create_table "assessment_collections", id: :serial, force: :cascade do |t|
    t.date "begins_at", null: false
    t.date "ends_at", null: false
    t.string "dimo_period_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "benefit_assessments", id: :serial, force: :cascade do |t|
    t.integer "benefit_id"
    t.integer "assessment_collection_id"
    t.date "date_of_last_update"
    t.date "realisation_start_date"
    t.string "status"
    t.text "assessor_note"
    t.integer "viability_assessor"
    t.integer "status_assessor"
    t.integer "rating"
    t.integer "status_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assessment_collection_id"], name: "index_benefit_assessments_on_assessment_collection_id"
    t.index ["benefit_id"], name: "index_benefit_assessments_on_benefit_id"
  end

  create_table "benefits", id: :serial, force: :cascade do |t|
    t.integer "project_id"
    t.string "dimo_uid"
    t.date "start_date"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dimo_uid"], name: "index_benefits_on_dimo_uid", unique: true
    t.index ["project_id"], name: "index_benefits_on_project_id"
  end

  create_table "business_categories", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.bigint "user_id"
    t.string "action"
    t.json "context"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "portfolios", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_portfolios_on_name", unique: true
  end

  create_table "project_assessments", id: :serial, force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "assessment_collection_id", null: false
    t.integer "total_spend_to_date"
    t.string "time_score"
    t.string "time_score_note"
    t.string "ict_cost_score"
    t.string "spend_time_deviation"
    t.decimal "spend_percentage", precision: 6, scale: 2
    t.decimal "time_percentage", precision: 6, scale: 2
    t.integer "overall_benefit_viability_assessor"
    t.integer "overall_benefit_status_assessor"
    t.integer "overall_benefit_rating"
    t.text "overall_benefit_assessor_note"
    t.string "overall_risk_logical_complete_current"
    t.string "overall_risk_residual_risks"
    t.integer "overall_risk_assessor"
    t.text "overall_risk_assessor_note"
    t.text "delivery_confidence_assessor_note"
    t.string "public_impact_population"
    t.string "public_impact_quantum"
    t.integer "public_impact_score"
    t.text "public_impact_score_note"
    t.text "general_note"
    t.text "recommendations"
    t.integer "duration"
    t.string "assessment_priority"
    t.integer "delivery_confidence_assessor_score"
    t.integer "overall_residual_risk_score"
    t.string "delivery_confidence_dimo"
    t.string "delivery_confidence_agency"
    t.text "status_commentary_agency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "dimo_assessment"
    t.index ["assessment_collection_id"], name: "index_project_assessments_on_assessment_collection_id"
    t.index ["project_id"], name: "index_project_assessments_on_project_id"
  end

  create_table "projects", id: :serial, force: :cascade do |t|
    t.string "name"
    t.integer "agency_id"
    t.string "dimo_uid"
    t.string "kind"
    t.date "start_date"
    t.date "completion_date"
    t.string "objectives"
    t.boolean "budget_funded"
    t.integer "total_budget"
    t.integer "ict_budget"
    t.string "agency_coordinator_email"
    t.string "agency_sro_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "business_category_id"
    t.index ["agency_id"], name: "index_projects_on_agency_id"
    t.index ["dimo_uid"], name: "index_projects_on_dimo_uid", unique: true
  end

  create_table "risk_assessments", id: :serial, force: :cascade do |t|
    t.integer "risk_id"
    t.integer "assessment_collection_id"
    t.date "date_of_last_update"
    t.string "rating_before_mitigation"
    t.text "mitigation_strategy"
    t.string "rating_after_mitigation"
    t.string "assessor_note"
    t.text "logical_complete_current"
    t.text "residual_risks"
    t.integer "residual_risks_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assessment_collection_id"], name: "index_risk_assessments_on_assessment_collection_id"
    t.index ["risk_id"], name: "index_risk_assessments_on_risk_id"
  end

  create_table "risks", id: :serial, force: :cascade do |t|
    t.string "description"
    t.integer "project_id"
    t.string "dimo_uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dimo_uid"], name: "index_risks_on_dimo_uid", unique: true
    t.index ["project_id"], name: "index_risks_on_project_id"
  end

  create_table "roles", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.integer "resource_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["name"], name: "index_roles_on_name"
  end

  create_table "sessions", force: :cascade do |t|
    t.string "session_id", null: false
    t.text "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_id"], name: "index_sessions_on_session_id", unique: true
    t.index ["updated_at"], name: "index_sessions_on_updated_at"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.integer "second_factor_attempts_count", default: 0
    t.string "encrypted_otp_secret_key"
    t.string "encrypted_otp_secret_key_iv"
    t.string "encrypted_otp_secret_key_salt"
    t.string "direct_otp"
    t.datetime "direct_otp_sent_at"
    t.datetime "totp_timestamp"
    t.string "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.integer "invited_by_id"
    t.integer "invitations_count", default: 0
    t.string "phone_number", null: false
    t.string "authentication_token", limit: 30
    t.text "certificate"
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["encrypted_otp_secret_key"], name: "index_users_on_encrypted_otp_secret_key", unique: true
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invitations_count"], name: "index_users_on_invitations_count"
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
  end

  add_foreign_key "benefit_assessments", "assessment_collections"
  add_foreign_key "benefit_assessments", "benefits"
  add_foreign_key "events", "users"
  add_foreign_key "project_assessments", "assessment_collections"
  add_foreign_key "project_assessments", "projects"
  add_foreign_key "risk_assessments", "assessment_collections"
  add_foreign_key "risk_assessments", "risks"
  add_foreign_key "risks", "projects"
end
