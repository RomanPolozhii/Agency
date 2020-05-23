$(function () {
  //IBG=======================================================
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
  //IBG========================================================
  //Burger=====================================================
  $(".header__burger").click(function () {
    $(".header__burger").toggleClass("active"),
      $(".header__list ").toggleClass("active"),
      $("body").toggleClass("lock");
  });
  //Slider=====================================================
  $(".clients__slider").slick({
    slidesToShow: 4,
    //slidesToScroll: 1,
    //centerMode: true,
    //arrows:true,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});
