/**
 * 公共信息
 */
import Container from '@/containers';

const publicinformationRouter = {
    path: '/publicinformation',
    component: Container,
    redirect: 'noRedirect',
    name: '公共信息',
    meta: {
        title: '公共信息',
        // icon: 'documentation',
        roles: ['1','2','3']
    },
    children: [
        {
            path: '',
            component: () => import('@/views/publicinformation/index'),
            name: '培训专区',
            meta: {
                title: '培训专区',
                type: 1,
                roles: ['2','3']
            }
        },
        {
            path: 'information',
            component: () => import('@/views/publicinformation/index'),
            name: '综合信息',
            meta: {
                title: '综合信息',
                type: 2,
                roles: ['2','3']
            }
        },
        {
            path: 'notice',
            component: () => import('@/views/publicinformation/index'),
            name: '通知公告',
            meta: {
                title: '通知公告',
                type: 3,
                roles: ['2','3']
            }
        },
        {
            path: 'cont',
            component: () => import('@/views/publicinformation/index'),
            name: '内容管理',
            meta: {
                title: '内容管理',
                type: '',
                roles: ['1']
            }
        },
        {
            path: 'addcontent',
            component: () => import('@/views/publicinformation/addcontent'),
            name: '发布内容',
            hidden: true,
            meta: {
                title: '发布内容',
                roles: ['1']
            },
        },
        {
            path: 'preview',
            component: () => import('@/views/publicinformation/preview'),
            name: '查看内容',
            hidden: true,
            meta: {
                title: '查看内容',
                roles: ['2','3']
            }
        }
    ]
};

export default publicinformationRouter;