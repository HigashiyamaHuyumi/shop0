class CartItem < ApplicationRecord
  belongs_to :item
  belongs_to :user
  
  # 小計を求めるメソッド
  def subtotal
    item.with_tax_price * amount
  end
  
  def postage
    order&.postage || 0  # orderが存在すればその送料を、存在しなければデフォルトの値を返す
  end
end
