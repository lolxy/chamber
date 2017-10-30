/* ============
 * Header
 * ============
 */

 import Vue from 'vue';
 import store from '@/store';
 import authService from '@/services/auth';
import slide from '@/components/slide/main.vue';
import news from '@/components/news/main.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 6000,
        pagination : '.swiper-pagination',
        paginationClickable :true
      }
    }
  },
  components: {
    slide,
    news
  }
};
