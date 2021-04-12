
<template>
    <div class="navbar">
        <el-image
            :src="logo"
            :fit="fit"
        >
        </el-image>
        <router-link 
            v-for="(item,index) in permission_routes"
            v-if="!item.hidden"
            :key="index"
            :to="item.path"
        >
            {{ item.name }}
        </router-link> 
        <i class="el-icon-qtou">&#xe605;</i>
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
                logo: require('@/assets/images/logo.png'),
                fit: 'fit'
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