import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleCartItem() {
    setInCart((inCart) => !inCart);
  }

  const itemClass = inCart ? "in-cart" : "";

  const cartStatus = inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartItem} className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;
