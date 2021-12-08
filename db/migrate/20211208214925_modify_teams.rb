class ModifyTeams < ActiveRecord::Migration[6.1]
  def change
    add_column :teams, :password_digest, :string
  end
end
