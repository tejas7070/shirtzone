import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({ name: "", address: "" });
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    // e.preventDefault();
    alert("Order placed successfully!");
  };

    return (
      <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem", color: "whitesmoke" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Checkout</h2>

      <h4>Order Summary</h4>
      <ul style={{ listStyle: "none", padding: 0,fontWeight:"bolder" }}>
        {cart.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            --> {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ₹{total}</p>

      <form onSubmit={handleSubmit} style={{ boxShadow:"8px 15px 29px 8px rgb(212, 164, 32,0.4)",alignItems:"center",justifyItems:"center",marginTop: "2rem", border:"2px solid whitesmoke",padding:"20px",borderRadius:"50px" }}>
        <h4>Shipping Information</h4>

        <div style={{ marginBottom: "2rem"}}>
          <label>Full Name:</label><br />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "400px",
              backgroundColor:"rgb(255, 252, 252,0.2)",
              padding: "0.5rem",
              marginTop: "0.8rem",
              borderRadius: "10px",
              border: "2px solid #ccc",
              boxShadow:"3px 5px 19px 3px rgb(212, 164, 32,0.4)",
              color:"whitesmoke",
              fontSize:"Large",
              fontWeight:"bold"
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Address:</label><br />
          <textarea
            name="address"
            required
            rows="3"
            value={formData.address}
            onChange={handleChange}
            style={{
              width: "400px",
             backgroundColor:"rgb(255, 252, 252,0.2)",
              padding: "0.5rem",
              marginBottom:"15px ",
              marginTop: "0.8rem",
              boxShadow:"3px 5px 19px 3px rgb(212, 164, 32,0.4)",
              borderRadius: "10px",
              border: "2px solid #ccc",
              color:"whitesmoke",
              fontSize:"Large",
              fontWeight:"bold"
            }}
          />
        </div>

        <button 
          type="submit"
          style={{
            marginLeft:"320px",
            padding: "0.75rem 1.5rem",
            backgroundColor: "green",
            fontSize:"large",
            fontWeight:"bold",
            color: "#fff",
            border: "none",
            boxShadow:"1px 1px 15px 4px rgb(119, 230, 116,0.5)",
            borderRadius: "40px",
            cursor: "pointer"
          }}
        >
          Place Order
        </button>
      </form>
    </div>
    );
}