class Bbb < ActiveRecord::Migration[5.2]
  def change
    remove_reference :topUsers, :top, foreign_key: true
    remove_reference :topUsers, :user, foreign_key: true
  end
end
