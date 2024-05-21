class Item < ApplicationRecord
  validates :name, presence: true
  validates :color, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  enum size: { small: 0, medium: 1, large:2 }

  has_one_attached :image
  has_many :cart_items
  has_many :order_details
  belongs_to :genre

  def get_image
    unless image.attached?
      file_path = Rails.root.join('app/assets/images/no_image_item.png')
    image.attach(io: File.open(file_path), filename: 'default-image.jpg', content_type: 'image/jpeg')
    end
    image
  end


  # 消費税を求めるメソッド
  def with_tax_price
    (price * 1.1).floor
  end

end
