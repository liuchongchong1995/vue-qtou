<template>
    <div class="container-error">
        <div class="container-404">
            <div class="w">
                <h1> {{ title }} </h1>
                <p>{{ message }}</p>
                <router-link to="/dashboard">
                    返回首页
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page500',
        data() {
            return {
                title: '系统错误：',
                message: '系统繁忙，请稍后再试'
            };
        },
        mounted() {
            this.getUrlKey();
        },
        methods: {
            getUrlKey() {
                let query = this.$route.query;

                if (query.title) {
                    this.title = query.title;
                }

                if (query.msg) {
                    this.message = query.msg;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-error {
        width: 100%;
        height: 100%;
        background-color: #fff; // rgb(61, 75, 99);
    }
    .container-404 {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 333px;
        margin-top: -300px;
        background: url('~@/assets/images/500/error-bg.jpg') no-repeat center 96px / 100%175px;

        .w {
            position: relative;
            max-width: 1000px;
            height: 333px;
            margin: 0 auto;
            padding-right: 660px;
            padding-top: 125px;
            background: url('~@/assets/images/500/error-img.png') no-repeat right top;
            color: #fff;
        }

        h1 {
            font-size: 28px;
        }

        p {
            padding-top: 10px;
            font-size: 16px;
        }
        a {
            display: block;
            position: absolute;
            left: 430px;
            top: 400px;
            width: 120px;
            line-height: 34px;
            text-align: center;
            font-size: 12px;
            color: #fff;
            background-color: #3c4b64;
            border-radius: 30px;
            margin-top:10px}

    }
</style>