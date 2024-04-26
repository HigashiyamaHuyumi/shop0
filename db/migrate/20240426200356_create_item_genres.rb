class CreateItemGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :item_genres do |t|
      t.references :item, foreign_key: true, null: false
      t.references :genre, foreign_key: true, null: false
      t.timestamps
    end
    add_index :item_genres, [:item_id, :genre_id], unique: true
  end
end
