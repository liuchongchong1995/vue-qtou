<template>
    <div :class="classObj" class="container">
        <Navbar />
        <div class="c-wrapper"> 
            <main-body />
        </div>
    </div>
</template>

<script> 
    import Navbar from './components/Navbar';
    import MainBody from './components/MainBody';
    import ResizeMixin from './mixin/ResizeHandler'; 
    import { mapState } from 'vuex'; 

    export default {
        name: 'Container',
        components: { 
            Navbar, 
            MainBody
        },
        mixins: [ResizeMixin],
        data(){
            return{
                countData:{} 
            }
        },
        computed: {
            ...mapState({ 
                device: state => state.app.device
            }),
            classObj() {
                return {   
                }
            }
        },  
        methods: { 
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/mixins/mixins.scss";
    @import "~@/assets/scss/variables.scss";

    .c-wrapper {
        position: relative;
        height: 100%; 
        @include clearfix; 
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    } 
    .fixed-header+.main-body {
        padding-top: 90px;
        min-height: calc(100vh - 90px);
    }

    .hideSidebar .fixed-header {
        width: calc(100% - 54px)
    }
    .mobile .fixed-header {
        width: 100%;
    }
</style>