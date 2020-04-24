<template>
  <div class="cartoon_container">
    <div class="cartoon_music" @click='playMusic'>
      <img src="/static/cartoon/music.png">
      <audio
        src="/static/cartoon/cartoon_bgmusic.mp3"
        id="audio"
        loop
        autoplay
      ></audio>
    </div>
    <div class="bg_div bg_div_01">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_bg_01.jpg">
      <img class="bg_light bg_light_01" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_light_01.png">
      <div class="animation_light" @click='changeTxt(1)'>
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
      <div class="txt_content">
        <div class="before">光是一座信仰</div>
        <div class="after">“正因为我们在劫难逃，万物显得更美好了。”</div>
      </div>
    </div>
    <div class="bg_div bg_div_02">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_bg_02.jpg">
      <img class="bg_light bg_light_02" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_light_02.png">
      <div class="animation_light" @click='changeTxt(2)'>
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
      <div class="txt_content">
        <div class="before">一段思绪</div>
        <div class="after">“从前书信很慢，车马很远，一生只爱一个人。”</div>
      </div>
    </div>
    <div class="bg_div bg_div_03">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_bg_03.jpg">
      <img class="bg_light bg_light_03" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_light_03.png">
      <div class="animation_light" @click='changeTxt(3)'>
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
      <div class="txt_content">
        <div class="before">一场艺术的交叠</div>
        <div class="after">“每一个不曾起舞的日子，都是对生命的辜负。”</div>
      </div>
    </div>
    <div class="bg_div bg_div_04">
      <img class="bg" src="https://app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_bg_04.jpg">
      <img class="bg_light bg_light_04" src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/cartoon01_light_04.png">
      <div class="animation_light" @click='changeTxt(4)'>
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
      <div class="txt_content">
        <div class="before">一句出现在深夜里的诗歌</div>
        <div class="after">“我们还年轻，长长的人生可以受一点风浪。”</div>
      </div>
    </div>
    <div class="bg_div bg_div_05">
      <div class="animation_light" @click='changeTxt(5)'>
        <span class="sing-com one"></span>
        <span class="sing-com two"></span>
        <span class="sing-com three"></span>
      </div>
      <video id='jya'>
        <source src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/jya_light.mp4" type="video/mp4">
        <embed src="//app-common.ks3-cn-beijing.ksyun.com/cartoon/jya_light.mp4" type="video/mp4">
      </video>
      <div class="txt_content">
        <div class="after">我独处时最轻松，<br/>因为我不觉得自己乏味，<br/>即使乏味，也自己承受，<br/>不累及他人，无需感到不安。</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted(){
      let audio = document.querySelector('audio')
      let musicEle = $('.cartoon_music')[0]
      audio.addEventListener('play', function(){
        musicEle.style.animationPlayState = "running"
      })
    },
    methods:{
      playMusic(){
        let audio = document.querySelector('audio')
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
        let parent = $($($('.bg_div')[num-1]).children('.txt_content'))
        if(num != 5){
          let light = $($($('.bg_div')[num-1]).children('.bg_light'))
          let before = parent.children('.before')
          before.css('display', 'none')
          light.css('display', 'block')
        }else{
          $('#jya')[0].play()
          parent.css('display', 'block')
        }
        let after = parent.children('.after')
        after.css('display', 'block')
        animation.css('display', 'none')
      }
    }
  }
</script>
<style scoped lang='stylus'>
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
  img
    width 100%
    
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
.bg_div img.bg, video{
  width: 100%;
  display: block;
}
    
.bg_div .bg_light{
  display: none;
  opacity: 0;
  animation: fadein 2s ease-out;
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
    
.bg_div .txt_content{
  font-family: FZYanSJW_Xian;
  position: absolute;
  color: #fff;
  top: 35%;
  left: 0;
  right: 0;
  text-align: center;
}
    
.bg_div_01 .sing-com{
  top: 28%;
}
.bg_div_01 .txt_content{
  top: 23%;
}

.bg_div_02 .sing-com{
  top: 31%;
}
.bg_div_02 .txt_content{
  top: 26%;
}

.bg_div_03 .sing-com{
  top: 43%;
}
.bg_div_03 .txt_content{
  top: 38%;
}

.bg_div_04 .sing-com{
  top: 52%;
}
.bg_div_04 .txt_content{
  top: 47%;
}

.bg_div_05 .sing-com{
  top: 7%;
}
.bg_div_05 .txt_content{
  top: 47%;
  line-height: 32px;
  display: none;
  opacity: 0;
  animation: fadein 2s 1s ease-out;
  animation-fill-mode: forwards;
}
</style>