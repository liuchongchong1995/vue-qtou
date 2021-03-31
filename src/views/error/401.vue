<template>
    <div>
        <h1>没有权限</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Page404',
        computed: {
            message() {
                return '你没有权限去该页面'
            }
        }
    }
</script>