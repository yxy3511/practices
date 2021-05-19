<template>
  <!-- <WordToMarkdown path="/path/to/document.docx"></WordToMarkdown> -->
</template>
<script>
  export default {
    components:{
      // WordToMarkdown
    },
    data:{
      file: null
    },
    mounted(){
      // this.file = WordToMarkdown.new("/path/to/document.docx") // => <WordToMarkdown path="/path/to/document.docx">
      console.log('file:',file)
    }
  }
</script>