class TopUser < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :top, optional: true
end
