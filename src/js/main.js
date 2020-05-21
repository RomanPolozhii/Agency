$(function () {
  //IBG=====================================================
  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }

  ibg();
  //IBG=====================================================
  $(".header__burger").click(function () {
    $(".header__burger").toggleClass("active"),
    $(".header__list ").toggleClass("active"),
    $("body").toggleClass("lock")
  });
});
