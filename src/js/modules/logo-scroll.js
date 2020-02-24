let logo = document.querySelector(`.header__logo`);
let links = document.querySelector(`.header__links`);

// let about = document.querySelector(`.about`);

window.addEventListener(`scroll`, function() {
  const windowScroll = window.pageYOffset;
  logo.style.transform = `rotate(` + window.pageYOffset / 17 + `deg)`;

  if (windowScroll < 400) {
    logo.style.left =
      window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
    logo.style.top = window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
    links.style.right =
      window.pageYOffset + 60 - window.pageYOffset * 1.07 + `px`;
    links.style.top =
      window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
  }

  // about.style.transform = `scale(` + window.pageYOffset / 1400 + `)`;
});

$(() => {
  let lastScroll = 0;
  let ticking = false;

  const turn = $(`.header__turn`);
  const headerLinks = $(".header__links");

  turn.css("transition", "transform 0.1s");

  window.addEventListener(`scroll`, () =>
    window.requestAnimationFrame(scrollHandler)
  );

  // helpers

  function scrollHandler() {
    lastScroll = $(window).scrollTop();
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(animate);
      ticking = true;
    }
  }

  function animate() {
    animateTurn();
    ticking = false;
  }

  function animateTurn() {
    const headerLinksRightOffset =
      $(window).width() - headerLinks.offset().left - headerLinks.width();
    const turnRightOffset =
      $(window).width() - turn.offset().left - turn.width();
    const moveOffset = Math.max(0, turnRightOffset - headerLinksRightOffset);
    if (moveOffset > 0) {
      turn.css("transform", `translateX(${moveOffset}px)`);
    }
  }
});
