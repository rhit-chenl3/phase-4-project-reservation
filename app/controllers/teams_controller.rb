class TeamsController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
      teams = Team.all
      render json: teams 
    end
    def show
        render json: @current_team, status: :ok
    end
    def create
        team =Team.create!(params)
        session[:team_id]=team.id
        render json: team, status: :created
    end
    def updated
        teams = find_teams
        teams.update!(params)
        render json: teams, status: :accepted
    end
    def delete
        teams = find_teams
        if teams
            teams.destroy!
        render json: {}
        end
    end
    private
    def find_teams
        Team.find_by(id: params[:id])
    end
    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end
    def patch_params
        params.permit(:name,:email,:password,:password_comfirmation)
    end
end
