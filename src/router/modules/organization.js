/**
 * 组织
 */
 import Container from '@/containers';

 const organizationRouter = {
    path: '/organization',
    component: Container,
    redirect: 'noRedirect',
    name: '组织',
    children: [
        {
            path: '',
            component: () => import('@/views/organization/index'),
            name: 'organization',
            meta: {
                title: '组织'
                // icon: 'dashboard',
                
            }
        }
    ]
 };
 
 export default organizationRouter;
 