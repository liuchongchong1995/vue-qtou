<template>
    <div>
        <el-input
            class="new-input"
            placeholder="请输入"
            style=""
            v-model="content"
        ></el-input>
    </div>
</template>

<script>
    export default {
        name: "NewDialog",
        components: {},
        props: {},
        data() {
            return {
                // 输入框内容
                content: ""
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
.new-input {
    width: 343px !important;
    height: 33px !important;
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
