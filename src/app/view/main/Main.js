import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="main">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="container">
                    <Container />
                </div>
            </div>
        </div>
        );
    }
}