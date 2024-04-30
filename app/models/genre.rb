class Genre < ApplicationRecord
  validates :name, uniqueness: { case_sensitive: false }, presence: true
  validate :name_not_blank

  has_many :items

  private

  def name_not_blank
    if name.blank?
      errors.add(:name, "タグ名を入力してください")
    end
  end

end
