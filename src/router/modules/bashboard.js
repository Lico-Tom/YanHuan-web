import Layout from '@/layout'
import i18n from '../../../i18n/i18n'

const dashboardRouter = {
    path: 'index',
    component: () => import('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: { title: i18n.t('common.dashboard'), noCache: true }
  }
export default dashboardRouter
