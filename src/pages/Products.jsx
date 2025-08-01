import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products as productData } from "../data/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "2rem auto",
        padding: "0 1rem",
       
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2rem",
          color: "rgb(187, 163, 118)",
          textShadow:"1px 10px 3px rgb(204, 195, 172,0.5)"
        }}
      >
        Wardrobe
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "4.4rem"
        }}
      >
        {products.map(product => (
          <div
            key={product.id}
            style={{
              boxShadow:"16px 20px 19px 2px rgb(112, 50, 194,0.4)",
              color: "whitesmoke",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgb(173, 149, 116,0.2)",
              transition: "box-shadow 0.3s ease"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "90%",
                marginTop: "12px",
                marginLeft: "15px",
                height: "250px",
                objectFit: "fit",
                border: "1px solid white"
              }}
            />
            <div
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}
            >
              <h5
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem"
                }}
              >
                {product.name}
              </h5>
              <p
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem"
                }}
              >
                ₹{product.price}
              </p>
              <Link
                to={`/products/${product.id}`}
                style={{
                  marginTop: "auto",
                  textAlign: "center",
                  padding: "0.5rem 1rem",
                  backgroundColor: "rgb(226, 226, 226)",
                  color: "black",
                  fontWeight:"bolder",
                  borderRadius: "50px",
                  border: "1px solid rgb(235, 144, 7)",
                  textDecoration: "none"
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
