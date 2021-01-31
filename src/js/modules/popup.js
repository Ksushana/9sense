$(document).ready(function() {
  if (!window.isMobile()) {
    const $photos = $(`.slider__image`);
    $photos.on('click', function(event) {
      event.preventDefault();
    });
    return;
  }
  $(".slider__image").magnificPopup({
    type: "image",
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom",
    closeOnContentClick: true,
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    },
    callbacks: {
      open: () => scrollCenter(0),
      imageLoadComplete: () => closeOnSwipe()
    }
  });

  function scrollCenter(attempt) {
    const currentScroll = $(".mfp-figure").scrollLeft();
    if (attempt > 100) {
      return;
    }

    $(".mfp-figure").scrollLeft($(window).width() / 2);
    if (currentScroll === 0) {
      setTimeout(() => scrollCenter(attempt + 1), 10);
    }
  }

  function closeOnSwipe() {
    $(".mfp-img").swipe( {
      swipeUp:function() {
        $.magnificPopup.instance.close()
      },
      swipeDown:function() {
        $.magnificPopup.instance.close()
      }
    });
  };
});
