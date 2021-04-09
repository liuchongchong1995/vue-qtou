import router from '@/router';
import store from '@/store';
import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/assets/scripts/utils/auth';
import getPageTitle from '@/assets/scripts/utils/getPageTitle';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login', '/500', '/404', '/logout'];

router.beforeEach(async(to, from, next) => {
    NProgress.start();

    // 设置页面标题
    document.title = getPageTitle(to.meta.title);

    // 验证是否登陆
    const hasToken = getToken();
 
    if (hasToken) {
        if (to.path === '/login') {
            next({
                path: '/'
            });

            NProgress.done();
        } else {
            let hasRoles = store.getters.roles && store.getters.roles.length > 0;
 
            if (hasRoles) {
                next();
            } else {
                try {
                    let { roles } = await store.dispatch('user/getInfo');
 
                    let accessRoutes = await store.dispatch('permission/generateRoutes', roles);
  
                    router.addRoutes(accessRoutes)
                    next({ ...to, replace: true });
                } catch (error) {
                    await store.dispatch('user/resetToken');

                    Message.error(error || 'Has Error');
                    next(`/login?redirect=${to.fullPath.replace('?', '&')}`);
                    NProgress.done();
                }
            }
        }
    } else {
        if(whiteList.indexOf(to.path) !== -1) {
            next();
        } else {    // 如果没有登陆 
            next(`/login?redirect=${to.fullPath.replace('?', '&')}`);
           
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done()
});
