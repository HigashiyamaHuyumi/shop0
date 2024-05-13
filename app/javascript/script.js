// Swiperのオプションを定数化
const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000, // 5秒ごとにスライド
    disableOnInteraction: false // ユーザーの操作で停止しない
  }
};

// Swiperを実行(初期化)
$(document).on('turbolinks:load', function() {
    let swiper = new Swiper('.swiper', opt);
});


function submitForm() {
  document.getElementById("cart-item-form").submit();
}

