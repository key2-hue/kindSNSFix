class AddContentToTops < ActiveRecord::Migration[5.2]
  def change
    add_column :tops, :content, :text
  end
end
