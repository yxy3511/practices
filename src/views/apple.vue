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
               end-top='280'
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
               end-top = '860'
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
  export default {
    data(){
      return {
        mp4: '//app-common.ks3-cn-beijing.ksyun.com/home_zhimi/d13aaeb750f789f1004be02f67f94103.mp4',
        offsettop: null
      }
    },
    mounted(){
      this.$nextTick(()=>{
        window.addEventListener('scroll', ()=>{
          this.setAnimation()
          this.initScroll()
        })
      })
    },
    methods:{
      setAnimation(){
        let curTop = document.documentElement.scrollTop || document.body.scrollTop
        let el = $('.v .txt')
        let start = $('.v .player-video').attr('start-length')
        let end = $('.v .player-video').attr('end-length')
        if(curTop > start && curTop < end){
          let fontSize = this.getNum(el.css('fontSize'))
          let opacity = this.getNum(el.css('opacity'))
          console.log('opacity--before:',el.css('opacity'))
          let top = this.getNum(el.css('top'))
          el.css('fontSize', fontSize++ + 'px')
          el.css('top', top+1+'px')
          if(opacity + 0.1 < 1 || opacity + 0.1 == 1){
            console.log('opacity:',opacity)
            console.log('res:', opacity + 0.1)
            el.css('opacity', opacity + 0.1)
          }
          // el.animate({
          //   'opacity': 0.4, 
          //   'top': '25%',
          //   'fontSize': '32px'
          // },5000)
        }
      },
      getNum(val){
        let reg = /([0-9]{1,}(.([0-9]{1,}))?)[a-zA-Z]{0,}/
        let res = reg.exec(val) ? reg.exec(val)[1] : null
        return +res
      },
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
              pele.css('top', offset > 0 ? endTop + 'px' : 0)
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