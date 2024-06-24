class OrderDetail < ApplicationRecord
  belongs_to :order
  belongs_to :item
  enum size: { S: 0, M: 1, L: 2 }
  
  #注文詳細ごとの小計（subtotal）を計算
  def calculate_subtotal
    self.amount * self.purchase_price
  end
end
