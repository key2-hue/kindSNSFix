class AddForeignKey2ToTopUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :top_users, :top, foreign_key: true
    add_reference :top_users, :user, foreign_key: true
  end
end
