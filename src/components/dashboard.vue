<template>
  <div>
    <canvas ref="canvas" v-if="change" id="canvas" width="600" height="400" style="width: 300px;height: 200px;"></canvas>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        change: true,
      };
    },
    props: ['score','text'],
    methods: {
      canvasScore(id, getScore,text) {
        // const vm = this;
        // if(this.common.basics.isNull(getScore)){
        //   getScore  = 999
        // }
        if(getScore>100){
          getScore = 100;
        }
        // let fillText=vm.text[Math.floor(getScore/250)];
        // if(this.common.basics.isNull(fillText)){
        //   fillText = vm.text[3];
        // }
        let fillText = text;
        new init(this.$refs.canvas, {
          teamNum: 20,
          radius: 10 / 2,
          fullMarks:100,
          grade:getScore,
          color:'#999999',
          fillColor:'#44AAC9',
          function:function(ctx,options){
            ctx.font = '500 72px microsoft yahei';
            ctx.textAlign = 'center';
            ctx.fillStyle  = '#44AAC9';
            ctx.fillText(options.grade, options.circle_x, options.circle_y-20);
            ctx.font = '500 40px microsoft yahei';
            ctx.textAlign = 'center';
            ctx.fillStyle  = '#44AAC9';
            ctx.fillText(fillText, options.circle_x, options.circle_y+45);
          }
        })

      }
    },
    mounted() {
      this.canvasScore('canvas', this.score,this.text);
    },
    watch: {
      'score'() {
        this.change = false;
        this.$nextTick(() => {
          this.change = true;
          this.$nextTick(() => {
            this.canvasScore('canvas', this.score,this.text);
          });
        });
      },
    }
  };

  /**
   * @desc:canvas
   * @param:canvas
   * @param:options
   * @param:options-width
   * @param:options-height
   * @param:options-teamNum
   * @param:options-radius
   * @param:options-designChartWidth //
   * @param:options-fillColor //
   * @param:options-color //
   * @param:options-fontSzie //
   * @param:options-fontColor //
   * @param:options-fullMarks//
   * @param:options-grade//
   * @param:options-function//
   */
  function init(canvas, options) {
    if (!options) {
      options = {};
    }
    var cxt = canvas.getContext('2d');
    var clientWidth = document.documentElement.clientWidth;//
    options.width = 371;//canvas的宽
    options.height = 270;//canvas的高
    var canvasWidth = Math.floor(clientWidth * options.width / (options.designChartWidth ? options.designChartWidth : 750));
    var canvasHeight =  Math.floor(clientWidth * options.height / (options.designChartWidth ? options.designChartWidth : 750));
    canvas.setAttribute('width', canvasWidth*this.getDevicePixelRatio());
    canvas.setAttribute('height', canvasHeight*this.getDevicePixelRatio());
    canvas.style.width = canvasWidth+'px';
    canvas.style.height = canvasHeight+'px';
    options.radius = options.radius || 50 / 10;//
    options.radius = options.radius*this.getDevicePixelRatio()
    options.team_num = options.teamNum || 10;//
    options.circle_r = canvas.getAttribute('width') / 2 - options.radius; //
    options.circle_x = 0 + options.circle_r + options.radius; //
    options.circle_y = 0 + options.circle_r + options.radius;//
    this.loadTeams(cxt, options);
  }
  init.prototype = {
    loadTeams(cxt, options) {//加载布局模拟图
      this.font(cxt, options);
      this.seating(cxt, options);
    },
    font(cxt, options) {//
      if(options.function){
        options.function(cxt, options);
      }
    },
    seating(cxt, options) { //
      var angle = 230 / options.teamNum;
      var a = options.fullMarks/options.teamNum;//
      var team_x = 0, team_y = 0;
      var team_r = options.radius;
      for (var i = 0; i < options.teamNum; i++) {
        team_x = options.circle_x + Math.sin(this.changeRadian((i * angle) + 250.9)) * options.circle_r;  //
        team_y = options.circle_y - Math.cos(this.changeRadian((i * angle) + 250.9)) * options.circle_r;
        cxt.beginPath();
        cxt.arc(team_x, team_y, team_r, 0, 2 * Math.PI);
        if((i+1)*a<=options.grade)cxt.fillStyle = options.fillColor ? options.fillColor : 'red';
        else cxt.fillStyle = options.color ? options.color : '#333333';
        cxt.fill();
      }
    },
    changeRadian(angle) { //
      return Math.PI / 180 * angle;
    },
    getDevicePixelRatio (){//
      return window.devicePixelRatio || 1;
    }
  }
</script>

<style scoped>

</style>
