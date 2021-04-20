<template>
    <el-row>
        <el-col :span="24">
            <div class="m-orgin">
                <div class="m-orgin-head">
                    <div class="m-orgin-head-btn">
                        <el-button type="primary" size="small" class="m-orgin-head-btn-st m-orgin-head-btn-color">
                            <i class="el-icon-qtou">&#xe62e;</i>
                            关联组织
                        </el-button>
                        <el-button type="primary" size="small" class="m-orgin-head-btn-st m-orgin-head-btn-color style">
                            <i class="el-icon-qtou">&#xe63e;</i>
                            删除
                        </el-button>
                        <el-button type="primary" size="small" class="m-orgin-head-btn-st m-orgin-head-btn-color style">
                            <i class="el-icon-qtou">&#xe694;</i>
                            转移
                        </el-button>
                    </div>
                    <div class="m-flist-head m-ugroup-head m-orgin-head-search">
                        <el-input
                            placeholder="搜索组织、姓名、手机号"
                            class="m-flist-head-search"
                            v-model="search">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                </div>
                <div class="m-orgin-table" ref="tableItem">
                    <el-table 
                        class="m-ugroup-table"
                        :data="tableData.filter(data => !search || data.id.toLowerCase().includes(search.toLowerCase()))"
                        :row-style="tableRowStyle"
                        :cell-style="tableCellStyle"
                        :header-cell-style="tableHeadCellStyle"
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        @selection-change="handleSelectionChange"
                        @row-click="clickTableRow"
                        @row-contextmenu="rightClick"
                        style="width: 100%;">
                        <el-table-column
                            type="selection"
                            width="40">
                        </el-table-column>
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <div class="m-orgin-table-not" v-if="props.row.children == undefined || props.row.children.length == 0">暂无人员信息</div>
                                <ul class="m-orgin-table-list" v-else>
                                    <li v-for="(item, index) in props.row.children" :class="[ props.row.children.length-1 == index ? 'style': '' ]">
                                        <div class="m-orgin-table-list-img">
                                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="m-orgin-table-list-img-headportrait">
                                            </el-avatar>
                                            <p class="m-orgin-table-list-img-name">{{ item.id }}</p>
                                        </div>
                                        <p class="m-orgin-table-list-pstyle m-orgin-table-list-phone"><i class="el-icon-qtou">&#xe62f;</i>{{ item.name }}</p>
                                        <p class="m-orgin-table-list-pstyle m-orgin-table-list-mail"><i class="el-icon-qtou">&#xe7bd;</i>{{ item.mail }}</p>
                                    </li>
                                </ul>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="id"
                            label="组织/用户"
                            align="left">
                            <template slot="header" slot-scope="scope">
                                组织/用户
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="人员信息"
                            align="left">
                            <template slot-scope="scope">
                                <div class="m-ugroup-table-user">
                                    <p class="m-ugroup-table-user-name">{{ scope.row.name }}</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="前往维护"
                            align="right">
                            <template slot="header" slot-scope="scope">
                                <p class="m-orgin-table-gomaintain">前往维护<i class="el-icon-qtou">&#xe631;</i></p>
                            </template>
                            <template slot-scope="scope">
                                <i class="el-icon-qtou">&#xe631;</i>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div id="menu">
                <div class="menu" v-for="(item,index) in menus" :key="index" @click.stop="infoClick(index)">{{ item }}</div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {
                search: '',
                menus: ['详细信息', '方案分析', '方案存库', '清除方案'],
                tableData: [{
                    id: '超级管理员',
                    name: '1个/10人'
                }, {
                    id: '政府引导基金',
                    name: '3个/20人',
                    children: [{
                        id: '郄锦（合伙人）',
                        name: '13812345678',
                        mail: 'jiejin@starfund.com.cna'
                    }, {
                        id: '郄锦（合伙人）',
                        name: '13812345678',
                        mail: 'jiejin@starfund.com.cn'
                    }]
                }, {
                    id: '母基金',
                    name: '8个/50人'
                }, {
                    id: '个人投资人',
                    name: '1个/20人'
                }],
                // 获取当前右键点击的table行下标
                currentRowIndex: 0,
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
            },

            // 自定义菜单的点击事件
            infoClick(index) {
                this.$alert('当前table的下标为'+this.currentRowIndex ,'你点击了自定义菜单的'+this.menus[index]+'功能', {
                    confirmButtonText: '确定',
                    callback: action => {
                        var menu = document.querySelector("#menu");
                        menu.style.display = 'none';
                    }
                });
            },
            // table的左键点击当前行事件
            clickTableRow(row, column, event) {
                var menu = document.querySelector("#menu");
                menu.style.display = 'none';
                // console.log(row,column,event)
                // this.tableData.forEach((item, index) => {
                //     if (row.name === item.name) {
                //         this.radio = index;
                //     }
                // })
            },
            // table的右键点击当前行事件
            rightClick(row, column, event) {
                var menu = document.querySelector("#menu");
                event.preventDefault();
                //获取我们自定义的右键菜单.
                let $tableItem = this.$refs.tableItem,
                    $top = $tableItem.getBoundingClientRect().top,
                    $left = $tableItem.getBoundingClientRect().left;

                // 根据事件对象中鼠标点击的位置，进行定位
                menu.style.left = event.clientX-$left + 'px';
                menu.style.top = event.clientY-$top+38 + 'px';
                // 改变自定义菜单的隐藏与显示
                menu.style.display = 'block';
                // console.log(row,column);
                // 获取当前右键点击table下标
                this.tableData.forEach((item,index) => {
                    if(item.name === row.name) {
                        this.currentRowIndex = index;
                        return false;
                    }
                })
            },
        },
    };
</script>

<style lang="scss">
    .m-orgin .el-table-column--selection .cell {
        padding-left: 10px;
        padding-right: 14px;
    }

    .m-orgin .el-table__expanded-cell[class*=cell] {
        padding: 0;
    }
</style>

<style lang="scss" scoped>

    @import "@/assets/scss/mixins/_variable.scss";
    
    .m-orgin{

        &-head{
            padding-right: 20px;
            display: flex;

            &-btn{
                align-self: center;

                &-color{
                    background: $color;
                    border-color: $color;

                    &.style{
                        background: #fff;
                        color: $color;
                    }
                }

                &-st{
                    margin-right: 5px;
                    height: 34px;

                    & i{
                       font-size: 13px; 
                    }
                }
            }

            &-search{
                margin-left: auto;
            }
        }

        &-table{
            padding-top: 5px;
            
            .m-ugroup-table-user-name {
                line-height: 40px;
            }

            &-gomaintain{
                cursor: pointer;

                & i{
                    margin-left: 4px;
                    color: #263A5B;
                    font-size: 14px;
                }
            }

            &-not{
                line-height: 80px;
                text-align: center;
            }

            &-list{

                &>li{
                    padding-left: 86px;
                    cursor: pointer;
                    display: flex;
                    border: {
                        bottom: 1px solid #EBEEF5;
                    };
                }

                &>li.style{
                    border: none;
                }

                &-img{
                    width: 34.5%;
                    padding: 10px;
                    align-self: center;
                    display: flex;

                    &-headportrait{
                        width: 30px;
                        height: 30px;
                        align-self: center;
                    }

                    &-name{
                        align-self: center;
                        color: #8C9AAD;
                        font-size: 12px;
                        margin-left: 4px;
                    }
                }

                &-pstyle{
                    align-self: center;
                    line-height: 30px;
                    color: #8C9AAD;
                    font-size: 14px;

                    & i{
                        color: $color;
                        font: {
                            size: 16px;
                            weight: blod;
                        };
                    }
                }

                &-phone{
                    width: 28%;

                    & i{
                        margin-right: 2px;
                        font-size: 16px;
                    }
                }

                &-mail{

                    & i{
                        margin-right: 6px;
                        font-size: 12px;
                    }
                }
            }
        }
    }

    #menu {
        width: 120px; 
        height: 100px;
        overflow: hidden; /*隐藏溢出的元素*/
        box-shadow: 0 1px 1px #888, 1px 0 1px #ccc;
        position: absolute; 
        display: none;
        background: #ffffff;
        z-index: 10;
    }
 
    .menu {
        width: 125px;
        height: 25px;
        line-height: 25px;
        text-indent: 10px;
        cursor: pointer;
    }
 
    .menu:hover {
        color: deeppink;
        text-decoration: underline;
    }

</style>
