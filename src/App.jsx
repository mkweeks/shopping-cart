import FoodItem from "./components/FoodItem";
import data from "../data.json";
import React, { useState } from "react";
import ConfirmModal from "./components/ConfirmModal";
import EmptyCart from "./components/EmptyCart";
import ActiveCart from "./components/ActiveCart";

function App() {
  const foodItems = data;
  const [cartItems, setCartItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeItemFromCart = (itemName) => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== itemName));
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(true)
  }

  const newOrder = () => {
    setIsModalOpen(false)
    setCartItems([])
    // location.reload()
  }

  const addItemToCart = (item, quantity) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name)

    // add item if it doesn't already exist
    if (!existingItem) {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  }

  const decrementItem = (item) => {
    setCartItems(
      cartItems.map(cartItem =>
        cartItem.name === item.name && cartItem.quantity > 1 // check if item exists and count is more than 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  }

  const incrementItem = (item) => {
    setCartItems(
      cartItems.map(cartItem =>
        cartItem.name === item.name // find cart item and increase quantity
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="heading">
            <h1>Desserts</h1>
          </div>
          <div className="desserts">
            {foodItems.map((foodItem, index) => (
              <FoodItem
                key={index}
                image={foodItem.image}
                item={foodItem}
                addItem={addItemToCart}
                incrementItem={(item) => incrementItem(item)}
                decrementItem={(item) => decrementItem(item)}
              />
            ))}
          </div>
        </div>

        {
          cartItems.length === 0 ? <EmptyCart /> :
            <ActiveCart
              cartItems={cartItems}
              removeItemFromCart={(cartItem) => removeItemFromCart(cartItem)}
              handleConfirmOrder={() => handleConfirmOrder()}
            />
        }

        {isModalOpen && (
          <ConfirmModal
            newOrder={newOrder}
            cartItems={cartItems}
          />
        )}
      </div>
    </>
  );
}

export default App;
