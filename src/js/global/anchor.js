"use strict";

// var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
//   V = 0.2; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
// for (var i = 0; i < linkNav.length; i++) {
//   linkNav[i].addEventListener(
//     "click",
//     function(e) {
//       //по клику на ссылку
//       e.preventDefault(); //отменяем стандартное поведение
//       var w = window.pageYOffset, // производим прокрутка прокрутка
//         hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
//       (t =
//         document.querySelector(hash).getBoundingClientRect().top +
//         document.querySelector(hash).getBoundingClientRect().height / 2 -
//         window.innerHeight / 2), // отступ от окна браузера до id
//         (start = null);
//       console.log(document.querySelector(hash).getBoundingClientRect().top);
//       console.log(document.querySelector(hash).getBoundingClientRect().height);
//       console.log(window.innerHeight);
//       console.log("=====");
//       requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
//       function step(time) {
//         if (start === null) start = time;
//         var progress = time - start,
//           r =
//             t < 0
//               ? Math.max(w - progress / V, w + t)
//               : Math.min(w + progress / V, w + t);
//         window.scrollTo(0, r);
//         if (r != w + t) {
//           requestAnimationFrame(step);
//         } else {
//           location.hash = hash; // URL с хэшем
//         }
//       }
//     },
//     false
//   );
// }

{
  /* <script type="text/javascript"> */
}
$(document).ready(function() {
  $("#links").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top + $(id).height() / 2 - $(window).height() / 2;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
// </script>
