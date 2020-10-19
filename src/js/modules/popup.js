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
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom",
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    },
    callbacks: {
      open: () => scollCenter(0)
    }
  });

  function scollCenter(attempt) {
    const currentScroll = $(".mfp-figure").scrollLeft();
    if (attempt > 100) {
      return;
    }

    $(".mfp-figure").scrollLeft($(window).width() / 2);
    if (currentScroll === 0) {
      setTimeout(() => scollCenter(attempt + 1), 10);
    }
  }
});
