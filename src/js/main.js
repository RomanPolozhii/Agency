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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".reviews__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  //Scroll navigation menu=====================================================
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".header").addClass("fixed");
    } else if ($(this).scrollTop() < 20) {
      $(".header").removeClass("fixed");
    }
  });
  //Spincrement=====================================================
  var show = true;
  $(window).on("scroll", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(".about").offset().top;
    console.log(w_top);
    var w_height = $(window).height();
    var d_height = $(document).height();
    if (w_top + 200 >= e_top || w_height + w_top == d_height) {
      $(".about__count").spincrement();
      show = false;
    }
  });
});
//AOS Animation=====================================================
AOS.init();
