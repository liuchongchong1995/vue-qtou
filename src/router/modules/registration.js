/**
 * 登记表管理
 */
import Container from '@/containers';

const registrationRouter = {
    path: '/registration',
    component: Container,
    redirect: 'noRedirect',
    name: '登记表管理',
    meta: {
        title: '登记表管理',
        // icon: 'documentation',
        roles: ['3']
    },
    children: [
        {
            path: '',
            component: () => import('@/views/registration/index'),
            name: '登记表管理',
            meta: {
                title: '登记表管理',
                roles: ['3']
            }
        },
        {
            path: 'preview',
            component: () => import('@/views/registration/preview'),
            name: '登记信息',
            hidden: true,
            meta: {
                keepAlive:true,
                title: '登记信息',
                roles: ['3']
            }
        }
    ]
};

export default registrationRouter;
