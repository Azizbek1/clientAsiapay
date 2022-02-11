import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

const Layout = () => {
    return (
        <div>
               <Header/>
               <Outlet />
               <Footer/>
        </div>
    );
}

export default Layout;
