const navbarBox = document.querySelector(".navbar-box");
const showButton = document.querySelector("#navbar-show-btn");
const hideButton = document.querySelector("#navbar-hide-btn");

showButton.addEventListener("click", function () {
  navbarBox.classList.remove("translate-x-full");
});
hideButton.addEventListener("click", function () {
  navbarBox.classList.add("translate-x-full");
});

$(document).ready(function () {
  $(".welcome-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });
});
