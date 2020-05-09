<template>
<div class="scroll-main">
  
  <div class="scroll-container">
    <div class="scroll-area">1</div>
    <div class="scroll-area">21</div>
    <div class="scroll-area">31</div>
    <div class="div_container container_02">
      <div  class="scroll_container scroll_container_01">
        <div class="scroll_content">
          <div class="div_img">
            <div class="img">
              <img alt='智米纯净型加湿器2' src="../assets/scrollSnap/hum2_02.png">
            </div>
          </div>
          <div class="div_text">
            <div class="txt">
              <div class="title">你知道家里的湿度吗？</div>
              <div class="desc">人的身体对室内湿度变化不敏感，湿度问题极易被忽略。<br/>最适宜人体的湿度是55%左右，当湿度过低时，身体会因缺水而引发各种问题。</div>
            </div>
          </div>
        </div>
      </div>
      <div  class="scroll_container scroll_container_02">
        <div class="scroll_content">
          <div class="div_img">
            <div class="img">
              <img alt='智米纯净型加湿器2' src="https://app-common.ks3-cn-beijing.ksyun.com/home_zhimi/hum2_01.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-area">2</div>
    <div class="scroll-area">3</div>
    <div class="scroll-area">4</div>
  </div>
</div>
</template>
<script>
  import { adaptVal } from 'assets/js/base'
  export default {
    data(){
      return {
        skrollr: require('assets/js/skrollr.min.js'),
        // skrollr: require('/static/js/skrollr.min.js'),
        fixedStart_marginTop: window.innerHeight > 800 ? 100 : 80,
        mask_start: 300,
        offset: 3000,
        offset6: 3000,
        adaptVal
      }
    },
    mounted(){
      this.initSkroll()
    },
    methods:{
      initSkroll(){
        let position2 = $('.container_02').offset();
        let self = this
        var s = this.skrollr.init({
          // smoothScrolling:false,
          forceHeight:true,
          constants:{
            top2:position2.top-this.fixedStart_marginTop+this.mask_start,
            top2_end:position2.top+this.offset,
          },
          render(){
            self.setScrollSection($('.container_02'));
          }
        })
      },
      setScrollSection(el, len, top){
        let offset = len || this.offset
        let marginTop = typeof top == 'number' ? top : this.fixedStart_marginTop
        let position = $(el).offset();
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
        let child = $(el).children('.scroll_container_01')

        let one_height = $(child).height()+offset;
        // let window_width = getMinWidth()
        let parent_width = $(el).css('width')
        // let parent_height = $(el).css('height')
        let parent_height = this.adaptVal(1492)
        $(el).height(one_height);

        if(scrollTop > position.top-marginTop && scrollTop < (position.top+offset)/2){
          $(child).css('position', 'fixed');
          $(child).css('width', parent_width);
          $(child).css('top', marginTop+'px');
          $(child).attr('setted', false);
          // $(child).css('left', -scrollLeft);
          // $('.scroll-container').css('height', 'auto')
        }else if(scrollTop > (position.top+offset)/2 && ($(child).attr('setted') == 'false' || !$(child).attr('setted'))){
          $(child).attr('setted', true);
          $(child).css('position', 'absolute');
          $(child).css('top', (scrollTop-position.top)+'px');
          // $(child).css('left', '0px');
          // $('.scroll-container').css('height', 'calc(100vh)')
          // $(el).height('100vh');
          // $('.scroll-main').height('100vh');
        }else if(scrollTop < position.top-marginTop ){
          $(child).css('position', 'absolute');
          $(child).css('top', '0px');
          $(child).attr('setted', false);
          // $(child).css('left', '0px');
          // $('.scroll-container').css('height', 'calc(100vh)')
          // $(el).height('100vh');
          // $('.scroll-main').height('100vh');
        }
      }
    }
  }
</script>
<style lang='stylus' scoped>
html {
  background: #f2f2f2;
  // overflow hidden
}
.scroll-area {
  max-width: 850px;
  height: 600px;
  font-size: 60px;
}
.scroll-main
  position relative
  // height 5000px;
.scroll-container {
  height: 100vh;
  // overflow: auto;
  // scroll-snap-type: y mandatory;
}

.scroll-container,
.scroll-area {
  margin: 0 auto;
}

.scroll-area {
  // scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #8360A6;
}

.scroll-area:nth-of-type(1) {
  background: #49b293;
}
.scroll-area:nth-of-type(2) {
  background: #4cc1be;
}

.scroll-area:nth-of-type(3) {
  background: #c94e4b;
}

.scroll-area:nth-of-type(4) {
  background: #4cc1be;
}

.scroll-area:nth-of-type(5) {
  background: #8360A6;
}

$mw_1248 = 1248PX/2560
$mw_2560 = 100vw/2560
setVal_2560(param,val)
  {param} val * $mw_2560
  @media screen and (max-width: $min_width)
    {param} val * $mw_1248
setVal_2560_mm(param,val)
  {param} val * $mw_2560
  @media screen and (min-width: $styl_max_width)
    {param} val * $styl_2560_1680
  @media screen and (max-width: $min_width)
    {param} val * $mw_1248

.scroll_container_01
  z-index 1
.scroll_container_02
  position sticky
  top 0
.scroll-container
  color #000
  // overflow hidden
  .div_container
    // scroll-snap-align: start;
    font-family 'font_h'
    position relative
    video
      width 100%
    img
      width 100%
    .div_text
      position absolute
      left 0
      right 0
      text-align center
      .title
        font-family 'font_h'
      .desc
        font-family 'font_qh'
        setVal_2560('font-size', 20)
      .txt
        font-family 'font_qh'
        setVal_2560('font-size', 20)
      .action
        // setVal_2560('font-size', 12)
        font-family 'font_qh'
        setVal_2560('font-size', 15)
        margin-left -11%
        transform scale(.8, .8)
  .container_02
    setVal_2560('margin-top', 150)
    .scroll_content
      display flex
      align-items center
    .div_img
      // setVal_2560('width', 2170)
      height calc(1214*100vw/2560)
      margin 0 auto
      display flex
      justify-content center
      align-items center
      .border_div 
        // position absolute
        // setVal_2560('width', 2170)
        height 100%
        overflow hidden
        display flex
        justify-content center
        align-items center
        position relative
        .mask
          z-index 1
          position absolute
          width 100%
          height 100%
          background-color #000
          opacity 0
        .content
          position absolute
          setVal_2560('font-size', 45)
          color #fff
          text-align center
          z-index 2
          opacity 0
        .img
          // position absolute
          width 100%
    .div_text
      // setVal_2560('top', 110)
      .title
        setVal_2560('font-size', 60)
      .desc
        setVal_2560('margin-top', 30)
</style>