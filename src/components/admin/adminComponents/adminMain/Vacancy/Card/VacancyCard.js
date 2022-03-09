import React from 'react';
import { Outlet } from 'react-router-dom';

const VacancyCard = () => {
    return (
        <div>
            <h2 className="text-center">Вакансии</h2>
            <Outlet />
        </div>
    );
}

export default VacancyCard;
