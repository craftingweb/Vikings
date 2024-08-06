$(function () {
  $(".slider").slick({
    asNavFor: ".slider__text",
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow"><img src="/images/slider-left-btn.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow"><img src="/images/slider-right-btn.png" /></button>',
  });

  $(".slider__text").slick({
    slidesToScroll: 1,
    asNavFor: ".slider",
    slidesToShow: 1,
    fade: true,
  });
});
