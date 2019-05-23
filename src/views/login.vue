<template>
    <div>
        <p>表单</p>
        <!-- model:表单数据对象 -->
        <!-- rules:表单验证规则 -->
        <!-- ref:获取表单内容 -->
        <!-- prop：表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 -->
        <el-form :model="registerUser" :rules="rules" ref="registerForm" label-width="80px" class="registerForm">
            <el-form-item label="用户名" prop="name">
                <el-input type="text" v-model="registerUser.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
                <el-input type="password" v-model="registerUser.password2" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item label="身份">
                <el-select v-model="registerUser.identity" aria-placeholder="请选择身份">
                    <el-option lable='管理员' value="manager"></el-option>
                    <el-option lable='员工' value="employee"></el-option>
                </el-select>
            </el-form-item>
            
            <el-form-item> 
                <el-button type='primary' class="submit_btn" @click="submit('registerForm')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
//import jwt_decode from 'jwt-decode'
export default {
    name:'login',
    data(){
        var validatePass2 = (rule, value, callback) => {
        if (value !== this.registerUser.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return{
            registerUser:{
                name:"",
                email:'',
                password:'',
                password2:'',
                identity:''
            },
             rules: {
          name: [
            { required: true, message: '用户名不能为空', trigger:"blur"},//trigger是什么时候触发
            {min:2,max:30,message:'长度在2到30个字符之间',trigger:'blur'}
          ],
          email: [
            { required: true,type:'email', message: '邮箱格式不正确', trigger:"blur"},//trigger是什么时候触发
          ],
          password: [
            {required:true,message:'密码不能为空',trigger:'blur'},
            {min:6,max:30,message:'长度在6到30之间',trigger:"blur"}
          ],
          password2: [
            {required:true,message:'密码不能为空',trigger:'blur'},
            {min:6,max:30,message:'长度在6到30之间',trigger:"blur"},
            {validator:validatePass2,trigger:"blur"}
          ]
        }
        }
    },
    methods:{
      submit(registerForm){
        this.$refs[registerForm].validate((valid) => {//对表单进行验证
          if (valid) {
            this.$message({
              message:'账号注册成功！',
              type:'success'
            })
            localStorage.setItem("tocken",'123456');

            // const decode=jwt_decode(localStorage.getItem('tocken'));//解析登录之后的tocken
            // console.log("decode"+decode);
          } else {
            console.log('error submit!!');
            return false;
          }
          this.$router.push("/index");
        });
      }
    }
}
</script>
<style scoped>
.registerForm{
    width: 500px;
    margin: 0 auto;
}
</style>
