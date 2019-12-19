class RemoveForeignKeyFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_reference :comments, :topUser, foreign_key: true
  end
end
