
import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';

import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <Navbar/>
            <Slider/>
        </div>
    );
}

export default Header;
