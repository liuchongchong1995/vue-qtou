/**
 * 寻呼管理
 */
import Container from '@/containers';

const pagingRouter = {
    path: '/paging',
    component: Container,
    redirect: 'noRedirect',
    name: '寻呼管理',
    meta: {
        title: '寻呼管理',
        // icon: 'documentation',
        roles: ['1','2','3']
    },
    children: [
        {
            path: '',
            component: () => import('@/views/paging/index'),
            name: '已发寻呼',
            meta: {
                title: '已发寻呼',
                type: 1,
                roles: ['1','2','3']
            }
        },
        {
            path: 'recvList',
            component: () => import('@/views/paging/index'),
            name: '已收寻呼',
            meta: {
                title: '已收寻呼',
                type: 2,
                roles: ['1','2','3']
            }
        },
        {
            path: 'preview',
            component: () => import('@/views/paging/preview'),
            name: '发布寻呼',
            hidden: true,
            meta: {
                title: '发布寻呼',
                roles: ['1','2','3']
            }
        }
    ]
};

export default pagingRouter;
