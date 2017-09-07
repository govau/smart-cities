class Users::InvitationsController < Devise::InvitationsController
  layout 'simple'

  def resource_params
    params.require(:user).permit(
      :name,
      :email,
      :invitation_token,
      :mobile_number,
      :roles)
  end
end
