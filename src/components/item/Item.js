import React from 'react';
import './Item.css'
  
const Item = ({ action, id, title, description}) => {
    return (
      <div onClick={action} className='item'>
        <div className='item-title'>{title}</div>
      </div>
    );
};

export default Item;