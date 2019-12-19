class Ddd < ActiveRecord::Migration[5.2]
  def change
    drop_table :topUsers
  end
end
