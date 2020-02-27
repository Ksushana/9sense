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
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });
});
