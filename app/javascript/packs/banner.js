import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('turbolinks:load', () => {
  new Swiper('.swiper-container', {
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
  });
});