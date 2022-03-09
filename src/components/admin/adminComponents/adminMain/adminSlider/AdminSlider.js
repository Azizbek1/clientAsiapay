import React from 'react';
import { Outlet } from 'react-router-dom';

const Adminslider = () => {
    return (
        <div>
            <h2 className="text-center">Основной слайдер</h2>
            <Outlet />
        </div>
    );
}

export default Adminslider;
