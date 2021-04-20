<template>
    <div class="navbar">
        <span class="hint">删除后其他人将无法使用该文档,确定删除吗?</span>
    </div>
</template>

<script>
    export default {
        name: "DeleteDialog",
        components: {},
        props: {
            visible: Boolean
        },
        data() {
            return {};
        },
        computed: {},
        methods: {
            // 取消事件
            cancel() {
                this.$emit("cancel");
            },
            //    确定事件
            confirm() {
                this.$emit("confirm");
            }
        }
    };
</script>

<style>
.el-dialog__title {
    color: #000 !important;
}
</style>
<style lang="scss" scoped>
.hint {
    color: #333;
    font-size: 14px;
    padding-left: 20px;
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
.del {
    width: 70px;
    height: 28px;
    border-radius: 3px;
    color: #fff;
    border: none;
    background-color: #1e6fff;
}
</style>
