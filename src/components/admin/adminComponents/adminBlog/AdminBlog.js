import React from 'react';
import {Outlet} from 'react-router-dom'

const Adminblog = () => {
    return (
        <div>
            <h1 className="alert alert-primary">Admin blog</h1>
            <Outlet/>
        </div>
    );
}

export default Adminblog;
