<template>
  <div class="left-nav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1" @click='goHome'>
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>多级导航</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "leftnav",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "资金管理",
          path: "fund",
          children: [{ path: "foudlist", name: "资金流水" }]
        },
        {
          icon: "fa-asterisk",
          name: "信息管理",
          path: "info",
          children: [{ path: "infoshow", name: "个人信息" }]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
		goHome(){
			this.$router.push("/home");
		}
  },
  created: function() {
    //   let aaa=this.time+JSON.stringify(this.information);
  }
};
</script>
<style scoped>
li{
    text-align: left;
}
</style>
