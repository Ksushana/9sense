// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();

//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();

//   return ((elemBottom < = docViewBottom) && (elemTop >= docViewTop));
// }

// isInView: function(elem) {
//   var docViewTop = $(window).scrollTop(),
//     docViewBottom = docViewTop + $(window).height(),
//     elemTop = $(elem).offset().top,
//     elemBottom = elemTop + $(elem).height();
//   return ((elemBottom < = docViewBottom) && (elemTop >= docViewTop));
// }

// // var rellaxes = document.querySelectorAll('.rellax');

// $(`.text-block--rellax`).visible(true);
let rellax = new Rellax(`.rellax`);
