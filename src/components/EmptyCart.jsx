function EmptyCart() {
    return (
        <>
            <div className="emptyCart">
                <h1 style={{ color: "#c73b0f" }}>Your Cart (0)</h1>
                <img
                    src="../src/assets/images/illustration-empty-cart.svg"
                    alt="cake"
                />
                <p style={{ color: "#ad8a86" }}>Your added items will appear here</p>
            </div>
        </>
    )
}

export default EmptyCart