import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export class Auth extends React.Component {
    render() {
        const { location, config } = this.props;
        const { pathname } = location;
        const isLogin = localStorage.getItem('myToken');

        const targetRouterConfig = config.find(v => v.path === pathname);
        if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
            const { component } = targetRouterConfig;
            return <Route exact path = { pathname }
            component = { component }
            />
        }

        if (isLogin) {
            if (pathname === '/login') {
                return <Redirect to = "/" / >
            } else {
                if (targetRouterConfig) {
                    return <Route path = { pathname }
                    component = { targetRouterConfig.component }
                    />
                } else {
                    return <Redirect to = '/404' / >
                }
            }
        } else {
            if (targetRouterConfig && targetRouterConfig.auth) {
                return <Redirect to = "/login" / >
            } else {
                return <Redirect to = "/404" / >
            }
        }
    }
}