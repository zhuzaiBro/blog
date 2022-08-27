import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/console',
        children: [{
            path: '/',
            name: 'Console',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: {
                title: '通信学生党支部',
                icon: 'el-icon-odometer',
                auth: true
            }
        }]
    },

    {
        path: '/project',
        component: Layout,
        redirect: '/project',
        meta: { title: '事务安排', icon: 'el-icon-trophy-1' },
        children: [{
                path: 'project',
                name: 'Project',
                component: () =>
                    import ('@/views/daily/index'),
                meta: { title: '日程安排', icon: 'el-icon-s-order', auth: true }
            },
            {
                path: 'project/addProject',
                name: 'AddProject',
                component: () =>
                    import ('@/views/daily/addProject/index.vue'),
                meta: { title: '添加项目', icon: 'el-icon-s-claim', auth: true }
            }
        ]
    },

    {
        path: '/life',
        component: Layout,
        redirect: '/blog/table',
        name: 'Blog',
        meta: { title: '组织生活', icon: 'el-icon-reading' },
        children: [{
                path: 'blogComment',
                name: 'BlogComment',
                component: () =>
                    import ('@/views/document/index'),
                meta: { title: '文件首页', icon: 'el-icon-s-check', auth: true }
            },
            {
                path: 'blogType',
                name: 'BlogType',
                component: () =>
                    import ('@/views/blog/blogType/index'),
                meta: { title: '文章分类', icon: 'el-icon-paperclip', auth: true }
            },
            {
                path: 'blogInfo',
                name: 'BlogInfo',
                component: () =>
                    import ('@/views/blog/blogInfo/index'),
                meta: { title: '添加文章', icon: 'el-icon-document', auth: true }
            }
        ]
    },

    {
        path: '/organizationdev',
        component: Layout,
        redirect: '/blog/table',
        name: 'Blog',
        meta: { title: '党组织发展', icon: 'el-icon-reading' },
        children: [{
                path: 'blogComment',
                name: 'BlogComment',
                component: () =>
                    import ('@/views/document/index'),
                meta: { title: '文章列表', icon: 'el-icon-s-check', auth: true }
            },
            {
                path: 'blogType',
                name: 'BlogType',
                component: () =>
                    import ('@/views/blog/blogType/index'),
                meta: { title: '文章分类', icon: 'el-icon-paperclip', auth: true }
            },
            {
                path: 'blogInfo',
                name: 'BlogInfo',
                component: () =>
                    import ('@/views/blog/blogInfo/index'),
                meta: { title: '添加文章', icon: 'el-icon-document', auth: true }
            }
        ]
    },

    {
        path: '/presondev',
        component: Layout,
        redirect: '/blog/table',
        name: 'Blog',
        meta: { title: '党员发展', icon: 'el-icon-reading' },
        children: [{
                path: 'blogComment',
                name: 'BlogComment',
                component: () =>
                    import ('@/views/document/index'),
                meta: { title: '文章列表', icon: 'el-icon-s-check', auth: true }
            },
            {
                path: 'blogType',
                name: 'BlogType',
                component: () =>
                    import ('@/views/blog/blogType/index'),
                meta: { title: '文章分类', icon: 'el-icon-paperclip', auth: true }
            },
            {
                path: 'blogInfo',
                name: 'BlogInfo',
                component: () =>
                    import ('@/views/blog/blogInfo/index'),
                meta: { title: '添加文章', icon: 'el-icon-document', auth: true }
            }
        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router