import "bootstrap/js/dist/dropdown";

import $ from "jquery";

$(document).ready(function () {
  const _this = $(this);
  const header = $(".header");
  const cls = "scrolled";

  function scrolling() {
    _this.scrollTop() > 0 ? header.addClass(cls) : header.removeClass(cls);
  }

  scrolling();

  _this.scroll(() => scrolling());

  $(".dropdown").hover(function (){
    $(".dropdown-menu").slideToggle();
  });

});
