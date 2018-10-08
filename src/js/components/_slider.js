import slick from 'slick-carousel';
import { BODY, DOC, WIN, INIT, widthMD, widthSM } from '../constants';
const slider = $('.js-slider');
slider.slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: widthMD,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: widthSM,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
