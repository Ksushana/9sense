(() => {
  const body = document.querySelector(`body`);
  const text = document.querySelector(`.text-block--tech`);
  const logo = document.querySelector(`.header__logo`);
  const menu = document.querySelector(`.header__links ul`);
  const turn = document.querySelector(`.header__turn`);
  const lang = document.querySelector(`.header__lang`);
  const shadow = document.querySelector(`.shadow`);
  const textBlockTech = $(".text-block--tech");
  const aboutText = document.querySelector(`.about__mobile p`);

  function dark() {
    body.classList.add(`dark`);
    text.classList.add(`dark`);
    logo.classList.add(`dark`);
    menu.classList.add(`dark`);
    turn.classList.add(`dark`);
    lang.classList.add(`dark`);
    aboutText.classList.add(`dark`);
    shadow.classList.add(`show`);
  }

  function light() {
    body.classList.remove(`dark`);
    text.classList.remove(`dark`);
    logo.classList.remove(`dark`);
    menu.classList.remove(`dark`);
    turn.classList.remove(`dark`);
    lang.classList.remove(`dark`);
    aboutText.classList.remove(`dark`);
    shadow.classList.remove(`show`);
  }

  window.animateBackground = function(lastScroll) {
    const breakpoint = textBlockTech.offset().top;
    const current = lastScroll + $(window).height() / 2;
    if (current > breakpoint) {
      dark();
    } else {
      light();
    }
  };
})();
