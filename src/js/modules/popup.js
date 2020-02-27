$(document).ready(function() {
  $(".slider__img").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    overflowY: scroll;
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    },
    retina: {
      ratio: 1, // Increase this number to enable retina image support.
      // Image in popup will be scaled down by this number.
      // Option can also be a function which should return a number (in case you support multiple ratios). For example:
      // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }


      replaceSrc: function(item, ratio) {
        return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
      } // function that changes image source
    }
  });
});
