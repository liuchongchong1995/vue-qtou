<template>
    <div class="m-flist">
        <div class="m-flist-head">
            <el-input
                placeholder="搜索您的文件"
                class="m-flist-head-search"
                v-model="filterText">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div class="m-flist-menu">
            <el-tree
                class="m-flist-menu-tree filter-tree"
                :data="data"
                :props="defaultProps"
                :filter-node-method="filterNode"
                node-key="id"
                :default-expanded-keys="[9]"
                highlight-current
                ref="tree">
                <p class="m-flist-menu-tree-list" slot-scope="{ data }">
                    <i class="el-icon-qtou m-flist-menu-tree-list-icon1" v-if="data.type == 0">&#xe62a;</i>
                    <i class="el-icon-qtou m-flist-menu-tree-list-icon2" v-else-if="data.type == 1">&#xe62b;</i>
                    <i class="el-icon-qtou m-flist-menu-tree-list-icon3" v-else-if="data.type == 2">&#xe610;</i>
                    {{ data.label }}
                </p>
            </el-tree>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                filterText: '',
                data: [{
                    id: 1,
                    type: 0,
                    label: 'ProjectWK',
                    children: [{
                        id: 4,
                        type: 1,
                        label: '01-行研报告',
                        children: [{
                            id: 9,
                            type: 2,
                            label: '02-投资协议'
                        }, {
                            id: 10,
                            type: 2,
                            label: '03-投前资料'
                        }]
                    }]
                }, {
                    id: 2,
                    type: 0,
                    label: 'ProjectWK',
                    children: [{
                        id: 5,
                        type: 1,
                        label: '04-投中资料'
                    }, {
                        id: 6,
                        type: 1,
                        label: '尽调文件'
                    }]
                }, {
                    id: 3,
                    type: 0,
                    label: 'ProjectWK',
                    children: [{
                        id: 7,
                        type: 1,
                        label: '05-投中资料'
                    }, {
                        id: 8,
                        type: 1,
                        label: '06-投中资料'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },

        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },

        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            typeFn(type) {
                let str = '';
                switch (Number(type)) {
                case 0:
                    str = '&#xe62a;';
                    break;
                case 1:
                    str = '&#xe633;';
                    break;
                case 2:
                    str = '&#xe610;';
                    break;
                }
                return str;
            },
        },
    };
</script>

<style lang="scss">
    .m-flist-head .el-input{
        height: 34px !important;

        & input{
            padding-left: 36px;
            height: 34px;
            background: #F2F6F9;
            border:none;
            border-radius: 17px;

            font: {
                size: 14px;
            };
        }

        & .el-input__icon{
            width: 36px;
            line-height: 34px;
        }
    }

    .m-flist{
        & .el-tree-node__content {
            height: 38px;
        }
    }
</style>

<style lang="scss" scoped>

    .m-flist{

        &-head{
            padding: {
                left: 18px;
                right: 23px;
                bottom: 18px;
            };
        }
        
        &-menu{
            padding: 0 10px;

            &-tree-list{
                color: #333333;
                font-size: 14px;
                line-height: 38px;
                height: 38px;

                & i{
                    font-size: 8px;
                }

                &-icon1{
                    color: #B4B4B4;
                }

                &-icon2{
                    color: #F8CB00;
                }

                &-icon3{
                    color: #4A90E2;
                }
            }
        }
    }

</style>
