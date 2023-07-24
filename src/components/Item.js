import React from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

 // Event handler for adding/removing item from cart
 const handleAddToCart = () => {
  setInCart((prevInCart) => !prevInCart);
};

return (
  <li className={inCart ? "in-cart" : ""}>
    <span>{name}</span>
    <span className="category">{category}</span>
    {/* Button text changes based on inCart state */}
    <button className="add" onClick={handleAddToCart}>
      {inCart ? "Remove From Cart" : "Add to Cart"}
    </button>
  </li>
);
}  

export default Item;
