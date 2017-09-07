Rails.application.routes.draw do
  namespace :admin do 
    resources :users, except: [:destroy] do 
      member do 
        put :regenerate
        put :invite
      end
    end
    
    resources :events, only: [:index]
  end
  
  if ENV['ENABLE_ROUTES_IMPORT'] 
    resource :import, only: [:new, :create, :show]
  end

  devise_for :users,
    controllers: {
      sessions: 'users/sessions',
      invitations: 'users/invitations',
      passwords: 'users/passwords'
    }
  
  if ENV['ENABLE_ROUTES_MAIN']
    namespace :api do
      namespace :v1 do
        %w(agencies assessment_collections benefits benefit_assessments
            business_categories portfolios projects project_assessments
            risks risk_assessments).each do |res|
          resources res.to_sym, only: [:index]
        end

        resources :events, only: [:create]
      end
    end

    root to: 'home#index'
    get '*path', to: 'home#index', format: false
  elsif ENV['ENABLE_ROUTES_IMPORT']
    root to: 'imports#show'
  else
    raise 'At least one of the following env vars must be true:' +
      ' ENABLE_ROUTES_MAIN, ENABLE_ROUTES_IMPORT'
  end
end
