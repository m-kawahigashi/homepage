class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :name, index: true, unique: true, null: false
      t.text :text
      t.text :image
      t.timestamps null: true
    end
  end
end
