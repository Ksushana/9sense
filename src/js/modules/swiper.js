(() => {
  const sliders = [].slice.call(document.querySelectorAll(`.slider-container`));

  sliders.forEach(slider => {
    const caption = slider.querySelector(".slider__caption");
    const mobileMoreLink = slider.querySelector(".slider__mobile-more-link");

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
            if (caption) {
              changeCaption(this, caption);
            }

            if (mobileMoreLink) {
              changeMoreLinkTarget(this, mobileMoreLink);
            }
          }
        }
      });
    }
  });

  if (!window.isMobile()) {
    [].slice.call(document.querySelectorAll('.slider__content')).forEach(contentElement => {
      const moreLink = contentElement.querySelector('.slider__content-more-link');

      if (moreLink) {
        moreLink.addEventListener('click', () => {
          contentElement.classList.add('is-full');
        });
      }
    });
  }

  function changeCaption(swiper, sliderCaption) {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const image = currentSlide.querySelector("img");
    const captionText = image.alt;
    sliderCaption.textContent = captionText;
  }

  function changeMoreLinkTarget(swiper, sliderMobileMoreLink) {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const image = currentSlide.querySelector("img");
    const target = image.dataset.targetModal;
    sliderMobileMoreLink.setAttribute('data-target', target);
  }
})();
