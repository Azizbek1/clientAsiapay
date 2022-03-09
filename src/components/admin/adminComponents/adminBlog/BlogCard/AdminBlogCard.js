import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminBlogCard = () => {
    return (
        <div>
            <h3 className="text-center">Blog Card</h3>
            <Outlet/>
        </div>
    );
}

export default AdminBlogCard;
