<template>
    <div class="upload">
        <el-header>
            <!-- 上侧H提示 -->
            <div class="nav">
                <div class="h">上传文档</div>
            </div>
        </el-header>
        <el-main>
            <div class="left">
                <el-tree :data="data" :props="defaultProps"></el-tree>
            </div>
            <div class="right">
                <div class="text">上传至(ProjectWK)</div>
                <div class="bgcbox">
                    <p class="p">拖拽文件和文件夹至此处</p>
                </div>
                <el-button class="elbutton" type="primary">选择文件</el-button>
            </div>
        </el-main>
    </div>
</template>
<script>
export default {
    props: {},
    data() {
        return {
            // 是否关闭上传弹框
            centerDialogVisible: false,
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
            }
        };
    }
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.upload {
    width: 900px;
    height: 600px;
    background-color: #ffffff;
}
.upload .nav {
    width: 100%;
    height: 60px;
    font-size: 20px;
    color: #020101;
    line-height: 60px;
    padding-left: 25px;
    border-bottom: 1px solid #cecbcb;
}

.h {
    float: left;
    clear: both;
}

.close {
    float: right;
    margin: 12px 20px 0 0;
}

.close {
    float: right;
    margin-right: 20px;
}

/* 下边 */
.left {
    float: left;
    width: 202px;
    height: 536px;
    background-color: #f2f6f9;
}

.right {
    position: relative;
    float: right;
    width: 697px;
    height: 536px;
}

.right .text {
    width: 173px;
    height: 28px;
    line-height: 28px;
    color: #1e6fff;
    margin: 18px 0 0 20px;
}

.right .bgcbox {
    position: absolute;
    left: 169px;
    top: 108px;
    width: 280px;
    height: 280px;
    text-align: center;
    background-color: #f2f6f9;
    border-radius: 50%;
}

.right .bgcbox .p {
    font-size: 16px;
    color: #8c9aad;
    margin-top: 200px;
}

.right .elbutton {
    position: absolute;
    bottom: 82px;
    left: 199px;
    width: 220px;
    height: 34px;
}

.dialog .button {
    width: 70px;
    height: 27px;
    line-height: 27px;
}
</style>
