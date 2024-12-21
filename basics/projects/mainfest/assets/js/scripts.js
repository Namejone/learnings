// navigation-menu
document.querySelector('.menu-bar').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.add('show');
});
document.querySelector('.closeNav').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.remove('show');
});

document.querySelectorAll('.navLink').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('show');
  });
})





// hero-slider
let mySwiper = new Swiper('.hero-slider', {
  loop: true,
  speed: 500,
  slidesPerView: 1.1,
  spaceBetween: 15,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Mousewheel control
  mousewheel: {
    invert: false,
    sensitivity: 1,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true
    },
  },
});
