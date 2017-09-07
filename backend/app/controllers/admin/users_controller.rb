class Admin::UsersController < ApplicationController
  layout 'simple'

  def index
    authorize! :read, :user
    @users = User.order name: :asc
  end

  def destroy
    authorize! :destroy, :user
    @user = User.find params[:id]
    @user.delete

    flash[:notice] = "User #{@user} destroyed."
    redirect_to admin_users_url
  end
  
  def show
    authorize! :read, :user
    @user = User.find params[:id]

    respond_to do |format| 
      format.html 
      format.p12 { send_file @user.certificate_path, type: 'application/x-pkcs12' }
    end
  end

  def edit 
    authorize! :update, :user
    @user = User.find params[:id]
  end

  def new 
    authorize! :create, :user 
    @user = User.new
  end

  def create 
    authorize! :create, :user 
    @user = User.new user_params
    @user.define_singleton_method(:password_required?) { false } # Avoid validation failure
    @user.save!
    set_roles 
    flash_certificate_password
    log_event 'create', @user.as_json(only: [:email, :phone_number]) 
    redirect_to admin_user_url @user   
  end

  def update 
    authorize! :update, :user
    @user = User.find params[:id]    
    @user.define_singleton_method(:password_required?) { false } # In case not yet invited
    @user.update! user_params
    set_roles
    redirect_to admin_user_url @user
  end

  def invite
    authorize! :invite, :user
    @user = User.find params[:id]
    @user.invite! current_user
    log_event 'invite', @user.as_json(only: [:email, :phone_number]) 
    flash[:notice] = "User #{@user.name} has been invited."
    redirect_to admin_user_url @user
  end

  def regenerate
    authorize! :update, :user
    @user = User.find params[:id]
    @user.generate_certificate
    @user.save!
    flash_certificate_password
    redirect_to admin_user_url @user
  end
 
  private

  def user_params
    params.require(:user).permit(:phone_number, :name, :email)
  end

  def flash_certificate_password
    flash[:cert_pass] = @user.certificate_password
  end

  def set_roles 
    @user.roles.delete_all
    
    params[:user][:roles].each do |role|
      @user.add_role(role) if current_user.has_role?(role)
    end
  end
end
