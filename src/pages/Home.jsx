import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrfyJQTm2ztpHJ1VCs4QxQEO6IKV7-cFU1A&s')`,
        // backgroundRepeat: "no-repeat",
        // // backgroundPosition: "fixed",
        // backgroundSize:"cover",
        // width:"80%",
        // height:"400px",
        margin: "3rem auto",
        textAlign: "center",
        padding: "0 1rem"
      }}
    >
       <div
  style={{
    position: "relative",
    width: "50%",
    height: "450px",
    margin: "3rem auto",
    borderRadius: "250px",
    overflow: "hidden",
    border: "5px solid white"
  }}
>
  {/* Background Image Layer */}
  <div
    style={{
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeh2rjYvR25Bv9zCfY_5ON5HrINNH2PKfMTg&s')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "brightness(30%)",
      width: "100%",
      height: "100%",
    }}
  ></div>

  {/* Text Layer */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "rgb(216, 164, 97)",
      fontFamily: "fantasy",
      fontSize: "xxx-large",
      fontWeight: "bolder",
      // backgroundColor: "rgba(0, 0, 0, 0.2)",
      padding: "1rem 2rem",
      borderRadius: "50px",
      textAlign: "center"
    }}
  >
    Premium Shirts <p style={{fontSize:"large",color:"whitesmoke"}}>exclusively made available</p>
  </div>
</div>

      <h1 style={{ textShadow:"25px 20px 9px rgb(73, 72, 72)",fontSize: "2.5rem", marginBottom: "5rem",marginTop:"50px",color:"whitesmoke"}}>
        Welcome to <b style={{color:"rgb(177, 148, 96)",textShadow:"25px 20px 9px rgb(212, 164, 32,0.4)" }}> Shirtzone</b>
      </h1>
      {/* <p style={{ fontSize: "1.2rem", marginBottom: "2rem",color:"rgb(223, 181, 67)",opacity:"0.7" }}>
        Your one-stop shop for fashion!
      </p> */}
      <Link
        to="/products"
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "rgb(36, 35, 33,0.5)",
          color: "whitesmoke",
          fontWeight:"bold",
          textDecoration: "none",
          borderRadius: "50px",
          border: "2px solid white",
          boxShadow:"5px 5px 9px 4px rgb(212, 164, 32,0.4)",
        }}
      >
        Browse Products
      </Link>
    </div>
  );
}