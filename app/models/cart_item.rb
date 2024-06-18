class CartItem < ApplicationRecord
  belongs_to :item
  belongs_to :user
  
  enum size: { small: 0, medium: 1, large:2 }
  
  # 小計を求めるメソッド
  def subtotal
    item.with_tax_price * amount
  end
  
end
