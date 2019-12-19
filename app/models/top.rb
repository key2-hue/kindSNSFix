class Top < ApplicationRecord
  has_many :top_users, dependent: :delete_all
  has_many :users, through: :top_users, dependent: :delete_all
end
