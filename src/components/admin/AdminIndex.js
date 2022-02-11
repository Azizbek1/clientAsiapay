import React from 'react';
import Adminfooter from './adminComponents/utils/adminFooter/adminFooter';
import AdminNavbar from "./adminComponents/utils/adminNavbar/AdminNavbar"
import Adminsidebar from './adminComponents/utils/adminSidebar/adminSidebar';
import AdminMain from './adminComponents/adminMain/AdminMain';
const AdminIndex = () => {
    return (
        <div>
            <Adminsidebar/>
            <AdminNavbar/>
            <AdminMain/>
            <Adminfooter/>
        </div>
    );
}

export default AdminIndex;
