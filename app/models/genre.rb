class Genre < ApplicationRecord
  validates :name, presence: true
  validate :name_not_blank

  has_many :item_genres, dependent: :destroy
  has_many :items, through: :item_genres

  private

  def name_not_blank
    if name.blank?
      errors.add(:name, "タグ名を入力してください")
    end
  end

end
