class TopUser < ApplicationRecord
  belongs_to :user
  belongs_to :top
  belongs_to :comment

end
