<template>
  <canvas id='myCanvas'></canvas>
</template>

<script>
  export default {
    mounted(){
      let canvas = document.getElementById('myCanvas')
      let ctx = canvas.getContext('2d')
      ctx.fillRect(20, 20, 15, 100)
      ctx.fillStyle='#eee'
    }
  }
</script>

<style lang='stylus'>
  
</style>