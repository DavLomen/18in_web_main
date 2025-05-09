<template>
  <div>
    <!-- 文章类型1 图片在左边或者右边 -->
    <template v-if="type === '1' && data">
        <div class="mtb-10" v-for="el, keyName in data" :key="keyName">
         <div class="el-row jr_ar_type_1" v-if="el.align != 'MT'">
            <div class="right jr_ar_type_1_rignt_top el-col-sm-12 el-col-xs-24 mtb-10" v-if="el.image">
                <div class="mlr-10">
                    <div class="data-flex align-items-center">
                        <template v-if="el.image.type === 'video'">
                            <video :src="el.image.url" autoplay :controls="false" loop style="width:100%;display: block;margin: 0 auto;"></video>
                        </template>
                        <template v-else-if="el.image.type === 'img'">
                            <img :src="el.image.url" style="width:100%;display: block;margin: 0 auto;"></img>
                        </template>
                    </div>
                </div>
            </div>
            <div class="left el-col-sm-12 el-col-xs-24">
                <div class="mtb-10" :class="[item.type === 'title' ? 'font-title' : 'el-content-text-h3',]"  v-for="(item, index) in el.list" :key="index">
                    <p>{{ item.text }}</p>
                </div>
            </div>
            <div class="right jr_ar_type_1_rignt_bottom el-col-sm-12 el-col-xs-24 mtb-10" v-if="el.image">
                <div class="mlr-10">
                    <div class="data-flex align-items-center">
                        <template v-if="el.image.type === 'video'">
                            <video :src="el.image.url" autoplay :controls="false" loop style="width:100%;display: block;margin: 0 auto;"></video>
                        </template>
                        <template v-else-if="el.image.type === 'img'">
                            <img :src="el.image.url" style="width:100%;display: block;margin: 0 auto;"></img>
                        </template>
                    </div>
                </div>
            </div>
         </div>
         <div class="el-row jr_ar_type_1" v-else>
            <div class="right jr_ar_type_1_rignt flex-1 el-col-sm-12 el-col-xs-24  mtb-10" v-if="el.image">
                <div class="mlr-10">
                    <div class="data-flex align-items-center">
                        <template v-if="el.image.type === 'video'">
                            <video :src="el.image.url" autoplay :controls="false" loop style="width:100%;display: block;margin: 0 auto;"></video>
                        </template>
                        <template v-else-if="el.image.type === 'img'">
                            <img :src="el.image.url" style="width:100%;display: block;margin: 0 auto;"></img>
                        </template>
                    </div>
                </div>
            </div>
            <div class="left flex-1 el-col-sm-12 el-col-xs-24">
                <div class="mtb-10" :class="[item.type === 'title' ? 'font-title' : 'el-content-text-h3',]"  v-for="(item, index) in el.list" :key="index">
                    <p>{{ item.text }}</p>
                </div>
            </div>
         </div>
        </div>
    </template>
  </div>
</template>

<script>
  export default {
    name:'jrArticle',
    data(){
      return{}
    },
    props: {
        type: {
            type: String,
            default: '1'
        },
        data: {
            type: Object,
            default: () => null,
        },
    },
    methods:{},
 }
</script>

<style scoped>
.mtb-5{
    margin: 5px 0;
}

.mtb-10{
    margin: 10px 0;
}
.mlr-5{
    margin: 0 5px;
}
.mlr-10{
    margin: 0 10px;
}
.align-items-center{
    height: 100%;
    align-items: center;
}
@media screen and (min-width: 768px) {
    .jr_ar_type_1_rignt_bottom{
        display: block;
    }
    .jr_ar_type_1_rignt_top{
        display: none;
    }
}
@media (max-width: 760px) {
    .jr_ar_type_1_rignt_top{
        display: block;
    }
    .jr_ar_type_1_rignt_bottom{
        display: none;
    }
}
</style>