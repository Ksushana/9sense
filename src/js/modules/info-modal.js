$(function() {
  const collapsibleImages = [].slice.call(document.querySelectorAll('.info-modal__collapsible-image'));

  collapsibleImages.forEach(collapsibleImage => {
    const toggleLink = collapsibleImage.querySelector('.info-modal__collapsible-image-toggle-link');
    const closeButton = collapsibleImage.querySelector('.info-modal__collapsible-image-close');
    const imageContent = collapsibleImage.querySelector('.info-modal__collapsible-image-content');

    toggleLink.addEventListener('click', () => {
      collapsibleImage.classList.add('is-expanded');
      $(imageContent).slideDown(200);
    });

    closeButton.addEventListener('click', () => {
      collapsibleImage.classList.remove('is-expanded');
      $(imageContent).slideUp(200);
    });
  });
});