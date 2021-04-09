<template>
    <div class="login">
        <div class="login-cont">   
            <div class="login-form"> 
                <div class="m-login-styleType">  
                    <a class="m-login-bindBtn" href="javascript:;" @click="submitDataHandle">登录</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    //import settings from '@/assets/scripts/settings';

    export default {
        name: 'Login',
        components: {
            
        },
        data() {
            return {
                browserLayer: true,
                noticeLayer: true,
                phone:'',
                password: '',
                otherQuery: ''
            };
        },
        methods: {  
            async submitDataHandle() {
                 
                this.loginPath('user/login');
            },
            loginPath(url) {
                this.otherQuery = this.getOtherQuery();
                this.$store.dispatch(url);
                this.$router.push({ path: '/', query: this.otherQuery });
            },
            getOtherQuery() {
                let query = this.$route.query;
                
                if (query) {
                    return Object.keys(query).reduce((acc, cur) => {
                        if (cur !== 'redirect') {
                            acc[cur] = query[cur];
                        } else {
                            this.redirect = query[cur];
                        }

                        return acc;
                    }, {});
                }

                return {};
            }
        }
    }
</script>
<style lang="scss" src="@/assets/scss/login.scss"></style>
