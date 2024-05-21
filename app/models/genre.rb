class Genre < ApplicationRecord
  validates :name, uniqueness: { case_sensitive: false }, presence: true
  validate :name_not_blank

  has_many :items
  has_one_attached :image
  
  def get_image
    unless image.attached?
      file_path = Rails.root.join('app/assets/images/no_image_item.png')
    image.attach(io: File.open(file_path), filename: 'default-image.jpg', content_type: 'image/jpeg')
    end
    image
  end

  private

  def name_not_blank
    if name.blank?
      errors.add(:name, "タグ名を入力してください")
    end
  end

end
