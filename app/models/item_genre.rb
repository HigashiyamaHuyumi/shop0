class ItemGenre < ApplicationRecord
  belongs_to :item
  belongs_to :genre

  validates :item_id, presence: true
  validates :ge_id, presence: true
end
