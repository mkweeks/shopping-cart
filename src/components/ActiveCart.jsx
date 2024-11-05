import React from "react"

function ActiveCart (props) {
    return (
        <>
            <div className="activeCart">
              <h1 style={{ color: "#c73b0f" }}>Your Cart ({props.cartItems.length})</h1>
                {props.cartItems.map(cartItem => (
                  <React.Fragment key={cartItem.name}>
                    <li style={{ width: "90%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div className="cartItem">
                        <h5>{cartItem.name}</h5>
                        <p style={{ wordSpacing: "0.3rem" }}><span style={{ color: "#c73b0f" }}>{cartItem.quantity}x</span> @${(cartItem.price).toFixed(2)} ${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => props.removeItemFromCart(cartItem.name)}
                        className="close"
                      >
                        &times;
                      </button>
                    </li>
                    <hr style={{ width: "90%" }} />
                  </React.Fragment>
                ))}
              <div className="total">
                <p>Order Total</p>

                <h3>${props.cartItems.reduce(
                  (total, cartItem) => total + cartItem.price * cartItem.quantity,
                  0
                ).toFixed(2)}</h3>
              </div>

              <div className="carbon">
                <img src="../src/assets/images/icon-carbon-neutral.svg" />
                <p>This is a <span style={{ fontWeight: "bold" }}>carbon-neutral</span> delivery</p>
              </div>

              <button className="confirm" onClick={() => props.handleConfirmOrder()}>Confirm Order</button>
            </div>
        </>
    )
}

export default ActiveCart