<template>
    <div class="logout-box">
        {{ msg }}
    </div>
</template>
<script>  

    export default {
        name: 'Logout',
        data() {
            return {
                msg: '退出成功'
            };
        },
        mounted() {
            setTimeout(() => {
                this.$router.push('/login');
            }, 1000);
        }
    }
</script>

<style lang="scss" scoped>
    .logout-box {
        font-size: 30px;
        line-height: 300px;
        text-align: center;
    }
</style>