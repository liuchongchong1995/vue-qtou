<template>
    <div class="File">
        <el-container>
            <el-aside width="403px" class="File-sidebar">
                <div class="function-btn">
                    <button class="tissue-btn">组织</button>
                    <button>分类</button>
                    <button>删除</button>
                </div>
                <input
                    placeholder="搜索组织名称"
                    v-model="input"
                    clearable
                    class="nav-search"
                />
                <el-table
                    :data="tableData"
                    style="width: 100%;height:100%;padding-left:10px"
                    row-key="id"
                    lazy
                    :load="load"
                    :tree-props="{
                        children: 'children',
                        hasChildren: 'hasChildren'
                    }"
                >
                    <el-table-column type="selection" width="45">
                    </el-table-column>
                    <el-table-column prop="date" label="分类/组织" width="260">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="组织数/人数"
                        width="120"
                    >
                    </el-table-column>
                </el-table>
            </el-aside>

            <el-main class="File-main">
                <!-- 功能按钮区域 -->
                <div class="functionBtn">
                    <el-button
                        class="uploadingbtn"
                        @click="uploadVisible = true" >
                        上传
                    </el-button>
                    <el-button @click="JurisdictionVisible = true">权限</el-button>
                    <el-button @click="newVisible = true">新建</el-button>
                    <el-button>下载</el-button>
                    <el-button @click="delVisible = true"> 删除</el-button>
                    <input placeholder="请输入内容" v-model="inputList" />
                    <span class="fulltext">全文</span>
                </div>
                <!-- 表格区域 -->
                <div class="table-title">
                    <span class="title-left">ProjectWK</span>
                    <span class="title-right">已全部加载，共10个</span>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="日期" width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址"
                        show-overflow-tooltip
                    >
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <!-- 删除弹出框 -->
        <el-dialog title="删除" :visible.sync="delVisible" width="25.5%" close>
            <DeleteDialog></DeleteDialog>
            <span slot="footer" class="dialog-footer">
                <button class="Cancel" @click="delCancle">取 消</button>
                <button class="del" @click="delConfirm">
                    删除
                </button>
            </span>
        </el-dialog>
        <!-- 新建弹出框 -->
        <el-dialog
            title="新建文件夹"
            :visible.sync="newVisible"
            width="25.5%"
            close
        >
            <NewDocument></NewDocument>
            <span slot="footer" class="dialog-footer">
                <button class="Cancel" @click="newCancle">取消</button>
                <button class="affirm" @click="newConfirm">
                    确认
                </button>
            </span>
        </el-dialog>
        <!-- 移动弹出框 -->
        <el-dialog
            title="移动到"
            :visible.sync="moveVisible"
            width="25.5%"
            close
        >
            <MoveDocument></MoveDocument>
            <span slot="footer" class="dialog-footer">
                <button class="Cancel" @click="moveVisible = false">
                    取消
                </button>
                <button class="affirm" @click="moveVisible = false">
                    确认
                </button>
            </span>
        </el-dialog>
        <!-- 立即上传 -->
        <el-dialog
            title=""
            :visible.sync="uploadVisible"
            width="70%"
            class="upload-dialog"
        >
            <UploadDocument></UploadDocument>
            <span slot="footer" class="dialog-footer">
                <button class="Cancel" @click="uploadVisible = false">
                    取消
                </button>
                <button
                    class="affirm"
                    type="affirm"
                    @click="uploadVisible = false"
                >
                    确认
                </button>
            </span>
        </el-dialog>
        <!-- 文档复制 -->
        <el-dialog
            title="复制到"
            :visible.sync="duplicationVisible"
            width="58.7%"
        >
            <DuplicationDocument></DuplicationDocument>
            <span slot="footer" class="dialog-footer">
                <button class="Cancel" @click="duplicationVisible = false">
                    取消
                </button>
                <button
                    class="affirm"
                    type="affirm"
                    @click="duplicationVisible = false"
                >
                    确认
                </button>
            </span>
        </el-dialog>
        <!-- 文档权限 -->
        <el-dialog
            title="权限分配"
            :visible.sync="JurisdictionVisible"
            width="84.3%"
        >
            <DocumentsJurisdiction></DocumentsJurisdiction>
            <span slot="footer" class="dialog-footer">
                <button class="cancel" @click="JurisdictionVisible = false">
                    取 消
                </button>
                <button class="confirm" @click="JurisdictionVisible = false">
                    确 定
                </button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import DeleteDocument from "@/components/DeleteDocument/index";
    import MoveDocument from "@/views/file/componets/MoveDocument/index";
    import NewDocument from "@/views/file/componets/NewDocument/index";
    import UploadDocument from "@/views/file/componets/UploadDocument/index";
    import DocumentsJurisdiction from "@/views/file/componets/DocumentsJurisdiction/index";
    import DuplicationDocument from "@/views/file/componets/DuplicationDocument/index";
    export default {
        components: {
            DeleteDocument,
            MoveDocument,
            NewDocument,
            DocumentsJurisdiction,
            UploadDocument,
            DuplicationDocument
        },
        name: "File",
        data() {
            return {
                // 立即上传
                uploadVisible: false,
                // 删除
                delVisible: false,
                // 新建
                newVisible: false,
                // 移动
                moveVisible: false,
                // 复制
                duplicationVisible: false,
                // 权限分配
                JurisdictionVisible: false,
                // 搜索框数据
                inputList: "",
                input: "",
                // 侧边栏数据
                // 内部表格数据
                tableData: [
                    {
                        id: 1,
                        date: "母基金",
                        personNumber: "3个",
                        children: [
                            {
                                date: "广东省粤科母基金",
                                personNumber: "5人"
                            },
                            {
                                date: "广东省粤财母基金",
                                personNumber: "10人"
                            },
                            {
                                date: "江苏省天富母基金",
                                personNumber: "10人"
                            }
                        ]
                    },
                    {
                        id: 2,
                        date: "政府引导基金",
                        personNumber: "5人",
                        children: [
                            {
                                date: "母基金",
                                personNumber: "3人"
                            },
                            {
                                date: "母基金",
                                personNumber: "3人"
                            }
                        ]
                    },
                    {
                        id: 3,
                        date: "个人投资人",
                        personNumber: "1个",
                        children: [
                            {
                                date: "一期基金投资人",
                                personNumber: "7人"
                            }
                        ]
                    },
                    {
                        id: 4,
                        date: "未分组",
                        personNumber: "2个",
                        children: [
                            {
                                date: "小程序分享",
                                personNumber: "10人"
                            },
                            {
                                date: "px端链接分享",
                                personNumber: "10人"
                            }
                        ]
                    }
                ],
                tableData1: [
                    {
                        id: 1,
                        date: "2016-05-02",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄"
                    },
                    {
                        id: 2,
                        date: "2016-05-04",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1517 弄"
                    },
                    {
                        id: 3,
                        date: "2016-05-01",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1519 弄",
                        hasChildren: true
                    },
                    {
                        id: 4,
                        date: "2016-05-03",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1516 弄"
                    }
                ],
                multipleSelection: []
            };
        },
        methods: {
            load(tree, treeNode, resolve) {
                setTimeout(() => {
                    resolve([
                        {
                            id: 31,
                            date: "2016-05-01",
                            name: "王小虎",
                            address: "上海市普陀区金沙江路 1519 弄"
                        },
                        {
                            id: 32,
                            date: "2016-05-01",
                            name: "王小虎",
                            address: "上海市普陀区金沙江路 1519 弄"
                        }
                    ]);
                }, 1000);
            },
            newCancle() {
                this.newVisible = false;
            },
            newConfirm() {
                this.newVisible = false;
            },
            delCancle() {
                this.delVisible = false;
            },
            delConfirm() {
                this.delVisible = false;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            filterTag(value, row) {
                return row.tag === value;
            }
        }
    };
</script>
<style lang="scss" scoped>
@import "@/assets/scss/organization/organization.scss";
</style>
