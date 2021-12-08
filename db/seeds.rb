# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
Arbiter.destroy_all
Team.destroy_all
Court.destroy_all
Arbiter.reset_pk_sequence
Team.reset_pk_sequence
Court.reset_pk_sequence

bobby= Arbiter.create!(name: "bobby", hourly_cost: 5, email: "bob@yahoo.com", phone: "8122230816")
ale= Arbiter.create!(name: "ale", hourly_cost: 60, email: "ale@gmail.com", phone: "3030300307")
will= Arbiter.create!(name: "will", hourly_cost: 30, email: "will@gmail.com", phone: "2150300307")    
puts "Arbiter added"
bullhogs= Team.create!(name: "bullhogs", email: "bullhogs@gmail.com",password_digest: "bullhogs123")
walnuts=Team.create!(name: "walnuts", email: "walnuts@gmail.com", password_digest: "walnuts123")
wonkies= Team.create!(name: "wonkies", email: "wonkies@gmail.com", password_digest: "wonkies123")
puts "We have teams"
Court.create(name:"supreme",location:"brazil",time: 11, charge_per_hour: 200, team_id: bullhogs.id, arbiter_id: bobby.id )
Court.create(name:"walter johnsons",location:"La",time: 9, charge_per_hour: 250, team_id: walnuts.id, arbiter_id: ale.id )
Court.create(name:"mill creek",location:"spain",time: 17, charge_per_hour: 230, team_id: wonkies.id, arbiter_id: will.id )
puts "Yay courts"
puts "Done Seeding"