<template>
  <div class="index">
    <el-container>
      <el-header>
        <HeaderNav></HeaderNav>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <LeftNav></LeftNav>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from "../components/head";
import LeftNav from "../components/leftnae";
export default {
  name: "idnex",
  components: {
    HeaderNav,
    LeftNav
  }
};
</script>
<style scoped>
.el-header{
  padding: 0px;
}
</style>
