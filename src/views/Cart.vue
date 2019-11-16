<template>
    <div>
        <table border="1" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
                <th>序号</th><th>产品名称</th><th>产品数量</th><th>小计</th><th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in this.$store.state.cartlist" :key="index">
                <td>{{index+1}}</td>
                <td><img :src="item.imgurl"></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="modify(index,1)">+</button>
                    <input type="text" v-model="item.count">
                    <button @click="modify(index,-1)">-</button>
                </td>
                <td>{{item.price*item.count}}</td>
                <td><button @click="del(index)">删除</button></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="7">总计：{{total}}</td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: "cart",
        data(){
            return{

            }
        },
        computed:{
            total(){
                let total=0;
                this.$store.state.cartlist.forEach((item)=>{
                    total+=item.price*item.count;
                })
                return total;
            },
            modify(index,n){
                this.$store.commit('modifyCartCount',{index:index,num:n});
            },
            modifyCartCount(state,obj){
                var count=parseInt(state.cartllist[obj.index].count);
                count=count+obj.num;
                if(count>=1){
                    state.cartlist[obj.index].count=count;
                }else{
                    state.cartlist[obj.index].cout=1;
                }
            }
        },
        methods:{
            del(index){
                this,$store.commit('deleteCart',index);
            },
            deleteCart(state,index){
                state.cartlist.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>