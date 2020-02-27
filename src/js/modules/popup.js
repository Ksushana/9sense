(() => {
  const foto = document.querySelector(`.slider button`);
  const popup = document.querySelector(`.popup`);
  const closeButton = document.querySelector(`.popup__close`);

  const openPopup = () => {
    popup.classList.add(`show`);
    $(`body`).css("overflow-y", "hidden");
  };

  const closePop = () => {
    popup.classList.remove(`show`);
    $(`body`).css("overflow-y", "visible");
  };

  foto.addEventListener(`click`, () => {
    window.setTimeout(openPopup, 100);
  });

  closeButton.addEventListener(`click`, () => {
    window.setTimeout(closePop, 100);
  });
})();
