import React, { useState} from "react";

function Item({ name, category }) {

  const [addItem, setAddItem] = useState(false);

  function handleClick(){
    setAddItem((addItem)=> !addItem)
  }
  const cart = addItem? "in-cart": "";
  const addRemove = addItem? "Remove From Cart": "Add to Cart";
  

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addRemove}</button>
    </li>
  );
}

export default Item;
