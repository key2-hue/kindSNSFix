class AddCountToComment < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :count, :integer
  end
end
