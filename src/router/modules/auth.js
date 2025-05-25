import Layout from '@/layout'
import i18n from '../../../i18n/i18n'

const authRouter = {
  path: '/auth',
  component: Layout,
  redirect: 'noRedirect',
  name: 'auth',
  meta: { title: i18n.t('auth.auth'), icon: 'ums' },
  children: [
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/auth/user/index'),
      meta: { title: i18n.t('auth.userList'), icon: 'ums-admin' }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/auth/role/index'),
      meta: { title: i18n.t('auth.roleList'), icon: 'ums-role' }
    },
    {
      path: 'resource',
      name: 'resource',
      component: () => import('@/views/auth/resource/index'),
      meta: { title: i18n.t('auth.resourceList'), icon: 'ums-resource' }
    },
    {
      path: 'menu',
      name: 'menu',
      component: () => import('@/views/auth/menu/index'),
      meta: { title: i18n.t('auth.menuList'), icon: 'ums-menu' }
    }
  ]
}
export default authRouter
