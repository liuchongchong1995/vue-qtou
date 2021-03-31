/**
 * 系统管理
 */
import Container from '@/containers';

const systemRouter = {
    path: '/system',
    component: Container,
    redirect: 'noRedirect',
    name: '系统管理',
    meta: {
        title: '系统管理',
        // icon: 'attestation',
        roles: ['2','3']
    },
    children: [
        {
            path: '/system/index',
            component: () => import('@/views/system/index'),
            name: '个人信息管理',
            meta: {
                title: '个人信息管理',
                roles: ['3']
            }
        },
        {
            path: 'pass',
            component: () => import('@/views/system/pass'),
            name: '密码管理',
            meta: {
                title: '密码管理',
                roles: ['3']
            },
        },
        {
            path: 'passcompany',
            component: () => import('@/views/system/passcompany'),
            name: '密码管理',
            meta: {
                title: '密码管理',
                roles: ['2']
            },
        },
        {
            path: '/system/companyinfo',
            component: () => import('@/views/system/companyinfo'),
            name: '单位信息管理',
            meta: {
                title: '单位信息管理',
                roles: ['2']
            },
        },
        {
            path: '/system/log',
            component: () => import('@/views/system/log'),
            name: '日志查询',
            meta: {
                title: '日志查询',
                roles: ['2']
            },
        }
    ]
};

export default systemRouter;
