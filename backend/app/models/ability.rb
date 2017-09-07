class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new 

    if user.has_role? :viewer
      can :read, :home
      can :read, :api
      can :write, Event
    end

    if user.has_role? :inviter 
      can :create, :user
      can :read, :user
      can :destroy, :user
      can :update, :user
      can :invite, :user
    end

    if user.has_role? :uploader 
      can :read, :import
      can :create, :import
    end

    if user.has_role? :auditer
      can :read, :event
    end
  end
end
