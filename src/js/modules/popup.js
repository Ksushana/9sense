$(document).ready(function() {
  if (!window.isMobile()) {
    const photos = $(`.slider__img`);
    $(`.slider__img`).click(function(event) {
      event.preventDefault();
    });
    return;
  }
  $(".slider__img").magnificPopup({
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
      open: () => setTimeout(scollCenter, 1)
    }
  });

  function scollCenter() {
    $(".mfp-figure").scrollLeft($(window).width() / 2);
  }
});
