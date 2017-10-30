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
        paginationClickable :true
      }
    }
  },
  computed:{
    swiper() {
     return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log("每次切换都会触发我");
    // this.swiper.slideTo(3, 1000, false)
 }
};
