import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem", color: "white", fontWeight: "bold" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  border: "1px solid #ddd",
                  padding: "1rem",
                  borderRadius: "6px"
                }}
              >
                <span>{item.name} - ₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "rgb(0, 0, 0)",
                    color: "red",
                    fontWeight:"bolder",
                    border: "1px solid red",
                    padding: "0.5rem 1rem",
                    borderRadius: "40px",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4 style={{ textAlign: "right", marginTop: "1.5rem" }}>Total: ₹{total}</h4>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              to="/checkout"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(89, 54, 136)",
                textDecoration: "none",
                borderRadius: "50px",
                boxShadow:"5px 5px 9px 4px rgb(212, 164, 32,0.4)",
                border:" 1.5px solid rgb(248, 166, 15)"
              }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
} 