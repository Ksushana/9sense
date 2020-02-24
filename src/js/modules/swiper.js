(() => {
  const slider = document.querySelector(`.slider-container`);
  if (slider) {
    let mySwiper = new Swiper(slider, {
      navigation: {
        nextEl: `.slider-next`,
        prevEl: `.slider-prev`,
      },
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: `.swiper-pagination`,
        type: `bullets`,
        clickable: true
      },
    });
  }
})();
