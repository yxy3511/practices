<template>
  <div class="node_tree">
    <div class="comp" v-for='(data,index) in treeData' :key='index'>
      <vue2-org-tree name="test"
        :data="data"
        :horizontal="horizontal"
        :collapsable="collapsable"
        :render-content="renderContent"
        @on-node-click="onNodeClick"
      />
    </div>
  </div>
</template>
<script>
import Vue2OrgTree from 'vue2-org-tree';
export default {
  props:['treeData'],
  data() {
    return {
      horizontal: true,
      collapsable: true
    }
  },
  components:{
    Vue2OrgTree
  },
  mounted(){
    this.collapseAll(this.treeData)
  },
  methods: {
    onNodeClick(e, data) {
      this.$set(data, "expand", !data.expand);
    },
    collapseAll(){
      this.treeData.forEach(list => {
        this.$set(list, "expand", true);
        list.children && list.children.forEach(child=> {
          this.$set(child, "expand", true);
          // this.collapseAll(child.children)
        })
      })
    },
    renderContent(h, data) {
      // return data.label
      return (<div><span>{data.label}</span><br/><div class='txt'>你好</div></div>)
    },
  },
  /*watch:{
    treeData(newVal, oldVal){
      if(newVal.length){
        this.collapseAll(this.treeData)
      }
    }
  }*/
};
</script>
<style scoped lang="stylus">
#app .mainContent .node_tree
  display block
  // align-items center
  min-height 100vh
  background-color #fff
</style>