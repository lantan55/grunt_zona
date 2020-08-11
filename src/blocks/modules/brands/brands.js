import $ from "jquery";
import "bxslider/dist/jquery.bxslider";

$(document).ready(function () {
  let logosslider = $(".bxslider");

  logosslider.each(function () {
    $(this).bxSlider({
      responsive: true,
      minSlides: 1,
      maxSlides: 10,
      slideWidth: 70,
      slideMargin: 70,
      controls: false,
      speed: 1000,
      auto: true,
    });
  });
});
