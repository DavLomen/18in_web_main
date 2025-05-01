<template>
  <div class="HomePage" id="app">

  </div>

</template>

<script>
  import Vue from 'vue';
  import LuckDraw from 'vue-luck-draw';
  Vue.use(LuckDraw);
  import firework from '@/components/firework'
  export default {
    components: {
    },
    data () {
      return {
        showNotice:false,
        showDetail:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        luckyUserList:[],
        prizes: [],
        buttons: [{
          radius: '40px',
          imgs: [{ src: './static/images/button.png?t=1', width: '105%', top: '-150%' }]
        }],
        blocks: [
          { padding: '1px', background: '#fa3e3f' },
          { padding: '10px', background: '#f9d400' },
          { padding: '1px', background: '#e76f51' },
        ],
        defaultStyle: {
          fontColor: '#303133',
          fontSize: '14px',
        },
        defaultConfig: {
          gutter: '1px',
        },
        prizeId:'',
        code_dec:'',
        win:0,
        prizeIndex:-1,
      }
    },
    mounted () {
      this.getPrizesList();
      let oAudio = document.getElementById("bgMusic");
      oAudio.onended = function() {
        oAudio.load();
        oAudio.play();
      };
      let sAudio = document.getElementById("scMusic");
      sAudio.onended = function() {
        sAudio.load();
        sAudio.play();
      };
      this.audioAutoPlay();
    },
    created() {
      this.getLuckyUserList();
      this.$Model.GetUserInfo()
    },
    methods: {
      audioAutoPlay() {
        let audio = document.getElementById("bgMusic");
        audio.onended = function() {
          audio.load();
          audio.play();
        };
        audio.play();
        document.removeEventListener("touchstart", this.audioAutoPlay);
      },
      scrollPlay(){
        let audio = document.getElementById("scMusic");
        audio.play();
        document.removeEventListener("touchstart", this.scrollPlay);
      },
      scrollEnd(){
        let audio = document.getElementById("scMusic");
        audio.pause();
        document.removeEventListener("touchstart", this.scrollEnd);
      },
      endPlay(){
        let audio = document.getElementById("endMusic");
        audio.play();
        document.removeEventListener("touchstart", this.endPlay);
      },
      getPrizesList () {
        let that = this;
        this.$Model.LuckyPriceList(null,t=>{
          if(t.code == 1){
            let prizes = []
            t.data.forEach((item, index) => {
              prizes.push({
                id:item.id,
                name: item.prize,
                win:item.prize,
                background: index % 2 ? '#f9e3bb' : '#f8d384',
                fonts: [{ text: item.prize, top: '10%' }],
                imgs:[{ src: item.image==''?'./static/images/wenhao1.png':item.image, width: '30%', top: '35%' }],
              })
            })
            that.prizes = prizes;
          }
        });
      },
      startCallBack () {
        let that = this;
        if(this.UserInfo.lucky_times !=undefined && this.UserInfo.lucky_times<=0){
          that.$Dialog.Alert(that.$t('lucky[8]'),()=>{
          })
        }else{
          this.$Model.LuckyDraw(null,t=>{
            that.$Dialog.Close();
            that.code_dec = t.code_dec;
            if (t.code == 1) {
              that.$refs.LuckyWheel.play();
              that.scrollPlay();
              setTimeout(() => {
                if(that.prizeId !=''){
                  that.$refs.LuckyWheel.stop(that.prizes.findIndex(item=>item.id==that.prizeId));
                }else{
                  that.$refs.LuckyWheel.stop(-1);
                }
              }, 3000)
              that.prizeId = t.data.prize_id;
              that.win = t.data.win;
            } else {
              that.$Dialog.Alert(t.code_dec,()=>{
              })
            }
            that.$Model.GetUserInfo();
          });
        }

      },
      endCallBack (prize) {
        let that = this;
        // that.scrollEnd();
        if(that.prizeId !=''){
          // if(prize.win>0){
            firework.show();
            // that.endPlay();
            that.$Dialog.Alert1(this.$t('lucky[7]')+`${prize.name}`,()=>{
              firework.hide();
            })
          // }else{
            // that.endPlay();
            // that.$Dialog.Alert(that.$t('lucky[1]'),()=>{
            // })
          // }
        }else{
          if(that.code_dec !=''){
            that.$Dialog.Alert(that.code_dec,()=>{
            })
          }
        }
      },
      getLuckyUserList(){
        this.$Model.LuckyWinlog(null,t=>{
          if(t){
            this.luckyUserList = t;
            if(this.luckyUserList.length>5){
              this.$nextTick(()=>{
                const data = $('#SwipeList1 .van-swipe-item').slice(0, 5)
                for (var i = 0; i < data.length; i++) {
                  $('#SwipeList1').children().append($(data[i])[0].outerHTML)
                }
              })
            }
          }
        })
      },
    },
  }

</script>

<style scoped>

</style>
