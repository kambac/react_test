import React from 'react';
import './ContactCard.css';

const ContactCard = (props) => {

    return (
        <div className={'contact-card'}>
            <img src={props.imgSrc} alt={' '}/>
            <h3>{props.name}</h3>
            <p>{props.telephone}</p>
            <p>{props.email}</p>
        </div>
    )
};


export default ContactCard;