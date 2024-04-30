// Swiperのオプションを定数化
const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

// Swiperを実行(初期化)
$(document).on('turbolinks:load', function() {
    let swiper = new Swiper('.swiper',opt);
    $('#banner-image').click(function() {
        var newImage = prompt("Enter the URL of the new image:");
        if (newImage !== null && newImage !== "") {
            $('#banner-image').attr('src', newImage);
        }
    });
});

