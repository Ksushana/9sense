let logo = document.querySelector(`.header__logo`);
let links = document.querySelector(`.header__links`);

// let about = document.querySelector(`.about`);

window.addEventListener(`scroll`, function() {
  const windowScroll = window.pageYOffset;
  if (!window.isMobile()) {
    if (windowScroll < 400) {
      logo.style.left =
        window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
      logo.style.top =
        window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
      links.style.right =
        window.pageYOffset + 60 - window.pageYOffset * 1.07 + `px`;
      links.style.top =
        window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
    }
  }

  // about.style.transform = `scale(` + window.pageYOffset / 1400 + `)`;
});

$(() => {
  const turn = $(`.header__turn`);
  const headerLinks = $(".header__links");
  const logo = $(`.header__logo`);

  turn.css("transition", "transform 0.1s");
  logo.css("transition", "transform 0.1s");

  window.animateLogo = function(lastScroll) {
    const pageHeight = $(document).height();
    const windowHeight = $(window).height();
    const rotate = (lastScroll / (pageHeight - windowHeight)) * 360;
    logo.css("transform", `rotate(${rotate}deg)`);
    // logo.style.transform = `rotate(` + window.pageYOffset / 17 + `deg)`;
  };

  window.animateTurn = function(lastScroll) {
    const headerLinksRightOffset =
      $(window).width() - headerLinks.offset().left - headerLinks.width();
    const turnRightOffset =
      $(window).width() - turn.offset().left - turn.width();
    const moveOffset = Math.max(0, turnRightOffset - headerLinksRightOffset);
    if (moveOffset > 0) {
      turn.css("transform", `translateX(${moveOffset}px)`);
    }

    if (!window.isMobile()) {
      return;
    }
  };
});
