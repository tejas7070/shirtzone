import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();
  return loggedIn ?  children : <Navigate to="/"/>;
}