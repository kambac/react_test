import React from 'react';
import ContactCard from './ContactCard';

const Contacts = () => {
    return (
        <div>
            <ContactCard
                name={'Mr. Butter'}
                imgSrc={'http://placekitten.com/300/200'}
                telephone={'123456123'}
                email={'email@wp.pl'}
            />
            <ContactCard
                name={'Mr. Butter'}
                imgSrc={'http://placekitten.com/300/200'}
                telephone={'123456123'}
                email={'email@wp.pl'}
            />
            <ContactCard
                name={'Mr. Butter'}
                imgSrc={'http://placekitten.com/300/200'}
                telephone={'123456123'}
                email={'email@wp.pl'}
            />
        </div>
    )
};

export default Contacts;