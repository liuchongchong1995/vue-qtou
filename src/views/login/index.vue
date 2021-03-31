<template>
    <div>

    </div>
</template>
<script>  
    export default {
        name: 'Login',
        data() {
            return {
                redirect: '',
                otherQuery: {}
            };
        },
        created() {
            //this.getUserInfo();
        },
        mounted() {
        },
        methods: {
            getUserInfo() {
                /* eslint-disable */
                this.otherQuery = this.getOtherQuery();
                let param = {
                    _kp_sso_sign: this.otherQuery.sign,
                    _kp_sso_token: this.otherQuery.token
                };
                if (this.otherQuery.loginWay) {
                    param.loginWay = this.otherQuery.loginWay;
                }
                this.$store.dispatch('user/login', param).then(() => {
                    this.$router.push({ path: this.redirect || '/', query: this.otherQuery });
                }).catch(() => { 
                     this.$router.push({ path: '/login' });
                });
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
