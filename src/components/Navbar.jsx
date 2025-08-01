import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
const { cart } = useCart();
const { loggedIn, login, logout } = useAuth();

    return (
        <nav style={{backgroundColor:"rgb(255, 255, 255,0.2)",boxShadow:"0 0 6px white",marginTop:"10px",
        justifySelf:"center",border:"2px solid white",backdropFilter:"Blur",
        borderRadius:"50px",
        fontWeight:"bold",
        justifyItems:"start",
         padding:"10px",justifyContent:"space-between",width:"50%"}}>
            <Link style={{color:"white",padding:"50px",textDecoration:"none"}} to="/">Home</Link>
            <Link style={{color:"white",padding:"60px",textDecoration:"none"}} to="/products">Products</Link>
            <Link style={{color:"white",paddingLeft:"70px",textDecoration:"none"}} to="/carts">Cart({cart.length})</Link>
              {loggedIn ? (
            <button onClick={logout} style={{boxShadow:"5px 5px 4px 0 rgb(236, 236, 236,0.2)",fontSize:"Large",marginLeft: "250px",width:"100px" ,borderRadius:"20px",border:"1px solid white",padding:"5px",fontWeight:"bold",color:"red",backgroundColor: "rgb(255, 251, 251)"}}>Logout</button>
            ) : 
            (
                <button onClick={login} style={{boxShadow:"5px 5px 4px 0 rgb(236, 236, 236,0.2)",fontSize:"Large",marginLeft: "250px",width:"100px" ,borderRadius:"20px",border:"1px solid white",padding:"5px",fontWeight:"bold",backgroundColor:"whitesmoke",color: "rgb(45, 153, 59)"}}>Login</button>
            )}
        </nav>
    )
}  