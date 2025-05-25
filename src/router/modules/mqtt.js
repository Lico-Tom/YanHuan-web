import Layout from '@/layout'
import i18n from '../../../i18n/i18n'
import mqtt from "@/views/mqtt/index.vue";

const mqttRouter = {
  path: '/mqtt',
  component: Layout,
  redirect: 'noRedirect',
  name: 'mqtt',
  meta: {
    title: i18n.t('common.mqtt'),
    icon: 'el-icon-cloudy'
  },
  children: [
    {
      path: '/mqtt',
      component: () => import('@/views/mqtt/index'),
      name: 'mqtt',
      meta: {title: i18n.t('mqtt.mqtts'), icon: 'mqtt'}
    },
    {
      path: '/mqtt/pub',
      component: () => import('@/views/mqtt/mqtt-pub/index'),
      name: 'pub',
      meta: {title: i18n.t('mqtt.pub'), icon: 'publish'}
    },
    {
      path: '/mqtt/sub',
      component: () => import('@/views/mqtt/mqtt-sub/index'),
      name: 'sub',
      meta: {title: i18n.t('mqtt.sub'), icon: 'subscribe'}
    },
    {
      path: '/mqtt/history',
      component: () => import('@/views/mqtt/mqtt-history/index'),
      name: 'history',
      meta: {title: i18n.t('mqtt.history'), icon: 'history'}
    }
  ]
}
export default mqttRouter
