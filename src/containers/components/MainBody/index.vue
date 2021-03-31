<template>
    <div class="main-body">
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view :key="key" />
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'MainBody',
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-body {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 56px);
        overflow: hidden;
    }
    .fixed-header+.main-body {
        padding-top: 56px;
    }
</style>

<style lang="scss">
    .el-popup-parent--hidden {
        .fixed-header {
            padding-right: 15px;
        }
    }
</style>