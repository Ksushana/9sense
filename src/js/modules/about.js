(() => {
  const container = document.querySelector(".about");
  const link = document.querySelector(`.about__mobile button`);
  const info = document.querySelector(`.about__block`);
  const close = document.querySelector(`.about__close`);

  let containerScale;

  const openInfo = () => {
    fixContainer();

    $(info).css("opacity", 1);
    info.classList.add(`about__block--show`);
    $(`body`).css("overflow-y", "hidden");
  };

  const closeInfo = () => {
    returnContainer();

    info.classList.remove(`about__block--show`);
    $(`body`).css("overflow-y", "visible");
    setTimeout(() => $(info).css("opacity", 0), 500);
  };

  link.addEventListener(`click`, () => {
    window.setTimeout(openInfo, 100);
  });

  close.addEventListener(`click`, () => {
    window.setTimeout(closeInfo, 100);
  });

  // helpers

  function getScale(element) {
    return element.getBoundingClientRect().width / element.offsetWidth;
  }

  function fixContainer() {
    containerScale = getScale(container);
    $(container).css("transform", "none");
  }

  function returnContainer() {
    $(container).css("transform", `scale(${containerScale})`);
  }
})();
