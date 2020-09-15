$(window).on('load', function(){
  const htmlElement = document.documentElement;

  htmlElement.classList.remove('page-loading');
  htmlElement.classList.add('page-loaded');
});