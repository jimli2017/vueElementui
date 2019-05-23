<template>
  <div class="head-nav">
    <el-row>
      <el-col :span="6" class="logo-container">
        <img src="../assets/logo.png" alt>
        <span>后天管理</span>
      </el-col>
      <el-col :span="6" :offset="12" class="user">
        <div class="userinfo">
          <i class="el-icon-user-solid"></i>
          <div class="welcome">
            <p class="name">
              欢迎
              <span class="username">
                <!-- 下拉菜单 -->
                <!-- <i class="el-icon-arrow-down"></i> -->
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                    <el-dropdown-item command="b">狮子头</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "headnav",
  data () {
    return {
      information: {
        location: {
          station: this.paramsTem.data.location.station,
          floor: this.paramsTem.data.location.floor,
          x: this.paramsTem.data.location.x,
          y: this.paramsTem.data.location.y,
          z: this.paramsTem.data.location.z
        },
        "STEPDATAS":this.walknumber, 
        "BTDATAS" :this.BTDATASarr
      },
      time:20190523
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  },
  created: function() {
    //   let aaa=this.time+JSON.stringify(this.information);
      console.log(this.data.time);
      console.log(this.data.information);
  }
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
.logo-container img {
  width: 45px;
  height: 45px;
}
.username {
  position: absolute;
  margin-left: 10px;
}
.welcome {
  position: relative;
}
</style>
