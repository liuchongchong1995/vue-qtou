<template>
    <div id="UploadingPeriod">
        <!-- 功能按钮区域 -->
        <div class="functionBtn">
            <el-button class="uploadingbtn">立即上传</el-button>
            <el-button>选择文档</el-button>
            <el-button> 全部清楚</el-button>
        </div>
        <el-progress stroke-linecap="square" :percentage="100"></el-progress>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="#" width="50"> </el-table-column>
            <el-table-column prop="name" label="文件夹名称" width="320">
            </el-table-column>
            <el-table-column prop="date" label="文件大小" width="140">
            </el-table-column>
            <el-table-column prop="data" label="状态" width="180">
            </el-table-column>
            <el-table-column prop="address" label="操作" width="120">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {},
    data() {
        return {
            Visible: true,
            tableData: [
                {
                    id: null,
                    date: "1.2G",
                    name: "",
                    address: ""
                },
                {
                    id: null,
                    date: "",
                    name: "TermSheet",
                    address: ""
                },
                {
                    id: null,
                    date: "200M",
                    name: "商业计划书",
                    address: ""
                },
                {
                    id: null,
                    date: "2.5G",
                    name: "尽调资料",
                    address: ""
                },
                {
                    id: null,
                    date: "1.8G",
                    name: "企业运营报告",
                    address: ""
                },
                {
                    id: 6,
                    date: "120M",
                    name: "基金表现报告",
                    address: ""
                }
            ]
            // 侧边栏数据
        };
    },
    computed: {},
    methods: {}
};
</script>

<style>
#UploadingPeriod > .el-dialog__title {
    color: #000 !important;
}
#UploadingPeriod > .el-dialog__header {
    border-bottom: 1px solid #cecbcb !important;
}
</style>
<style lang="scss" scoped>
.el-button {
    width: 126px;
    height: 40px;
}
.uploadingbtn {
    background-color: #1e6fff;
    color: #fff;
}
.aggregate-scheduling {
    width: 42px;
    display: inline-block;
}
.el-progress {
    width: 716px;
    height: 16px;
    margin: 27px 0 19px 7px;
    border-radius: 0;
}
.Cancel {
    width: 70px;
    height: 28px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    color: #000;
    margin-right: 17px;
}
.affirm {
    width: 70px;
    height: 28px;
    border-radius: 3px;
    color: #fff;
    border: none;
    background-color: #1e6fff;
}
</style>
