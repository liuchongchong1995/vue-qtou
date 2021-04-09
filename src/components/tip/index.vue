<template>
    <div class="m-login-phHint">
        <div class="m-login-phHint-rel">
            <i></i>
            <div>{{ message }}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'tip',
        props: { 
            message: {
                type: String,
                default: ''
            }
        },
        data() {
            return {};
        },
        created() {
            
        },
        methods: {
        }
    };
</script>

<style lang="scss" scoped>
    .m-login-phHint-rel {
        color: #fff;
        padding: 0 10px;
        height: 36px;
        line-height: 36px;
        background:#387EE8;
        border-radius: 18px 18px 18px 0px;
        position: absolute;
        top: 7px;
        right: auto;
        bottom: auto;
        left: 360px;
        white-space: nowrap;
        display: none;
    }
</style>
