# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

piero = User.create(id: 1, email: "piero@p.com", password: "piero")
zander = User.create(id: 2, email: "zander@z.com", password: "zander")

batman_party = CostumeParty.create(id: 1, name: "Batman Fanatics", date: "10/31/19", time: 8, user_id: 1)

cowboy = Costume.create(id: 1, name: "cowboy", clothing_1: "leather vest", clothing_2: "blue jeans", accessory_1: "cowboy hat", accessory_2: "lasso", cost: 99, scare_rating: 1,
costume_party_id: 1, user_id: 1)
robin = Costume.create(id: 2, name: "Robin", clothing_1: "red shirt", clothing_2: "tights", accessory_1: "mask", accessory_2: "cape", cost: 65, scare_rating: 3,
costume_party_id: 1, user_id: 2)
