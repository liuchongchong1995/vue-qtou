<template>
    <div class="m-ugroup">
        <div class="m-ugroup-btn">
            <el-button type="primary" size="small" icon="el-icon-plus" class="m-ugroup-btn-st m-ugroup-btn-color">用户组</el-button>
            <el-button-group>
                <el-button size="small" icon="el-icon-lock" class="m-ugroup-btn-gst m-ugroup-btn-color"></el-button>
                <el-button size="small" icon="el-icon-delete" class="m-ugroup-btn-gst m-ugroup-btn-color"></el-button>
                <el-button size="small" icon="el-icon-more" class="m-ugroup-btn-gst m-ugroup-btn-color"></el-button>
            </el-button-group>
        </div>
        <div class="m-flist-head m-ugroup-head">
            <el-input
                placeholder="搜索组"
                class="m-flist-head-search"
                v-model="search">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <el-table 
            class="m-ugroup-table"
            :data="tableData.filter(data => !search || data.id.toLowerCase().includes(search.toLowerCase()))"
            :row-style="tableRowStyle"
            :cell-style="tableCellStyle"
            :header-cell-style="tableHeadCellStyle"
            highlight-current-row
            @current-change="handleCurrentChange"
            @selection-change="handleSelectionChange"
            style="width: 100%;">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="id"
                label="用户组"
                align="left">
            </el-table-column>
            <el-table-column
                prop="name"
                label="组织数/人数"
                align="left">
                <template slot-scope="scope">
                    <div class="m-ugroup-table-user">
                        <p class="m-ugroup-table-user-name">{{ scope.row.name }}</p>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                search: '',
                tableData: [{
                    id: '超级管理员',
                    name: '1个/10人'
                }, {
                    id: '政府引导基金',
                    name: '3个/20人'
                }, {
                    id: '母基金',
                    name: '8个/50人'
                }, {
                    id: '个人投资人',
                    name: '1个/20人'
                }],
                currentRow: null,
                multipleSelection: []
            };
        },
        methods: {
            // 修改table tr行的背景色
            tableRowStyle({ row, rowIndex }) {
                let styleJson = {
                    'border-bottom': 'none'
                }
                return styleJson
            },
            tableCellStyle({ row, rowIndex }) {
                let styleJson = {
                    'padding': '5px 0',
                    'cursor': 'pointer'
                }
                return styleJson
            },
            tableHeadCellStyle() {
                let styleJson = {
                    'border-bottom': '1px solid rgba(179,179,179,1)',
                    'color': '#263A5B',
                    'font-size': '15px',
                    'padding': '5px 0',
                    'line-height': '40px'
                }
                return styleJson
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    };
</script>

<style lang="scss">
    .m-ugroup .el-table-column--selection .cell {
        padding-left: 10px;
        padding-right: 14px;
    }
</style>

<style lang="scss" scoped>
    @import "@/assets/scss/mixins/_variable.scss";
    .m-ugroup{

        &-btn{
            margin-bottom: 18px;

            &-color{
                background: $color;
                border-color: $color;
            }

            &-st{
                margin-right: 20px;
                width: 90px;
                height: 34px;
            }

            &-gst{
                padding: 9px 12px;
                background: #fff;
                height: 34px;
                color: $color;
                font-size: 14px;
            }
        }

        &-head{
            padding: {
                right: 30px;
                bottom: 10px;
            };
        }

        &-table{
            
            &-user{

                &-name{
                    line-height: 40px;
                }
            }
        }
    }

</style>
