import React from 'react';
import "./adminSidebar.scss";
const Adminsidebar = () => {
    return (
        <div className="Adminside">
            <div className="Adminside__avatar">
                <img className="Adminside__avatar-img" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt="jpeg" />
                <p className="Adminside__avatar-name">Alexsandr pardayev</p>
            </div>
            <ul className="Adminside__nav">
                <li className='Adminside__item'><a href="javascriptVOid()" className="Adminside__link">Contact</a></li>
                <li className='Adminside__item'><a href="javascriptVOid()" className="Adminside__link">Contact</a></li>
                <li className='Adminside__item'><a href="javascriptVOid()" className="Adminside__link">Contact</a></li>
                <li className='Adminside__item'><a href="javascriptVOid()" className="Adminside__link">Contact</a></li>
                <li className='Adminside__item'><a href="javascriptVOid()" className="Adminside__link">Contact</a></li>
            </ul>
        </div>
    );
}

export default Adminsidebar;
