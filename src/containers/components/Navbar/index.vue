<template>
    <div class="navbar">
        <el-dropdown class="logo-container hover-effect" trigger="click">
            <div class="logo-wrapper">
                <img :src="logo+'?imageView2/1/w/86/h/33'" class="logo-avatar">
                <span>ProjectWK</span>
                <i class="el-icon-caret-bottom" />
            </div>
            <!-- 字体 -->
            <i class="el-icon-qtou">&#xe689;</i>
            <!-- end -->
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided>
                    <span style="display:block;">
                        退出
                    </span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">我的工作台</el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'; 

    export default {
        name: 'Navbar',
        components: { 
        },
        data() {
            return {
                activeIndex: '1',
                countData: {},
                logo: require('@/assets/images/logo.png')
            }
        },
        computed: {
            ...mapGetters([ 
            ])
        },
        methods: { 
            async logout() {
                await this.$store.dispatch('user/logout');
                this.$router.push(`/logout`);
            }
        }
    }
</script>

<style lang="scss" scoped>
.navbar {
    height: 70px;
    padding:18px 30px 18px 12px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px 0px rgba(159, 159, 159, 0.5);
    overflow: hidden; 
    
    .logo-container{
        height:33px;
        &.hover-effect {
            cursor: pointer;
            transition: background .3s;

            &:hover {
                background: rgba(0, 0, 0, .025)
            }
        }
        .logo-wrapper{
            width:100%;
            height:100%;
        }
        .logo-avatar{
            width:86px;
            height:33px;
            margin-right: 17px;
        }
    }
}
</style>