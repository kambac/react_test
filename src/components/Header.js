import React from 'react';
import '../index.css';
import './Header.css';

function _setCurrentTime(currentTime, timeOfDay) {
    if (currentTime < 12 && currentTime > 6) {
        timeOfDay = 'morning';
    } else if (currentTime >= 12 && currentTime < 18){
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'night';
    }
}

const Header = () => {
    let timeOfDay = '';
    const date = new Date();
    const currentTime = date.getHours();

    _setCurrentTime(currentTime, timeOfDay);

    return (
        <div>
            <h1 className={'background'}>Hello There!</h1>
            <h2>{`Good ${timeOfDay}`}</h2>
        </div>
    )
};

export default Header;