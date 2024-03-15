import React, { useState } from 'react';

function ShoppingList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div>
      <input id="shopping-input" type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
      <button id="clear-list" onClick={handleClearList}>Clear</button>
      <ul>
        {items.map((item) => (
          <li key={`item-${item}`}>
            {item}
            <button id={`remove-${item}`} onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
