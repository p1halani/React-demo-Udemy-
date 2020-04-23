import React from 'react';

const ContactCard = ({contact}) => (
    <div className='card' style={{width: '400px', padding: '10px', margin: '10px'}}>
        <div className='row'>
            <div className='col-md-4'>
                <img src={contact.picture} alt={contact.name}
                style={{width:'100px', height:'100px'}}
                className='card-img' />
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='title'>{contact.name}</h5>
                    <div className='card-text'>{contact.email}</div>
                    <div className='card-text'>{contact.phone}</div>
                </div>  
            </div>


        </div>
    </div>
);

export default ContactCard;