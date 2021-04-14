<template>
    <div class="File">
        <el-container>
            <el-aside width="260px" class="File-sidebar">
                <div class="sidebar-title">推荐文档</div>
                <el-tree :data="data" :props="defaultProps"></el-tree>
            </el-aside>
            <el-main class="File-main">
                <!-- 功能按钮区域 -->
                <div class="functionBtn">
                    <el-button
                        class="uploadingbtn"
                        @click="uploadVisible = true"
                    >
                        上传
                    </el-button>
                    <el-button @click="JurisdictionVisible = true">
                        权限
                    </el-button
                    >
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
                    <el-table-column
                        type="selection"
                        width="50"
                        label-class-name="title-color"
                    >
                    </el-table-column>
                    <el-table-column prop="collect" label="" width="50">
                    </el-table-column>
                    <el-table-column label="#" width="40">
                        <template slot-scope="scope">
                            {{ scope.row.date }}
                        </template>
                    </el-table-column>

                    <el-table-column prop="name" label="文件名称" width="526">
                    </el-table-column>
                    <el-table-column prop="" label="Q&A" width="120">
                    </el-table-column>
                    <el-table-column prop="" label="权限" width="120">
                    </el-table-column>
                    <el-table-column
                        prop="jurisdiction"
                        label="文件大小"
                        width="120"
                        :fit="false"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="最近更新日期"
                        width="180"
                        :filters="[
                            { text: '家', value: '家' },
                            { text: '公司', value: '公司' }
                        ]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end"
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
                // 侧边栏数据
                data: [
                    {
                        label: "ProjectWk",
                        children: [
                            {
                                label: "01-行研报告",
                                children: [
                                    {
                                        label: "01-行研报告1",
                                        children: []
                                    }
                                ]
                            },
                            {
                                label: "02-投资协议",
                                children: [
                                    {
                                        label: "02-投资协议1",
                                        children: []
                                    }
                                ]
                            },
                            {
                                label: "01-投前资料",
                                children: [
                                    {
                                        label: "01-投前资料1",
                                        children: []
                                    }
                                ]
                            },
                            {
                                label: "01-投中资料",
                                children: [
                                    {
                                        label: "尽调文件",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "标签",
                        children: [
                            {
                                label: "收藏",
                                children: [
                                    {
                                        label: "收藏1",
                                        children: [{}]
                                    }
                                ]
                            },
                            {
                                label: "回收站",
                                children: [
                                    {
                                        label: "回收站1",
                                        children: [{}]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                // 内部表格数据
                tableData: [
                    {
                        date: "1",
                        name: "TNT报告库备份",
                        jurisdiction: "8",
                        time: "2021/02/10",
                        collect: "★"
                    },
                    {
                        date: "2",
                        name: "TermSheet备份",
                        jurisdiction: "",
                        time: "2021/02/10",
                        collect: "☆"
                    },
                    {
                        date: "3",
                        name: "商业计划书备份",
                        jurisdiction: "",
                        time: "2021/02/10",
                        collect: "★"
                    },
                    {
                        date: "4",
                        name: "尽调资料备份",
                        jurisdiction: "8",
                        time: "2021/02/10",
                        collect: "☆"
                    },
                    {
                        date: "5",
                        name: "企业运营报告备份",
                        jurisdiction: "8",
                        time: "17:00",
                        collect: "★"
                    },
                    {
                        date: "6",
                        name: "基金表现报告备份",
                        jurisdiction: "8",
                        time: "2021/02/10",
                        collect: "☆"
                    },
                    {
                        date: "7",
                        name: "投资人分红备份",
                        jurisdiction: "",
                        time: "2021/02/10",
                        collect: "☆"
                    },
                    {
                        date: "8",
                        name: "集美优鲜股权投资协议.doc",
                        jurisdiction: "",
                        time: "2021/02/10",
                        collect: "☆"
                    },
                    {
                        date: "9",
                        name: "集美优鲜尽调清单.xls",
                        jurisdiction: "",
                        time: "2021/02/10",
                        collect: "☆"
                    },
                    {
                        date: "10",
                        name: "集美优鲜商业计划书.pptx",
                        jurisdiction: "",
                        time: "2021/02/10",
                        collect: "★"
                    }
                ],
                defaultProps: {
                    children: "children",
                    label: "label"
                }
            };
        },
        methods: {
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
    @import "@/assets/scss/file/file.scss";
</style>
