(() => {
  const link = document.querySelector(`.about__mobile button`);
  const info = document.querySelector(`.about__block`);

  const openInfo = () => {
    info.classList.add(`about__block--show`);
    $(`body`).css("overflow-y", "hidden");
  };

  const closeInfo = () => {
    // menu.classList.remove(`header__links--show`);
    // openButton.classList.remove(`header__open--click`);
    // closeButton.classList.remove(`header__close--show`);
    // $(`body`).css("overflow-y", "visible");
    // // if (scrollTop) {
    // //   window.scroll(0, scrollTop);
    // //   scrollTop = null;
    // // }
    // header.style.transform = ``;
  };
})();
