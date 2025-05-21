import Layout from '@/layout'

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: 'noRedirect',
  name: 'goods',
  meta: { title: '商品', icon: 'product' },
  children: [
    {
      path: 'product',
      name: 'product',
      component: () => import('@/views/goods/product/index'),
      meta: {title: '商品列表', icon: 'product-list'}
    },
    {
      path: 'addProduct',
      name: 'addProduct',
      component: () => import('@/views/goods/product/add'),
      meta: {title: '添加商品', icon: 'product-add'}
    },
    {
      path: 'updateProduct',
      name: 'updateProduct',
      component: () => import('@/views/goods/product/update'),
      meta: {title: '修改商品', icon: 'product-add'},
      hidden: true
    },
    {
      path: 'productCate',
      name: 'productCate',
      component: () => import('@/views/goods/productCate/index'),
      meta: {title: '商品分类', icon: 'product-cate'}
    },
    {
      path: 'addProductCate',
      name: 'addProductCate',
      component: () => import('@/views/goods/productCate/add'),
      meta: {title: '添加商品分类'},
      hidden: true
    },
    {
      path: 'updateProductCate',
      name: 'updateProductCate',
      component: () => import('@/views/goods/productCate/update'),
      meta: {title: '修改商品分类'},
      hidden: true
    },
    {
      path: 'productAttr',
      name: 'productAttr',
      component: () => import('@/views/goods/productAttr/index'),
      meta: {title: '商品类型', icon: 'product-attr'}
    },
    {
      path: 'productAttrList',
      name: 'productAttrList',
      component: () => import('@/views/goods/productAttr/productAttrList'),
      meta: {title: '商品属性列表'},
      hidden: true
    },
    {
      path: 'addProductAttr',
      name: 'addProductAttr',
      component: () => import('@/views/goods/productAttr/addProductAttr'),
      meta: {title: '添加商品属性'},
      hidden: true
    },
    {
      path: 'updateProductAttr',
      name: 'updateProductAttr',
      component: () => import('@/views/goods/productAttr/updateProductAttr'),
      meta: {title: '修改商品属性'},
      hidden: true
    },
    {
      path: 'brand',
      name: 'brand',
      component: () => import('@/views/goods/brand/index'),
      meta: {title: '品牌管理', icon: 'product-brand'}
    },
    {
      path: 'addBrand',
      name: 'addBrand',
      component: () => import('@/views/goods/brand/add'),
      meta: {title: '添加品牌'},
      hidden: true
    },
    {
      path: 'updateBrand',
      name: 'updateBrand',
      component: () => import('@/views/goods/brand/update'),
      meta: {title: '编辑品牌'},
      hidden: true
    }
  ]
}
export default goodsRouter
