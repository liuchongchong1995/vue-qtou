/**
 * 账号分配
 */
import Container from '@/containers';

const accountRouter = {
    path: '/account',
    component: Container,
    redirect: 'noRedirect',
    name: '账号分配',
    meta: {
        title: '账号分配',
        roles: ['1','2']
    },
    children: [
        {
            path: 'index',
            component: () => import('@/views/system/account'),
            name: '账号分配',
            meta: {
                title: '账号分配',
                roles: ['2']
            }
        },
        {
            path: '/companymanage',
            component: () => import('@/views/system/companymanage'),
            name: '账号分配',
            meta: {
                title: '账号分配',
                roles: ['1']
            }
        }

    ]
};

export default accountRouter;
