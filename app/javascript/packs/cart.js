// app/javascript/packs/cart.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cart-item-form").forEach(form => {
    form.addEventListener("ajax:success", (event) => {
      const [data, status, xhr] = event.detail;
      const itemId = data.item_id;
      document.getElementById(`cart-item-${itemId}-subtotal`).innerText = `￥${data.item_subtotal}`;
      document.getElementById("total-payment").innerText = `￥${data.total_amount}`;
    });
    form.addEventListener("ajax:error", () => {
      alert("カートアイテムの更新に失敗しました。");
    });
  });
});