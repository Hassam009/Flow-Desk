
import { useAuth } from "@/context/AuthContext";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: JSX.Element;
}


export default function PublicRoute({ children }: PublicRouteProps) {
    const { isLoggedIn, loading } = useAuth();
  
    if (loading) {
      return <div className="text-center p-10">Loading...</div>;
    }
  
    if (isLoggedIn) {
      return <Navigate to="/dashboard" replace />;
    }
  
    return <>{children}</>;
  }