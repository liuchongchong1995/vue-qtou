<template>
    <div class="container-404">
        <img class="png" src="@/assets/images/404/404.png" />
        <img class="png msg" src="@/assets/images/404/404_msg.png" />
        <p>
            <router-link to="/dashboard">
                <img class="png" src="@/assets/images/404/404_to_index.png" />
            </router-link>
        </p>
        <div class="cloud"></div>
    </div>
</template>

<script>
    export default {
        name: 'Page404',
        computed: {
            message() {
                return 'The webmaster said that you can not enter this page...'
            }
        }
    }
</script>


<style lang="scss" scoped>
    .container-404 {
        width: 100%;
        height: 100%;
        min-width: 500px;
        margin: 0 auto;
        padding-top: 50px;
        text-align: center;
        background: url("~@/assets/images/404/error_bg.jpg") repeat-x scroll 0 0 #67ACE4;

        img {
            display: block;
            margin: 0 auto 50px;
            border: medium none;
        }

        .error {
            position: relative;
            height: 200px;

            img {
                position: absolute;
                right: -50px;
                bottom: -50px;
            }
        }

        .msg {
            margin-bottom: 65px;
        }

        .cloud {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 170px;
            background: url("~@/assets/images/404/error_cloud.png") repeat-x scroll 0 0 transparent;
        }
    }
</style>