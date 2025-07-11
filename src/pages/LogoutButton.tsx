import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/Login"); 
  }

  return (
    <Button
      onClick={handleLogout}
      className="bg-red-600 text-white hover:bg-red-700"
    >
      Logout
    </Button>
  );
}
