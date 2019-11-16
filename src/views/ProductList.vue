<template>
    <div>
        <nav>
            <span style="margin-right:20px">欢迎您:{{this.$store.state.loginuser}}</span>
            <router-link to="/login" @click.native="logout()">登出</router-link>
        </nav>
     <div class="list">
         <product v-for="(item,index) in showlist" :info="item" :key="index"></product>
     </div>
        <div class="page">
            <Page :total="total" :current="current" :page-size="size"
                  prev-text="上一页" next-text="下一页" @on-change="change"/>
        </div>
    </div>
</template>

<script>
    import Product from "./Product";
    import axios from 'axios'
    export default {
        components: {Product},
        name: "product-list",
        data(){
            return{
                Prodlist:[],
                current:1,
                size:4,
                showlist:[]
            }
        },
        mounted(){
            if(this.$store.state.loginuser==''){
                this.$router.push('/');
            }else{
                axios.post("http://localhost:8080/api/getproductlist").then((res)=>{
                    this.prodlist=res.data;
                })
            }
        },
        methods:{
            logout(){
                if(this.$cookies.isKey('username')){
                    this.$cookies.remove('username')
                }
                this.$store.commit('setLoginUser','')
            }
        }
    }
</script>

<style scoped>

</style>