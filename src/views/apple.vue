<template>
  <div class="apple_container">
    <div class="div01">
      <div class="player-main">
        <video id="videoPlayer1"
               class="player-video" 
               start-length='40'
               end-length= '400'
               width="600"
               start-top='30'
               preload
        >
            <source :src="mp4" type='video/mp4'>
        </video>
      </div>
    </div>
    <div class="div02">
      <img src="//app-common.ks3-cn-beijing.ksyun.com/home_zhimi/prolist_fan2.jpg">
    </div>
    <div class="v">
      <div class="player-main">
        <div class="txt">你好啊</div>
        <video id="videoPlayer"
               class="player-video" 
               start-length='1500'
               end-length= '6000'
               start-top='30'
               width="600" 
               preload
        >
            <source :src="mp4" type='video/mp4'>
        </video>
      </div>
    </div>
    <div class="div02">
      <img src="//app-common.ks3-cn-beijing.ksyun.com/home_zhimi/prolist_fan2.jpg">
    </div>
    <div class="div02">
      <img src="//app-common.ks3-cn-beijing.ksyun.com/home_zhimi/prolist_fan2.jpg">
    </div>
  </div>
</template>
<script>
  // import { MyPlugin } from 'assets/js/parallaxScroll.js'
  const MyPlugin = require('assets/js/parallaxScroll.js').MyPlugin
  export default {
    props:['el'],
    data(){
      return {
        mp4: '//app-common.ks3-cn-beijing.ksyun.com/home_zhimi/d13aaeb750f789f1004be02f67f94103.mp4',
        offsettop: null
      }
    },
    mounted(){
      this.$nextTick(()=>{
        // 方案一 引入js插件
        let els = document.getElementsByClassName('player-video')
        let parallax = new MyPlugin()
        parallax.init(els)
        // 方案二 
        /*window.addEventListener('scroll', ()=>{
          this.initScroll()
        })*/
      })
    },
    methods:{
      initScroll(){
        let els = document.getElementsByClassName('player-video')
        for(let el of els){
          let start = $(el).attr('start-length')
          let end = $(el).attr('end-length')
          if(this.isScrollView(el)){
            this.setScroll(el,start,end)
          }else{
            let pele = $(el).parent('.player-main')
            let curTop = document.documentElement.scrollTop || document.body.scrollTop
            let offset = curTop - $(el).attr('scrollTop')
            if(pele.css('position') == 'sticky'){
              pele.css('position', 'relative')
              let endTop = $(el).attr('end-top')
              // pele.css('top', offset > 0 ? endTop + 'px' : 0)
              pele.css('top', offset > 0 ? curTop-$(el).offset().top + 'px' : 0)
            }
            if(offset > 0){
              el.currentTime = el.duration
            }else{
              el.currentTime = 0
            }
          }
        }
      },
      isScrollView(el){
        let top = document.documentElement.scrollTop || document.body.scrollTop
        let start = +$(el).attr('start-length')
        let end = +$(el).attr('end-length')
        return top  < end && top > start
      },
      setScroll(el, min, max){
        let id = $(el).attr('id')
        let allTime = el.duration
        let curTop = document.documentElement.scrollTop || document.body.scrollTop
        let pele = $(el).parent('.player-main')
        let perLentToTime = allTime / (max-min)
        let scrollTop = $(el).attr('scrollTop') || curTop
        $(el).attr('scrollTop', scrollTop) // 记录上一次滚轴位置
        this.offsettop = curTop - $(el).attr('scrollTop') || 0
        if(curTop > min && curTop < max){
          if(pele.css('position') != 'sticky' && min){
            pele.css('position', 'sticky')
            let startLen = $(el).attr('start-top') || 0
            pele.css('top', startLen+'px')
          }
          el.currentTime = el.currentTime + perLentToTime * this.offsettop || 0
        }
        $(el).attr('scrollTop', curTop)
      }
    }
  }
</script>
<style lang='stylus' scoped>
  .apple_container{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .apple_container
    // height 5000px
    .div01
      position relative
      background-color #eee
      height 860px
      padding 90px
    .div02
      height 800px
      // padding 30px
    .v
      position relative
      height 6000px
      background-color #eee
      padding 30px
      .txt
        top 0
        opacity 0
        position absolute
</style>