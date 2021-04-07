<template>
    <div>
        <el-tree :data="data" :props="defaultProps"></el-tree>
        <span slot="footer" class="dialog-footer">
            <span class="new-folder">新建文件夹</span>
            <button class="Cancel" @click="Visible = false">取消</button>
            <button class="affirm" type="affirm" @click="Visible = false">
                确认
            </button>
        </span>
    </div>
</template>

<script>
export default {
    name: "DuplicationDocument",
    components: {},
    props: {},
    data() {
        return {
            Visible: true,
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
            defaultProps: {
                children: "children",
                label: "label"
            }
        };
    },
    computed: {},
    methods: {}
};
</script>

<style>
.el-dialog__title {
    color: #000 !important;
}
</style>
<style lang="scss" scoped>
.new-folder {
    float: left;
    color: #1e90fd;
    cursor: pointer;
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
