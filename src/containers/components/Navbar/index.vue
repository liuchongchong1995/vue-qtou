
<template>
    <div class="navbar">
        <el-image
            :src="logo"
            :fit="fit"
            class="u-icon"
        >
        </el-image>
        <ul class="nav-list"> 
            <router-link
                tag="li"
                v-for="(item,index) in routerArr" 
                :key="index"
                class="m-nav-list"
                :to="item.path"
            >
                {{ item.name }}
            </router-link>
        </ul>
        <div class="u-user">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="u-user-headportrait">
            </el-avatar>
            <el-dropdown class="u-user-name">
                <span class="el-dropdown-link">
                    Linda<i class="el-icon-qtou el-icon-arrow-downs">&#xe625;</i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
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
                routerArr: [],
                logo: require('@/assets/images/logo.png'),
                fit: 'fit'
            }
        },
        computed: {
            ...mapGetters([ 
                'permission_routes'
            ])
        },
        created() {
            this.permission_routes.forEach(item=>{
                if(!item.hidden) { 
                    if(item.path == '/') {
                        item.path = '/dashboard'
                    }
                    this.routerArr.push(item);
                    
                }
            })
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
    position: relative;
    z-index: 999;
    height: 68px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px 0px rgba(159, 159, 159, 0.5);
    overflow: hidden; 
    display: flex;
    
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
    .u-icon {
        width: 86px !important;
        height: 33px;
        align-self: center;
        margin: {
            left: 20px;
            right: 194px;
        }
    }
    .nav-list{
        display: flex;
        .m-nav-list{
            align-self: center; 
            font-size: 20px;
            margin-right: 58px;
            white-space:nowrap;
            height: 54px;
            padding: 0 6px;
            cursor: pointer;
            line-height: 54px; 
            border-bottom: 2px solid #fff; 
            color: #BBBBBB; 
            &.router-link-active ,
            &:hover{
                color: #1E6FFF;
                border-bottom: 2px solid #1E6FFF;
            }
        }
    }
    
    .u-user{
        align-self: center;
        margin: {
            left: auto;
        }
        display: flex;
        &-headportrait{
            width: 40px;
            height: 40px;
            align-self: center;
        }
        &-name{
            align-self: center;
            margin: {
                left: 8px;
                right: 28px;
            };
            .el-dropdown-link {
                cursor: pointer;
                color: #BBBBBB;
                font: {
                    size: 16px;
                }
            }
            .el-icon-arrow-downs {
                color: #6B6B6B;
                margin: {
                    left: 4px;
                }
                font: {
                    size: 14px;
                }
            }
        }
    }
}

</style>