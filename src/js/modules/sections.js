$(() => {
  const maxScale = 1.0;
  const minScale = 0.9;

  let lastScroll = 0;
  let ticking = false;

  const pictures = $(".scale--big");

  pictures.each((_, picture) => {
    $(picture).css("transition", "transform 0.1s");
  });

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
      requestAnimationFrame(animatePictures);
      ticking = true;
    }
  }

  function updatePicture(element, { scale }) {
    element.css("transform", `scale(${scale})`);
  }

  function animatePictures() {
    pictures.each((_, picture) => {
      picture = $(picture);
      const scale = calculateScale(picture);
      updatePicture(picture, { scale });
    });
    ticking = false;
  }

  function calculateScale(element) {
    const scrollTop = lastScroll;
    const windowHeight = $(window).height();

    const elementOffset = element.offset().top;
    const elementHeight = element.height();

    const startOffset = elementOffset - windowHeight;
    const finishOffset = elementOffset - windowHeight / 2 + elementHeight / 2;

    const position = (scrollTop - startOffset) / (finishOffset - startOffset);
    const relative = Math.max(0, Math.min(1, position));
    const scale = minScale + (maxScale - minScale) * relative;

    return scale;
  }
});
