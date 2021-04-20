<template>
    <el-container id="l-jution">
        <el-aside id="l-aside" :class="[tabIndex == 0 ? 'l-aside-who' : 'l-aside-wht']">
            <div class="l-aside-tab">
                <el-tabs v-model="activeName" @tab-click="handleClick" class="l-aside-tabs" stretch="stretch">
                    <el-tab-pane label="按文档" name="first">
                        <div class="l-aside-tab-first">
                            <FileList />
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="按用户组" name="second">
                        <div class="l-aside-tab-second">
                            <UserGroup />
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-aside>
        <el-main id="l-main">
            <el-row :gutter="20">
                <el-col :span="lMainSpan1">
                    <div class="l-main-screen l-main-public" v-if="tabIndex == 1">
                        <FileList />
                    </div>
                    <div class="l-main-group l-main-public" v-if="tabIndex == 0">
                        <UserGroup />
                    </div>
                </el-col>
                <el-col :span="lMainSpan2">
                    <div class="l-main-option l-main-public">
                        <div class="l-main-option-head">
                            <p class="l-main-option-head-name"><i class="el-icon-qtou">&#xe62c;</i>权限(ProjectWK)</p>
                            <div class="l-main-option-head-btn">
                                <p v-show="isEdit == false" @click="editFn(0)">编辑</p>
                                <p v-show="isEdit == true" @click="editFn(1)" class="l-main-option-head-btn-style"><i class="el-icon-qtou">&#xe62d;</i>应用</p>
                                <p v-show="isEdit == true" @click="editFn(1)">取消</p>
                            </div>
                        </div>
                        <div class="l-main-option-edit">
                            <PermissionList />
                        </div>
                        <div class="l-main-option-orgin">
                            <OrganizationList />
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    // [tabIndex == 0 ? '16' : '19']
    import FileList from "@/views/jurisdiction/componets/fileList/index";
    import UserGroup from "@/views/jurisdiction/componets/userGroup/index";
    import PermissionList from "@/views/jurisdiction/componets/permissionList/index";
    import OrganizationList from "@/views/jurisdiction/componets/organizationList/index";
    export default {
        name: 'Gurisdiction',
        components: {
            FileList,
            UserGroup,
            PermissionList,
            OrganizationList
        },
        data() {
            return {
                stretch: true,
                activeName: 'first',
                tabIndex: 0,
                lMainSpan1: 8,
                lMainSpan2: 16,
                isEdit: false
            }
        },
        created() {
            this.myRoles = this.$store.getters.roles[0];
        },
        mounted(){
            document.title = "轻投";
        },
        methods:{
            handleClick(tab, event) {
                this.tabIndex = tab.index;
                console.log(tab.index);
                if (tab.index == 0) {
                    this.lMainSpan1 = 9;
                    this.lMainSpan2 = 15;
                } else {
                    this.lMainSpan1 = 7;
                    this.lMainSpan2 = 17;
                }
            },
            editFn(type) {
                if (type == 0) {
                    this.isEdit = true;
                } else {
                    this.isEdit = false;
                }
            }
        }
    }
</script>
<style lang="scss">
    #l-aside .el-tabs__header{
        padding: 0 26px 0;
        margin: 0;
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #E4E7ED;
            z-index: 1;
        }
    }
    #l-aside .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    #l-aside .el-tabs__item{
        height: 52px;
        line-height: 52px;
        color: #797979;
        font: {
            size: 20px !important;
        };

        &.is-active {
            color: #409EFF;
        }
    }
</style>
<style lang="scss" scoped>
    @import "@/assets/scss/jurisdiction/jurisdiction.scss";
</style>