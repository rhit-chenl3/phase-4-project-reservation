class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      team = Team.find_by(email: params[:email])
      if team&.authenticate(params[:password])
        session[:team_id] = team.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :team_id
      head :no_content
    end
  
  end
