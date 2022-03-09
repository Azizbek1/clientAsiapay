import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminBlogTitle = () => {
    return (
        <div>
            <h1 className="text-center">Заголовок</h1>
            <Outlet/>
        </div>
    );
}

export default AdminBlogTitle;
