let body = document.querySelector(`body`);

window.addEventListener(`scroll`, function() {
  const windowScroll = window.pageYOffset;
  const text = document.querySelector(`.text-block--tech`);
  const logo = document.querySelector(`.header__logo`);
  const menu = document.querySelector(`.header__links ul`);
  const turn = document.querySelector(`.header__turn`);
  const lang = document.querySelector(`.header__lang`);
  const shadow = document.querySelector(`.shadow`);
  if (windowScroll > 1700) {
    body.classList.add(`dark`);
    text.classList.add(`dark`);
    logo.classList.add(`dark`);
    menu.classList.add(`dark`);
    turn.classList.add(`dark`);
    lang.classList.add(`dark`);
  } else {
    body.classList.remove(`dark`);
    text.classList.remove(`dark`);
    logo.classList.remove(`dark`);
    menu.classList.remove(`dark`);
    turn.classList.remove(`dark`);
    lang.classList.remove(`dark`);
    shadow.classList.remove(`show`);
  }

  // if (windowScroll > 2000) {
  //   shadow.classList.add(`show`);
  // } else {
  //   shadow.classList.remove(`show`);
  // }
});
