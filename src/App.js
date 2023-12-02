import './App.css';
import React from 'react';
import Basket from './components/basket/Basket.js';

let defalutStoreItems = [
  {
    id: 1,
    name: 'Egg',
    imageUrl: 'https://example.com/item1.jpg',
    description: 'This is the description of item 1.',
  },
  {
    id: 2,
    name: 'Apple',
    imageUrl: 'https://example.com/item2.jpg',
    description: 'This is the description of item 2.',
  },
  {
    id: 3,
    name: 'Orange juice',
    imageUrl: 'https://example.com/item3.jpg',
    description: 'This is the description of item 3.',
  },
  {
    id: 4,
    name: 'Avacado',
    imageUrl: 'https://example.com/item1.jpg',
    description: 'This is the description of item 1.',
  },
  {
    id: 5,
    name: 'Limon',
    imageUrl: 'https://example.com/item2.jpg',
    description: 'This is the description of item 2.',
  },
  {
    id: 6,
    name: 'Bread',
    imageUrl: 'https://example.com/item3.jpg',
    description: 'This is the description of item 3.',
  },
];

function removeElemnt(array, element) {
  var index = array.indexOf(element)
  if (index !== -1) {
    array.splice(index, 1);
  }
};

function App() {
  const [basketItems, setBasketItems] = React.useState([]);
  const [storeItems, setStoreItems] = React.useState(defalutStoreItems);
  let textInput = React.useRef();

  const handleAddToBasket = (item) => {
    if(!basketItems.includes(item)) {
      setBasketItems((currentItems) => [...currentItems, item]);
    }
  };

  const handleRemoveFromBasket = (item) => {
    removeElemnt(basketItems, item);
    setBasketItems((currentItems) => [...currentItems]);
  };

  const handleAddtoStore = () => {
    let newItem = {name: textInput.current.value,
                id: textInput.current.value};
    if(!hasItem(storeItems, newItem)) {
      setStoreItems((storeItems) => [...storeItems, newItem]);
    }
  };

  function hasItem(arrey, inputElement) {
    console.log(arrey)
    arrey.forEach(element => {
      if(inputElement.name === element.name)
        return true;
    });
    return false;
  }

  return (
    <div className="App1">
      <header className="App-header">
        <Basket title={'Shopping List'} 
                items={basketItems}
                onRemoveFromBasket={handleRemoveFromBasket}></Basket>
        <Basket title={'Groceries'}
                items={storeItems}
                onAddToBasket={handleAddToBasket}
                onAddToStore={handleAddtoStore}
                textInput={textInput}></Basket>
      </header>
    </div>
  );
}

export default App;
