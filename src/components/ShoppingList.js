import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("Zote")

  function valueChange (event){
    setSelectedCategory(event.target.value);
};

const displayCategory = items.filter((item)=> {
if (selectedCategory === "Zote") return true;
return selectedCategory === item.category;
})
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="Filter" onChange={valueChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
