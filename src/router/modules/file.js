/**
 * 文档
 */
 import Container from '@/containers';

 const fileRouter = {
    path: '/file',
    component: Container,
    redirect: 'noRedirect',
    name: '文档',
    children: [
      {
            path: '',
            component: () => import('@/views/file/index'),
            name: 'file',
            meta: {
                title: '文档'
            }
      }
    ]
 };
 
 export default fileRouter;
 