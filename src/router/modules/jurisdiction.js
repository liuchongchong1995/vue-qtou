/**
 * 权限
 */
 import Container from '@/containers';

 const jurisdictionRouter = {
    path: '/jurisdiction',
    component: Container,
    redirect: 'noRedirect',
    name: '权限',
    children: [
        {
            path: '',
            component: () => import('@/views/jurisdiction/index'),
            name: 'jurisdiction',
            meta: {
                title: '权限'
                // icon: 'dashboard',
                
            }
        }
    ]
 };
 
 export default jurisdictionRouter;
 