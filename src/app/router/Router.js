import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { Auth } from '../auth/Auth';
import { routerConfig } from "./Routes";

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Auth config={routerConfig} />
                </Switch>
            </HashRouter>
        );
    }
}