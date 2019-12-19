class AddForeignKeyToTopUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :topUsers, :top, foreign_key: true
    add_reference :topUsers, :user, foreign_key: true
  end
end
