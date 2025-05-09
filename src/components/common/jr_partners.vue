<!-- 合作伙伴 -->
<!-- "swiper": "^4.5.0", -->
<!-- "vue-awesome-swiper": "^3.1.3", -->
<template>
    <div>
        <div class="section-head text-center"><h2 class="mb-3" style="color:#000;">{{title}}</h2></div>
        <div class="row g-gs">
        <swiper ref="myswiper1" :options="swiperOption" class="">
            <swiper-slide v-for="(item,index) in listData" :key="index"  >
            <div class="" style="margin-right: 30px;">
                <div class="text-center" :style="`background ${background};border-radius: 10px;`">
                <img :src="item.url" alt="" class="img-fluid" style="display: block">
                </div>
            </div>
            </swiper-slide>
        </swiper>
        </div>
    </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'jrPartners',
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return{}
    },
    props: {
        background: {
            type: String,
            default: 'none'
        },
        title: {
            type: String,
            default: 'Title'
        },
        swiperOption: {
            type: Object,
            default: () => ({
            loop: true,  // 是否循环轮播
            speed:10000,
            autoplay: {
                disableOnInteraction:false,
                delay: 2000,
                revertDirection:true,
            },
            autoplayDisableOnInteraction:false,
            slidesPerView:4,
            observer:true,
            observeParents:true,
            roundLengths:true,
            on:{
                slideChangeTransitionEnd: function () {
                this.autoplay.start();
                }
            }
        })
        },
        listData: {
            type: Array,
            default: () => ([]),
        },
    },
    methods:{},
 }
</script>

<style scoped>
</style>