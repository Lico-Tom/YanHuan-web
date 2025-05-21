import Layout from '@/layout'

const authRouter = {
  path: '/auth',
  component: Layout,
  redirect: 'noRedirect',
  name: 'auth',
  meta: { title: '权限', icon: 'ums' },
  children: [
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/auth/user/index'),
      meta: { title: '用户列表', icon: 'ums-admin' }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/auth/role/index'),
      meta: { title: '角色列表', icon: 'ums-role' }
    },
    {
      path: 'resource',
      name: 'resource',
      component: () => import('@/views/auth/resource/index'),
      meta: { title: '资源列表', icon: 'ums-resource' }
    },
    {
      path: 'menu',
      name: 'menu',
      component: () => import('@/views/auth/menu/index'),
      meta: { title: '菜单列表', icon: 'ums-menu' }
    }
  ]
}
export default authRouter
