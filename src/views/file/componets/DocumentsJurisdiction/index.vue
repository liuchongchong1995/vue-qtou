<template>
    <div class="box">
        <el-container class="content">
            <!-- 左侧 -->
            <el-aside style="width: 204px" class="left">
                <el-tree :data="data" :props="defaultProps"></el-tree>
            </el-aside>
            <!-- 右侧 -->
            <el-main class="right">
                <!-- 操作 -->
                <div class="jurisdictionIcon">权限(ProjectWK)</div>
                <div class="operation">
                    <div
                        class="iconText"
                        v-for="(item, index) in operation"
                        :key="index"
                    >
                        <i>{{ item.icon }}</i>
                        <span>{{ item.text }}</span>
                    </div>
                </div>
                <!-- 分割线 -->
                <el-divider class="el-divider"></el-divider>
                <!-- table -->
                <el-table :data="tableData" class="table">
                    <el-table-column prop="user" label="用户" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="organization"
                        label="组织数/人数"
                        width="180"
                    >
                    </el-table-column>
                    <el-table-column prop="empty" label="">
                        <span
                            v-for="(item, index) in 10"
                            :key="index"
                            style="padding: 0 25px"
                            >√</span
                        >
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 侧边栏数据
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
                }
            ],
            defaultProps: {
                children: "children",
                label: "label"
            },
            //   操作
            operation: [
                { icon: "", text: "无" },
                { icon: "", text: "查看" },
                { icon: "", text: "分享" },
                { icon: "", text: "下载PDF文件" },
                { icon: "", text: "下载原始文件" },
                { icon: "", text: "下载加密文件" },
                { icon: "", text: "打印" },
                { icon: "", text: "转存" },
                { icon: "", text: "上传" },
                { icon: "", text: "删除" }
            ],
            //   table
            tableData: [
                {
                    user: "超级管理员",
                    organization: "1个/10人",
                    empty: "√"
                },
                {
                    user: "超级管理员",
                    organization: "1个/10人",
                    empty: "√"
                },
                {
                    user: "超级管理员",
                    organization: "1个/10人",
                    empty: "√"
                },
                {
                    user: "超级管理员",
                    organization: "1个/10人",
                    empty: "√"
                }
            ]
        };
    },
    methods: {}
};
</script>
<style scoped>
.box {
    position: relative;
    width: 1280px;
    height: 600px;
    background-color: #ffffff;
}

.close {
    float: right;
    top: 12px;
    margin-right: 20px;
}

.box .content .left {
    widows: 204px;
    height: 536px;
    background-color: #f2f6f9;
}

.box .content .right {
    width: 1076px;
    height: 536px;
}

.box .content .right .table {
    width: 986px;
    margin-left: 50px;
    overflow-x: hidden;
}

.box .content .right .el-divider {
    overflow: hidden;
    width: 984px;
    height: 1px;
    margin: 100px 0 0 50px;
}

.jurisdictionIcon {
    float: left;
    width: 153px;
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    color: #1e6fff;
    margin: 30px 0 0 50px;
}

.iconText {
    float: right;
    margin: 0 5px;
}

.iconText i {
    display: block;
    width: 20px;
    height: 20px;
    margin: 25px 0 10px 0;
    background-color: red;
}
</style>
