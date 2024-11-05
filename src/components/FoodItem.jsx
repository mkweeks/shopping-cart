import { useState } from "react";

function FoodItem(props) {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleHandler = () => {
    setAdded(!added);
    props.addItem(props.item, quantity)
  };

  const decrement = (e) => {
    e.stopPropagation(); // prevents click action from bubbling up to the parent component 
    props.decrementItem(props.item)

    // reduce item in cart only if item is in cart
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  };

  const increment = (e) => {
    e.stopPropagation();
    props.incrementItem(props.item)
    setQuantity(quantity + 1)
  };

  return (
    <>
      <div className="container">
        <img src={props.image.desktop} alt={props.item.name} className="dessert-img" />
        <button className="addtocart" onFocus={toggleHandler} onBlur={() => setAdded(!added)} >
          {added ? (
            <div className="quantity">
              {
                <img
                  src="../src/assets/images/icon-decrement-quantity.svg"
                  alt="decrement"
                  onClick={decrement}
                />
              }
              {quantity}

              <img
                src="../src/assets/images/icon-increment-quantity.svg"
                alt="increment"
                onClick={increment}
              />
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="../src/assets/images/icon-add-to-cart.svg"
                alt="Cart"
              />
              <span style={{ marginLeft: "8px" }}>Add to Cart</span>
            </div>
          )}
        </button>

        < div style={{lineHeight: "0.5rem", marginTop: "0.5rem"}}>
          <p style={{ color: "#ad8a86" }}>{props.item.category}</p>
          <h3>{props.item.name}</h3>
          <p style={{ color: "#c73b0f" }}>${(props.item.price).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
