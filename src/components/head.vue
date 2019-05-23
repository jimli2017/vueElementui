<template>
  <div class="head-nav">
    <el-row>
      <el-col :span="6" class="logo-container">
        <img src="../assets/logo.png" alt="">
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "head"
};
</script>
<style scoped>
.head-nav {
  width: 100%;

  
  height: 50px;
  min-width: 600px;
  padding: 5px;
  background: #324057;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
}
.logo-container img{
    width: 50px;
    height: 50px;
}
</style>
