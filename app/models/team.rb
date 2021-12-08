class Team < ApplicationRecord
    has_many :arbiters
    has_many :arbiters, through: :courts
    #has_secure_password
    validates :name, presence: true, uniqueness: true
end
