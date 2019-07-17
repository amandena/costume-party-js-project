class CostumePartySerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time

  belongs_to :user
  has_many :costumes
  has_many :users, through: :costumes

end
