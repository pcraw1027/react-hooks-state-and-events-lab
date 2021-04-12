import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleCartClick () {
    setInCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
