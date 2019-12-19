class RemoveForeignKey2FromTopUsers < ActiveRecord::Migration[5.2]
  def change
    remove_reference :top_users, :top, foreign_key: true
    remove_reference :top_users, :user, foreign_key: true
  end
end
