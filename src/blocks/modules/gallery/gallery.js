/*globals $*/
$(() => {
  "use strict";
  let offset = 0;

  getData();
  $("#loadmore").on("click", function () {
    getData();
  });

  function getData() {
    $.ajax({
      url: "data.php",
      type: "post",
      dataType: "json",
      data: {
        offset: offset,
        limit: 10,
      },
      success: function (data) {
        if (data.result === "success") {
          $(".s-gallery").append(data.html);
          offset += 10;
        } else {
          $(".s-gallery").append(data.html);
          $("#loadmore").hide();
        }
      },
    });
  }
});
