class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :check_client_certificate, unless: :devise_controller? 

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json do
        head :forbidden 
      end

      format.html do
        if current_user.present? 
          render file: "#{Rails.root}/public/403.html", status: 403, layout: false
        else
          redirect_to new_user_session_path, alert: exception.message
        end
      end
    end
  end

  def log_event(action, object = nil)
    obj_json = if object.present? && object.respond_to?(:as_json)
      object.as_json
    end

    Event.create user: current_user, action: action, context: obj_json
  end

  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end

  def after_invite_path_for(resource, invited_user)
    admin_user_path(invited_user)
  end

  def certificate_failure
    render file: "#{Rails.root}/public/401.html", status: 401, layout: false
  end

  def check_client_certificate
    if current_user.present? && AUTH_CONFIG.certificates.enabled
      env_verify = request.env['HTTP_X_CLIENT_VERIFY']
      env_cert = request.env['HTTP_X_SSL_CLIENT_S_DN']
      
      if 'SUCCESS' == env_verify
        env_cert = request.env['HTTP_X_SSL_CLIENT_S_DN']

        if env_cert.present? 
          unless env_cert.gsub(/\s/, '') == current_user.certificate.gsub(/\s/, '')
            puts "Non-matching certificate: #{env_cert}"
            certificate_failure
          end
        else
          puts 'No client certificate sent with request'
          certificate_failure
        end
      else
        puts "Client not verified: #{env_verify}"
        certificate_failure
      end
    end
  end
end
