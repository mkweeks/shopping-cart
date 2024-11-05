import React from "react"

function ConfirmModal(props) {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div style={{ lineHeight: "0.4rem", width: "95%" }}>
                        <img src="../src/assets/images/icon-order-confirmed.svg"></img><h2 style={{ fontWeight: "900" }}>Order Confirmed</h2>
                        <p>We hope you enjoy your food!</p>
                    </div>

                    <ul className="listItem" style={{ backgroundColor: "#fcf8f5" }}>
                        {props.cartItems.map(((cartItem, index) =>
                            <React.Fragment key={cartItem.name}>
                                <li style={{
                                    padding: "0.5rem", fontSize: "0.7rem", display: "flex", alignItems: "center", height: "50px", width: "90%", gap: '12px'
                                }}>
                                    <img style={{ width: "50px", height: "50px", borderRadius: "5px" }} src={`${cartItem.image.thumbnail}`} />
                                    <div style={{width: "120px"}}>
                                        <p>{cartItem.name} </p>
                                        <p style={{ color: "#c73b0f" }}>{cartItem.quantity}x @{(cartItem.price).toFixed(2)}</p>
                                    </div>
                                    <p>${(cartItem.quantity * cartItem.price).toFixed(2)}</p>
                                </li>
                            </React.Fragment>
                        ))}

                        <div className="total">
                            <p>Order Total</p>
                            <h3>$
                                {props.cartItems.reduce(
                                    (total, cartItem) => total + cartItem.price * cartItem.quantity,
                                    0
                                ).toFixed(2)}
                            </h3>
                        </div>
                    </ul>
                    <button onClick={props.newOrder} className="confirm">Start New Order</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmModal