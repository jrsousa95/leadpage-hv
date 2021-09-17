$(document).ready(function () {
  $(".botao").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });
});