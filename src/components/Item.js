import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to add/remove item from the cart
  const handleAddToCart = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
