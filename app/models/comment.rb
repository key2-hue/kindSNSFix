class Comment < ApplicationRecord
  has_many :topUsers
  has_many :users, through: :topUsers
  has_many :comments
end
