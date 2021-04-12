
<template>
    <div class="navbar">
        <router-link 
            v-for="(item,index) in permission_routes" 
            v-if="!item.hidden"
            :key="index"
            :to="item.path"
        >
            {{ item.name }}
        </router-link>
        <i class="el-icon-qtou">&#xe605;</i>
        <!-- <el-dropdown class="logo-container hover-effect" trigger="click">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <el-submenu index="1">
                    <template slot="title">ProjectWK</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2" >主页</el-menu-item>
                <el-menu-item index="3" >文档</el-menu-item>
                <el-menu-item index="4" >权限</el-menu-item>
                <el-menu-item index="5" >组织</el-menu-item>
                <el-menu-item index="6" >问答</el-menu-item>
                <el-menu-item index="7" >分析</el-menu-item>
                <el-submenu index="8" class="username">
                    <template slot="title">Linda</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-dropdown> -->
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
                'permission_routes'
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
    height: 68px;
    // padding:18px 30px 18px 12px;
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
.el-menu-demo {
    left: 125px;
    .el-submenu {
    font-size: 20px ;

    }
    .el-menu-item {
    font-size: 20px !important;
    }
}
.username {
    position: absolute;
    right: -760px;

}
.el-menu--horizontal{
    border: none !important;
    .el-menu-item:not(.is-disabled):hover {
        color: #1E6FFF;
        border-bottom-color:#1E6FFF;
    }
}

</style>