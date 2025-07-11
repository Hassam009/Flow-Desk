import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeOff, Eye } from "lucide-react"
import { useState } from "react"
import {useNavigate} from "react-router-dom";
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  const navigate=useNavigate();


  function handleSignup(){
    if(!email || !password || !confirmPassword){
      alert("Please fill all fields")
      return;
    }

    if(password!==confirmPassword){
      alert("Password do not match");
      return;
    }

    const existingUsers=JSON.parse(localStorage.getItem("user") || "[]");
    const userExists= existingUsers.some((user)=>user.email===email);

    if(userExists){
      alert("User already exist")
      return;
    }

    const newUser={email, password};
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created Successfully");
    navigate("/")
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-zinc-800">
      <Card className="w-full max-w-sm p-6 border border-gray-200 shadow-lg bg-white dark:bg-zinc-800">
        <CardHeader>
          <h2 className="text-xl font-semibold">Create Account</h2>
          <p className="text-sm text-gray-400">Enter your details to create a new account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="bg-white dark:bg-zinc-800"
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="bg-white dark:bg-zinc-800"
                value={password}
  onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className="bg-white dark:bg-zinc-800"
                value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
                
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-900"
          onClick={handleSignup}
          >
            Create Account
          </Button>
        </CardContent>

        <CardFooter className="text-xs text-center text-gray-500 mt-4">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-blue-600 underline mx-1">Terms of Service</a>
          and
          <a href="#" className="text-blue-600 underline ml-1">Privacy Policy</a>.
        </CardFooter>
      </Card>
    </div>
  )
}
