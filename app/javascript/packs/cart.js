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


document.addEventListener('DOMContentLoaded', () => {
  const sizeRadios = document.querySelectorAll('input[type=radio][name="cart_item[size]"]');
  const selectedSizeField = document.getElementById('selected-size');

  sizeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      selectedSizeField.value = radio.value;
    });
  });
});