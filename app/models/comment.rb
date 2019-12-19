class Comment < ApplicationRecord
  belongs_to :top
  belongs_to :user
end
