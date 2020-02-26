let logo = document.querySelector(`.header__logo`);
let links = document.querySelector(`.header__links`);

window.addEventListener(`scroll`, function() {
  const windowScroll = window.pageYOffset;
  if (!window.isMobile()) {
    if (windowScroll < 400) {
      logo.style.left =
        window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
      logo.style.top =
        window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
      // links.style.right =
      //   window.pageYOffset + 60 - window.pageYOffset * 1.07 + `px`;
      // links.style.top =
      //   window.pageYOffset + 64 - window.pageYOffset * 1.07 + `px`;
    }
  }
});

$(() => {
  const turn = $(`.header__turn`);
  const headerLinks = $(".header__links");
  const logo = $(`.header__logo`);

  turn.css("transition", "transform 0.1s");
  logo.css("transition", "transform 0.1s");

  const headerLinksOriginalTop = parseInt(headerLinks.css("top"), 10);
  const headerLinksOriginalRight = parseInt(headerLinks.css("right"), 10);
  const minTop = headerLinksOriginalTop / 4;
  const minRight = headerLinksOriginalRight / 4;

  window.animateHeaderLinks = function(scrollTop) {
    const { right, top } = calculateHeaderLinks(scrollTop);
    headerLinks.css("right", `${right}px`);
    headerLinks.css("top", `${top}px`);
  };

  window.animateLogo = function(lastScroll) {
    const pageHeight = $(document).height();
    const windowHeight = $(window).height();
    const rotate = (lastScroll / (pageHeight - windowHeight)) * 360;
    logo.css("transform", `rotate(${rotate}deg)`);
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

  // helpers

  function calculateHeaderLinks(scrollTop) {
    const startOffset = 0;
    const finishOffset = $(window).height() / 4;

    const position = (scrollTop - startOffset) / (finishOffset - startOffset);
    const relative = Math.max(0, Math.min(1, position));

    const top = minTop + (headerLinksOriginalTop - minTop) * (1 - relative);
    const right =
      minRight + (headerLinksOriginalRight - minRight) * (1 - relative);
    return { right, top };
  }
});
