<template>
    <div class="app-container"> 
        <h1>首页</h1>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                myRoles: 0
            }
        },
        created() {
            this.myRoles = this.$store.getters.roles[0];
        },
        mounted(){
            document.title = "轻投";
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        text-align: center;
        line-height: 10;
    }
</style>