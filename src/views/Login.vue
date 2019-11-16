<template>
    <div class="login">
        <p><input type="text"  placeholder="请输入用户名" class="input" v-model="username" class="input"/></p>  //v-model双向绑定的应用
        <p><input type="password" placeholder="请输入用户名" class="input" v-model="password" class="input"/> </p>
        <p><checkbox v-model="save">登录名和密码是否保持一周</checkbox></p>
        <p><button type="primary" @click="doLogin()" class="btn">登录</button>
           <button type="primary" class="btn" to="/register">注册</button>
        </p>
    </div>
</template>

<script>
    import Checkbox from "view-design/src/components/checkbox/checkbox";
     import axios from 'axio'
    export default {
        components: {Checkbox},
        name: "login",
        data(){
            return{
                username:'',
                password:'',
                save:false
            }
        },
        methods:{  //事件绑定的应用
          doLogin(){
              axios.post('http://localhost:8080/#/login',{username:this.username,password:this.password}).then((res)=>{
                  if(res.data){
                      if(this.save){
                          this.$router.push('/productlist');
                      }else{
                          alert('用户名或者密码错误，请重新输入');
                          this.username='';
                          this.password='';
                      }
                  }
              })
          }

        }
    }
</script>

<style scoped>

</style>