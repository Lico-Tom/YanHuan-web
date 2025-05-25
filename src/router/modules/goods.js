import Layout from '@/layout'
import i18n from '../../../i18n/i18n'

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: 'noRedirect',
  name: 'goods',
  meta: { title: i18n.t('goods.goods'), icon: 'product' },
  children: [
    {
      path: 'product',
      name: 'product',
      component: () => import('@/views/goods/product/index'),
      meta: {title: i18n.t('goods.goodsList'), icon: 'product-list'}
    },
    {
      path: 'addProduct',
      name: 'addProduct',
      component: () => import('@/views/goods/product/add'),
      meta: {title: i18n.t('goods.goodsAdd'), icon: 'product-add'}
    },
    {
      path: 'productCate',
      name: 'productCate',
      component: () => import('@/views/goods/productCate/index'),
      meta: {title: i18n.t('goods.goodsCategory'), icon: 'product-cate'}
    },
    {
      path: 'brand',
      name: 'brand',
      component: () => import('@/views/goods/brand/index'),
      meta: {title: i18n.t('goods.brandManagement'), icon: 'product-brand'}
    }
  ]
}
export default goodsRouter
