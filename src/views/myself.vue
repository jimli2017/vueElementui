<template>
  <div class="myself">
    <el-row>
        <el-col :span='8' class="bg-purple-dark">{{this.$store.state.name}}</el-col>
        <el-col :span='16' class="bg-purple">这是内容区域</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'myself',
  components: {
    
  }
};
</script>
<style scoped>
 .bg-purple-dark {
    background: #99a9bf;
    height: 300px;
  }
  .bg-purple {
    background: #d3dce6;
    height: 300px;
  }
</style>
