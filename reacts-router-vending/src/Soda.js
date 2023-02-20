import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import sodaImg from './Soda.png';
import './Soda.css';

function Soda() {
    return (
        <div className='Soda'>
            <img src={sodaImg} alt='pop can' />
            <Message>
                <h1>Yaahhh Better</h1>
                <h1><Link to='/'>Go Back</Link></h1>
            </Message>
            <img src={sodaImg} alt='pop can' />
        </div>
    );
}

export default Soda;