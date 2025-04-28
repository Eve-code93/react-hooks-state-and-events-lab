import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler to update the selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on selected category
  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
