import React from 'react';
import ContactCard from './ContactCard';
import {CardData} from '../resources/CardData'

const Contacts = () => {
    return CardData.map((card, index) => 
        <ContactCard 
            key={index}
            name={card.name} 
            imgSrc={card.imgSrc} 
            telephone={card.telephone} 
            email={card.email}
        />
    );
};

export default Contacts;