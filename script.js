var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    fade:'true',
    pagination: {
      dynamicBullets:true,
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0:{
        slidesPerView: 1,
      },

      520:{
        slidesPerView: 2,
      },

      950:{
        slidesPerView: 3,
      },

    }
  });