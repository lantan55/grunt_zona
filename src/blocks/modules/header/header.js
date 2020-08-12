import $ from "jquery";

$(document).ready(function () {
  const _this = $(this);
  const header = $(".header");
  const cls = "header--fixed";

  function scrolling() {
    _this.scrollTop() > 0 ? header.addClass(cls) : header.removeClass(cls);
  }

  scrolling();

  _this.scroll(() => scrolling());

  $("#topmenu").on("click", function () {
    header.toggleClass("open");
  });

  $(".submenu").hover(function () {
    $(this).children("ul").toggleClass("open");
  });
});