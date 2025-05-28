import Layout from '@/layout'
import i18n from '../../../i18n/i18n'

const taskRouter = {
  path: '/task',
  component: Layout,
  redirect: 'noRedirect',
  name: 'task',
  meta: {
    title: i18n.t('common.task'),
    icon: 'task-management'
  },
  children: [
    {
      path: '/tasks',
      component: () => import('@/views/task/index'),
      name: 'tasks',
      meta: {title: i18n.t('task.tasks'), icon: 'createtask'}
    },
    {
      path: '/task-log',
      component: () => import('@/views/task/index'),
      name: 'task-log',
      meta: {title: i18n.t('task.taskLog'), icon: 'tasklog'}
    }
  ]
}
export default taskRouter
