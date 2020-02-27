$(() => {
  const maxScale = 1.0;
  const minScale = 0.9;

  let lastScroll = 0;
  let ticking = false;

  const pictures = $(`.scale--big`);
  const textBlocks = $(`.parallax`);
  let headerBlock = $(`.parallax-header`);
  const menu = $(`.header__links`);

  pictures.each((_, picture) => {
    $(picture).css(`transition`, `transform 0.1s`);
  });

  textBlocks.each((_, textBlock) => {
    $(textBlock)
      .find(`p`)
      .css(`transition`, `transform 0.1s`);
  });

  $(headerBlock)
    .find(`p`)
    .css(`transition`, `transform 0.1s`);

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
    animateTexts();
    animateHeader();
    animatePictures();
    hideTexts();
    hideHeader();
    window.animateHeaderLinks(lastScroll);
    window.animateLogo(lastScroll);
    window.animateTurn(lastScroll);
    window.animateSlider(lastScroll);
    window.animateBackground(lastScroll);
    ticking = false;
  }

  function animatePictures() {
    pictures.each((_, picture) => {
      picture = $(picture);
      const scale = calculateScale(picture);
      updatePicture(picture, { scale });
    });
  }

  function updatePicture(element, { scale }) {
    element.css(`transform`, `scale(${scale})`);
  }

  function calculateScale(element) {
    const scrollTop = lastScroll;
    const windowHeight = $(window).height();

    const elementOffset = element.offset().top;
    const elementHeight = element.height();

    const startOffset = elementOffset - windowHeight;
    const finishOffset = elementOffset - windowHeight + elementHeight;

    const position = (scrollTop - startOffset) / (finishOffset - startOffset);
    const relative = Math.max(0, Math.min(1, position));
    const scale = minScale + (maxScale - minScale) * relative;

    return scale;
  }

  function animateTexts() {
    textBlocks.each((_, textBlock) => {
      const relative = calculateTextRelative($(textBlock));
      updateTextBlock($(textBlock), relative);
    });
  }

  function animateHeader() {
    const relative = calculateHeaderRelative($(headerBlock));
    updateHeaderBlock($(headerBlock), relative);
  }

  function calculateTextRelative(element) {
    const scrollTop = lastScroll;
    const windowHeight = $(window).height();

    const elementOffset = element.offset().top;
    const elementHeight = element.height();

    const startOffset = elementOffset - windowHeight;
    const finishOffset = elementOffset - windowHeight + elementHeight;

    const position = (scrollTop - startOffset) / (finishOffset - startOffset);
    const relative = Math.max(0, Math.min(1, position));
    return relative;
  }

  function calculateHeaderRelative(element) {
    const scrollTop = lastScroll;
    const windowHeight = $(window).height();

    const elementOffset = element.offset().top;
    const elementHeight = element.height();

    const startOffset = 0;
    const finishOffset = windowHeight / 2;

    const position = (scrollTop - startOffset) / (finishOffset - startOffset);
    const relative = Math.max(0, Math.min(1, position));
    return relative;
  }

  function updateTextBlock(element, relative) {
    const offset = relative * -40;
    element.find(`p`).css(`transform`, `translateY(${offset}px)`);
  }

  function updateHeaderBlock(element, relative) {
    const offset = relative * -40;
    element.find(`p`).css(`transform`, `translateY(${offset}px)`);
  }

  function hideTexts() {
    textBlocks.each((_, textBlock) => {
      textBlock = $(textBlock);
      const disappearance = calculateOpacity(textBlock);
      hideTextBlock(textBlock, disappearance);
    });
  }

  function hideHeader() {
    headerBlock = $(headerBlock);
    const disappearance = calculateOpacity(headerBlock);
    hideHeaderBlock(headerBlock, disappearance);
  }

  function calculateOpacity(element) {
    // if (window.isMobile()) {
    //   return;
    // }
    const scrollTop = lastScroll;
    const windowHeight = $(window).height();

    const elementOffset = element.offset().top;
    const elementHeight = element.height();
    const menuHeight = menu.height();

    const startOffset = elementOffset - windowHeight / 4;
    const finishOffset = elementOffset + elementHeight / 2 - 80 * 2;

    const position = (scrollTop - startOffset) / (finishOffset - startOffset);
    const relative = Math.max(0, Math.min(1, position));
    const opacity = 1 - relative;

    return opacity;
  }

  function calculateOpacityMobile(element) {
    if (!window.isMobile()) {
      return;
    }
    const scrollTop = lastScroll;
    const windowHeight = $(window).height();

    const elementOffset = element.offset().top;
    const elementHeight = element.height();
    const fadeHide = windowHeight / 5;

    const startOffset = elementOffset - windowHeight / 4;
    const finishOffset =
      elementOffset + elementHeight / 2 - (fadeHide + 40) * 2;

    const position = (scrollTop - startOffset) / (finishOffset - startOffset);
    const relative = Math.max(0, Math.min(1, position));
    const opacity = 1 - relative;

    return opacity;
  }

  function hideTextBlock(element, opacity) {
    element.find(`p`).css(`opacity`, opacity);
  }

  function hideHeaderBlock(element, opacity) {
    element.find(`p`).css(`opacity`, opacity);
  }
});
