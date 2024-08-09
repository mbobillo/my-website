// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"
import "@popperjs/core"


document.addEventListener('turbo:load', function() {
  if (document.querySelector('.wrapper')) {
  var swiper = new Swiper(".wrapper", {
      loop: true,
      autoplay: true,
      autoplayTimeout:1000,
      autoplayHoverPause: true,
      autoplayDisableOnInteraction: false,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      allowSlideNext: true,
      allowSlidePrev: true,
      allowTouchMove: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      },
    });
}});
