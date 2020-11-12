$(function() {
  $("#works .image-cover").click(function(event) {
   const clickedElement = $(event.target);
   console.log(clickedElement)

   clickedElement.children().toggleClass("color");
  });
});