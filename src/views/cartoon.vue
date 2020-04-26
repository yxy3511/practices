<template>
  <div class="cartoon_container">
    <div class="cartoon_music" @click='playMusic'>
      <img src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_music.png">
      <audio
        src="/static/cartoon/cartoon_bgmusic.mp3"
        id="bgmusic"
        loop
        autoplay
      ></audio>
      <audio id="click-audio" src="/static/cartoon/cartoon_voice.mp3" style="display:none"></audio>
    </div>
    <div class="bg_div_imgs">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_01.jpg">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_02.jpg">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_03.jpg">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_04.jpg">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_05.jpg">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_06.jpg">
    </div>
    <div class="bg_div bg_div_01" @click='changeTxt(1)'>
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_07.jpg">
      <img class="bg_light bg_light_01" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_07.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div bg_div_02" @click='changeTxt(2)'>
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_08.jpg">
      <img class="bg_light bg_light_02" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_08.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div bg_div_03" @click='changeTxt(3)'>
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_09.jpg">
      <img class="bg_light bg_light_03" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_09.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div bg_div_04" @click='changeTxt(4)'>
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_10.jpg">
      <img class="bg_light bg_light_04" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_10.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
    <div class="bg_div_imgs">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_11.jpg">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_12.jpg">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_13.jpg">
    </div>
    <div class="bg_div bg_div_14" @click='changeTxt(5)'>
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_bg_14.jpg">
      <img class="bg_light bg_light_14" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon06_light_14.jpg">
      <div class="animation_light">
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted(){
      // let audio = document.querySelector('audio')[0]
      let audio = $('#bgmusic')[0]
      let musicEle = $('.cartoon_music')[0]
      audio.addEventListener('play', function(){
        musicEle.style.animationPlayState = "running"
      })
    },
    methods:{
      playMusic(){
        // let audio = document.querySelector('audio')[0]
        let audio = $('#bgmusic')[0]
        let musicEle = $('.cartoon_music')[0]
        if(audio.paused){
          audio.play()
          musicEle.style.animationPlayState = "running"
        }else{
          audio.pause()
          musicEle.style.animationPlayState = "paused"
        }

      },
      changeTxt(num){
        let animation = $($($('.bg_div')[num-1]).children('.animation_light'))
        let light = $($($('.bg_div')[num-1]).children('.bg_light'))
        if(light.css('display') == 'block' && animation.css('display') == 'none') return
        // let parent = $($($('.bg_div')[num-1]).children('.txt_content'))
        // let before = parent.children('.before')
        // before.css('display', 'none')
        light.css('display', 'block')
        // let after = parent.children('.after')
        // after.css('display', 'block')
        animation.css('display', 'none')
        let audio = $('#click-audio')[0]
        audio.volume = 0.2
        audio.play()
      }
    }
  }
</script>
<style scoped lang='stylus'>
img
  width 100%
  vertical-align bottom
// .bg_div_imgs 
//   overflow hidden
//   img
//     float left
.cartoon_music
  position absolute
  right 30px
  top 40px
  width 30px
  height 30px
  z-index 1
  animation: rotate 5s 0s infinite linear;
  animation-play-state: paused;
  &:hover
    cursor pointer
  &:focus
    outline none
  img
    width 100%
    &:focus
      outline none
@keyframes rotate{
  0% {
    transform rotate(0deg)
  }
  // 60%{
  //   opacity .6
  // }
  100%{
    transform rotate(360deg)
  }
}
@keyframes fadein{
  0% {
    opacity 0
  }
  // 60%{
  //   opacity .6
  // }
  100%{
    opacity 1
  }
}
@keyframes halo {
  0% { 
    opacity: 0; 
    box-shadow: 0 0 1px 0.05rem rgba(202,220,255,0.8);
  }
  50% {opacity: 1; }
  100%{
    opacity: 0.6;
    box-shadow: 0 0 1px 0.15rem rgba(202,220,255,0.8);
  } 
}
@keyframes halo2 {
  0% { 
    opacity: 0; 
    box-shadow: 0 0 1px 0.2rem rgba(202,220,255,0.6); 
    width: .8rem; 
    height: .8rem; 
    margin-top: -0.4rem; 
    margin-left: -0.4rem;
  }
  50% {opacity: 1; }
  100%{
    opacity: 0.3;
    box-shadow: 0 0 1px 0.25rem rgba(202,220,255,0.6); 
    width: 1rem; 
    height: 1rem; 
    margin-top: -0.5rem; 
    margin-left: -0.5rem;
  } 
}
@keyframes halo3 {
  0% { 
    opacity: 0; 
    box-shadow: 0 0 1px 0.05rem rgba(202,220,255,0.4); 
    width: 1rem; 
    height: 1rem; 
    margin-top: -0.5rem; 
    margin-left: -0.5rem;
  }
  50% {opacity: 1; }
  100%{
    opacity: 0.3;
    box-shadow: 0 0 1px 0.15rem rgba(202,220,255,0.4); 
    width: 2rem; 
    height: 2rem; 
    margin-top: -1rem; 
    margin-left: -1rem;
  } 
}
.sing-com {
  position: absolute; 
  border-radius: 50%; 
  top: 30%; 
  left: 50%; 
  opacity: 0; 
}
.one { 
  width: .4rem; 
  height: .4rem; 
  background-color: rgba(202,220,255,0.8);
  box-shadow: 0 0 1px 0.08rem rgba(202,220,255,0.8); 
  margin-top: -0.2rem;
  margin-left: -0.2rem; 
  z-index: 2;
  animation: halo 1s 0.5s infinite ease-out;
}

.two { 
  width: .8rem; 
  height: .8rem; 
  background-color: rgba(202,220,255,0.6);
  box-shadow: 0 0 1px 0.15rem rgba(202,220,255,0.6); 
  margin-top: -0.4rem; 
  margin-left: -0.4rem; 
  z-index: 2;
  animation: halo2 1s 0.5s infinite ease-out;
}

.three { 
  width: 1rem; 
  height: 1rem; 
  background-color: rgba(202,220,255,0.4);
  box-shadow: 0 0 1px 0.2rem rgba(202,220,255,0.4); 
  margin-top: -0.5rem; 
  margin-left: -0.5rem; 
  z-index: 2;
  animation: halo3 1s 0.5s infinite ease-out;
}

.bg_div{
  font-size: 14px;
  position: relative;
}
// .bg_div img.bg, video{
//   width: 100%;
//   display: block;
// }

.bg_div .bg_light{
  display: none;
  opacity: 0;
  animation: fadein .5s linear;
  animation-fill-mode: forwards;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
    
.bg_div .before{
  display: block;
}
    
.bg_div .after{
  display: none;
}
    
// .bg_div .txt_content{
//   font-family: FZYanSJW_Xian;
//   position: absolute;
//   color: #fff;
//   top: 35%;
//   left: 0;
//   right: 0;
//   text-align: center;
// }

.bg_div_01 .sing-com{
  // top: 28%;
  top: calc(100vh*0.58)
}
// .bg_div_01 .txt_content{
//   top: 23%;
// }

.bg_div_02 .sing-com{
  // top: 31%;
  top: calc(100vh*0.58)
}
// .bg_div_02 .txt_content{
//   top: 26%;
// }

.bg_div_03 .sing-com{
  // top: 43%;
  top: calc(100vh*0.64)
}
// .bg_div_03 .txt_content{
//   top: 38%;
// }

.bg_div_04 .sing-com{
  // top: 52%;
  top: calc(100vh*0.68)
}
// .bg_div_04 .txt_content{
//   top: 47%;
// }

.bg_div_14 .sing-com{
  // top: 7%;
  top: calc(100vh*0.28)
}
// .bg_div_05 .txt_content{
//   top: 47%;
//   line-height: 32px;
//   display: none;
//   opacity: 0;
//   animation: fadein 2s 1s ease-out;
//   animation-fill-mode: forwards;
// }
</style>