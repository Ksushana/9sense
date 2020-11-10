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
        effect: 'fade',
        on: {
          // init: function() {
          //   if (caption) {
          //     changeCaption(this, caption);
          //   }

          //   if (mobileMoreLink) {
          //     changeMoreLinkTarget(this, mobileMoreLink);
          //   }
          // },
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
      const imageToggleLink = contentElement.querySelector('.slider__image-toggle-link');

      if (moreLink) {
        const defaultText = moreLink.dataset.textDefault || '';
        const activeText = moreLink.dataset.textActive || '';

        moreLink.addEventListener('click', () => {
          contentElement.classList.toggle('is-full');

          if (contentElement.classList.contains('is-full')) {
            moreLink.textContent = activeText;
          } else {
            moreLink.textContent = defaultText;
          }
        });
      }

      if (imageToggleLink) {
        const beforeText = imageToggleLink.dataset.textBefore || '';
        const afterText = imageToggleLink.dataset.textAfter || '';
        let isToggling = false;

        imageToggleLink.addEventListener('click', () => {
          if (isToggling) {
            return;
          }

          isToggling = true;

          const sliderSlide = imageToggleLink.closest('.slider__slide');

          if (sliderSlide.classList.contains('is-before')) {
            imageToggleLink.textContent = beforeText;
          } else {
            imageToggleLink.textContent = afterText;
          }

          $(sliderSlide).find('.slider__img--before').fadeToggle(200, function(){
            sliderSlide.classList.toggle('is-before');
            isToggling = false;
          });
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
