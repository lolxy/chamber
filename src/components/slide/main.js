/* ============
 * Header
 * ============
 */
import Vue from 'vue';
import store from '@/store';
import authService from '@/services/auth';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 6000,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        autoplayDisableOnInteraction : false
      },
      newSwiperOption:{
        loop: true,
        autoplay: 5000,
        direction : 'vertical',
        mousewheelControl : true,
        autoplayDisableOnInteraction : false
      }
    }
  }
};
