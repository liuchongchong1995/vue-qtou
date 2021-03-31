<template>
    <div class="navbar">
        导航栏
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'; 

    export default {
        name: 'Navbar',
        components: { 
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
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    border-bottom: 1px solid rgba(0,21,41,0.08);

    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background .3s;
        -webkit-tap-highlight-color:transparent;

        &:hover {
            background: rgba(0, 0, 0, .025)
        }
    }
    .right-menu {
        float: right;
        height: 100%;
        line-height: 50px;

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background .3s;

                &:hover {
                    background: rgba(0, 0, 0, .025)
                }
            }
        }
    }
    .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
            position: relative;

            .user-avatar {
                cursor: pointer;
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }

            .el-icon-caret-bottom {
                cursor: pointer;
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
}
</style>