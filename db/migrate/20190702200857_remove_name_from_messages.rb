class RemoveNameFromMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :name, :string
  end
end
