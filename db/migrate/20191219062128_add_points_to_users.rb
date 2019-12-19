class AddPointsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :allPoints, :integer
    add_column :users, :titlePoints, :integer
    add_column :users, :commentPoints, :integer
  end
end
