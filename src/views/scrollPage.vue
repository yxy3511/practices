<template>
  <div>
    <div class="txt">hello world</div>
    <parallaxScroll :el='el'></parallaxScroll>
  </div>
</template>
<script>
  import parallaxScroll from '@/components/parallax-scroll'
  export default {
    data(){
      return {
        el: null
      }
    },
    components:{
      parallaxScroll
    },
    mounted(){
      this.$nextTick(()=>{
        this.el = $('.txt')
      })
    }
  }
</script>