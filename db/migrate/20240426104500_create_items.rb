class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :genre_id, null: false
      t.string :name, null: false
      t.text :introduction
      t.integer :price, null: false
      t.string :color, null: false
      t.timestamps
    end
  end
end
