import React from 'react';
import '../index.css';
import './Header.css';

function Header() {
    let timeOfDay = '';
    const date = new Date();
    const currentTime = date.getHours();

    (currentTime < 12) ? (timeOfDay = 'morning') : (timeOfDay = 'night');


    return (
        <div>
            <h1 className={'background'}>Hello There!</h1>
            <h2>{`Good ${timeOfDay}`}</h2>
        </div>
    )
};

export default Header;