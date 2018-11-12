import Main from '../view/main/Main';
import Login from '../view/login/Login';
import NotFound from '../view/notFound/NotFound'

export const routerConfig = [
    {
        path: '/',
        component: Main,
        auth: true
    },
    {
        path: '/main',
        component: Main,
        auth: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: NotFound
    }
]

