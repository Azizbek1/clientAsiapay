import React from 'react';
import { Outlet } from 'react-router-dom';

import "./main.scss"

const Adminmain = () => {
    return (
        <div className="container-fluid">
            <div className="main">
                <h1 className="alert alert-primary">Главная страница</h1>
                <Outlet/>
            </div>
        </div>
    );
}

export default Adminmain;
