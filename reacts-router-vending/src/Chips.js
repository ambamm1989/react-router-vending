import React, { useState } from 'react';
import chipsImg from './Chips.png';
import { Link } from 'react-router-dom';
import Message from './Message';
import './Chips.css';

function Chips() {

    const [bags, setBags] = useState([]);

    function handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setBags(prevBags => [...prevBags, { x, y }]);
    }

    const b = bags.map((bag, index) => {
        return (
          <img 
            key={index} 
            src={chipsImg} 
            alt='Bay of Michael Chips' 
            className='bag'
            style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
          />
        );
      });
      
    return (
        <div className='chips'>
            <Message>
                <h1 className='bags-eaten'>bags eaten: {bags.length}</h1>
                <button onClick={handleClick} className='nom-button'>nom nom nom</button>
                <h1>
                    <Link to='/'>go back</Link>
                </h1>
            </Message>
            {b}
        </div>
    );
}

export default Chips;
