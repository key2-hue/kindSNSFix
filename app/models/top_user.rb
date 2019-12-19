class TopUser < ApplicationRecord
  belongs_to :user
  belongs_to :top
end
