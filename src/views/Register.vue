<template>
    <div>
        <h3>用户注册</h3>
        <p>
            <input prefix="ios-contact" v-model="username" placeholder="请输入用户名" class="input" @on-blur="validateUser()"/>
            <span class="err">{{errmsg1}}</span>
        </p>
        <p>
            <input prefix="ios-lock" v-model="password" placeholder="请输入密码" class="input" @on-blur="validatePass()"/>
            <span class="err">{{errmsg2}}</span>
        </p>
        <p>
            <input prefix="ios-lock" v-model="passagain" placeholder="请再次确认密码" class="input" @on-blur="validatePass2()"/>
            <span class="err">{{errmsg3}}</span>
        </p>
        <p>
           <button type="primary" class="btn" @click="doRegister()">注册</button>
            <button type="primary" class="btn">重置</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return{
                username:'',
                password:'',
                passagain:'',
                errmsg3:''
            }
        },
        methods:{
            validateUser:function () {
                let valid =true;
                if(this.username==''){
                    this.errmsg1='用户名不能为空';
                    valid=false;
                }else{
                    axios.get('http://localhost:8080/api/isexist',{params:{username:this.username}}).then((res)=>{
                        if(res.data){
                            this.errmsg1='用户名已存在'
                            valid=false;
                        }
                        }
                    )
                }
                if(valid==true){
                    this.errmsg1='';
                    return valid;
                }
            },
            validatePass:function () {
                let valid=true;
                if(this.password==''){
                    this.errmsg2='密码不能为空';
                    valid=false;
                }else{
                    var reg=new RegExp(/^\W{6,16}$/);
                    valid =reg.test(this.password);
                    if(!valid){this.errmsg2='密码需为6-16位字符'}
                }
                if(valid){
                    this.errmsg2='';
                    return valid;
                }
            },
            validatePass2:function () {
                let valid=true;
                if(this.passagain==""){
                    valid=false;
                    this.errmsg3='请输入确认密码';
                }else{
                    if(this.passagain!=this.password){
                        valid=false;
                        this.errmsg3='两次密码不一致'
                    }
                }
                if(valid){this.errmsg3='';
                return valid;
                }
            }
        }
    }
</script>

<style scoped>

</style>