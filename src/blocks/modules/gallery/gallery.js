import $ from "jquery";
import "magnific-popup";

$(document).ready(function () {
  $(".grid__box").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
  });
});
