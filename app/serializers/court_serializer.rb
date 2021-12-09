class CourtSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :time, :charge_per_hour, :team_id, :arbiter_id
  belongs_to :arbiter
  belongs_to :team
end
