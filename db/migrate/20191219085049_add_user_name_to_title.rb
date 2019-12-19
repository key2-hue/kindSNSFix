class AddUserNameToTitle < ActiveRecord::Migration[5.2]
  def change
    add_column :tops, :userName, :string
  end
end
