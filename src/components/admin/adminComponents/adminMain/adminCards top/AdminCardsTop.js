import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminCardsTop = () => {
    return (
        <div>
            <h1>Основные карты Топ</h1>
            <Outlet/>
        </div>
    );
}

export default AdminCardsTop;
