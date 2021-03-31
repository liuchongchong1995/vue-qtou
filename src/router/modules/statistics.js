/**
 * 寻呼管理
 */
import Container from '@/containers';

const statisticsRouter = {
    path: '/statistics',
    component: Container,
    redirect: 'noRedirect',
    name: '数据统计',
    meta: {
        title: '数据统计',
        // icon: 'attestation',
        roles: ['1','2']
    },
    children: [
        {
            path: '/statistics/index',
            component: () => import('@/views/statistics/index'),
            name: '数据统计',
            meta: {
                title: '数据统计',
                roles: ['1','2']
            }
        },
        {
            path: '/statistics/delegate',
                component: () => import('@/views/statistics/delegate'),
            name: '代表/委员结构统计',
            meta: {
            title: '代表/委员结构统计',
                roles: ['1','2']
            }
        }
    ]
};

export default statisticsRouter;
