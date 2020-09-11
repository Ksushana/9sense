(() => {
  const sliders = [].slice.call(document.querySelectorAll(`.slider-container`));

  sliders.forEach(slider => {
    const caption = slider.querySelector(".slider__caption");

    if (slider) {
      new Swiper(slider, {
        navigation: {
          nextEl: `.slider-next`,
          prevEl: `.slider-prev`
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
        on: {
          slideChange: function() {
            changeCaption(this, caption);
          }
        }
      });
    }
  });

  function changeCaption(swiper, sliderCaption) {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const image = currentSlide.querySelector("img");
    const captionText = image.alt;
    sliderCaption.textContent = captionText;
  }
})();
