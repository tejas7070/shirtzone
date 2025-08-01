import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
    if(!product) return <p>PRODUCT NOT FOUND !!!</p>

    return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        display: "flex",
        gap: "5rem",
        padding: "0 1rem"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ boxShadow:"15px 15px 15px 1px rgb(212, 164, 32,0.4)",width: "50%", objectFit: "cover", borderRadius: "8px", border: "2px solid rgb(131, 131, 131)" }}
      />
      <div>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "whitesmoke" }}>{product.name}</h2>
        <p style={{fontSize: "1rem", color: "whitesmoke", fontWeight:"bolder"}}>DESCRIPTION:</p>
        <p style={{ marginBottom: "0.9rem", color: "whitesmoke", opacity: "0.6",fontFamily:"cursive" }}>{product.description}</p>
        <h4 style={{ marginBottom: "1.5rem", color: "whitesmoke" }}>₹{product.price}</h4>
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(43, 4, 150)",
            fontWeight:"bolder",
            fontSize:"Large",
            border: "1px solid gold",
            borderRadius: "50px",
            boxShadow:"5px 5px 9px 4px rgb(212, 164, 32,0.4)",
            cursor: "pointer"
          }}
          
        >
          Add to Cart
        </button>
        
      </div>
    </div>
  );
}