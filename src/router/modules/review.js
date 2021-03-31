/**
 * 寻呼管理
 */
import Container from '@/containers';

const reviewRouter = {
    path: '/review',
    component: Container,
    redirect: 'noRedirect',
    name: '审核管理',
    meta: {
        title: '审核管理',
        // icon: 'attestation',
        roles: ['1','2']
    },
    children: [
        {
            path: '/review/index',
            component: () => import('@/views/review/index'),
            name: '初审-待初审信息',
            meta: {
                state: 1,
                title: '初审-待初审信息',
                roles: ['2']
            }
        },
        {
            path: '/review/nopass',
            component: () => import('@/views/review/index'),
            name: '初审-审核不通过信息',
            meta: {
                state: 2,
                title: '初审-审核不通过信息',
                roles: ['2']
            }
        },
        {
            path: '/review/pass',
            component: () => import('@/views/review/index'),
            name: '初审-审核通过待上报',
            meta: {
                state: 0,
                title: '初审-审核通过待上报',
                roles: ['2']
            }
        },
        {
            path: '/review/reporting',
            component: () => import('@/views/review/index'),
            name: '初审-审核通过已上报',
            meta: {
                state: 3,
                title: '初审-审核通过已上报',
                roles: ['2']
            }
        },
        {
            path: '/review/manage',
            component: () => import('@/views/review/manage'),
            name: '终审-待审核信息',
            meta: {
                state: 1,
                title: '终审-待审核信息',
                roles: ['1']
            }
        },
        {
            path: '/review/managenopass',
            component: () => import('@/views/review/manage'),
            name: '终审-审核不通过信息',
            meta: {
                state: 2,
                title: '终审-审核不通过信息',
                roles: ['1']
            }
        },
        {
            path: '/review/managepass',
            component: () => import('@/views/review/manage'),
            name: '终审-审核通过信息',
            meta: {
                state: 3,
                title: '终审-审核通过信息',
                roles: ['1']
            }
        },
        {
            path: 'preview',
            component: () => import('@/views/review/preview'),
            name: '登记信息',
            hidden:true,
            meta: {
                title: '登记信息',
                roles: ['1','2']
            }
        }
    ]
};

export default reviewRouter;
