let logo = document.querySelector(`.header__logo`);
let links = document.querySelector(`.header__links`);
let turn = document.querySelector(`.header__turn`);
// let about = document.querySelector(`.about`);

window.addEventListener(`scroll`, function () {
  const windowScroll = window.pageYOffset;
  logo.style.transform = `rotate(` + window.pageYOffset / 17 + `deg)`;

  if (windowScroll < 400) {
    logo.style.left = (window.pageYOffset + 64) - window.pageYOffset * 1.07 + `px`;
    logo.style.top = (window.pageYOffset + 64) - window.pageYOffset * 1.07 + `px`;
    links.style.right = (window.pageYOffset + 60) - window.pageYOffset * 1.07 + `px`;
    links.style.top = (window.pageYOffset + 64) - window.pageYOffset * 1.07 + `px`;
    turn.style.transform = `translateX(` + 60 - window.pageYOffset * 1.07 + `px)`;
  }

  // about.style.transform = `scale(` + window.pageYOffset / 1400 + `)`;

});

// let scale = document.querySelector(`.scale`);

// window.addEventListener(`scroll`, function () {
//   scale.style.transform = `scale(1.2)`;
// });
