import React from 'react';
import Item from '../item/Item';
import './Basket.css';

const Basket = ({ title, items, onAddToBasket, onRemoveFromBasket, onAddToStore, textInput }) => {
  return (
    <div className='basket'>
      <div className='basket-header'>
        <div className='basket-title'>
            {title}
        </div>
        { 
          onAddToBasket !== undefined && 
          <div className='actions'>
              <input type='input' name='itemName' ref={textInput}></input>
              <button type='button' onClick={onAddToStore}>Add</button>
          </div>
        }
      </div>
      
      <div className='basket-body'>
        {items.map(item => 
          onAddToBasket !== undefined && <Item action={() => onAddToBasket(item)} key={item.id} title={item.name} description={item.description}></Item>
        )}
        {items.map(item => 
          onRemoveFromBasket !== undefined && <Item action={() => onRemoveFromBasket(item)} key={item.id} title={item.name} description={item.description}></Item>
        )}
      </div>
    </div>
  );
};

export default Basket;