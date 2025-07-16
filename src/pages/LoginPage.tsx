import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Facebook, EyeOff, Eye } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();

 function handleLogin(){
    if(!email){
      alert("Please enter your email");
    return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      navigate("/Dashboard");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-zinc-800">
      <Card className="w-full max-w-sm p-6 border border-gray-200 shadow-lg bg-white dark:bg-zinc-800">
        <CardHeader>
          <h2 className="text-xl font-semibold  bg-white dark:bg-zinc-800">Login</h2>
          <p className="text-sm text-gray-400 bg-white dark:bg-zinc-800">Enter your email and password below to log into your account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input className="bg-white dark:bg-zinc-800"
             id="email" type="email" placeholder="name@example.com"
             value={email}
             onChange={e=>setEmail(e.target.value)}
              />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm bg-white dark:bg-zinc-800 hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
  onChange={e => setPassword(e.target.value)}
  className="bg-white dark:bg-zinc-800"
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

          <Button className="w-full bg-black text-white hover:bg-gray-900" 
          onClick={handleLogin}
          >
            Login
          </Button>
          <Button
  className="w-full bg-black text-white hover:bg-gray-900"
  onClick={() => navigate("/signup")}
>
  Signup
</Button>

        </CardContent>

        <CardFooter className="text-xs text-center text-gray-500 mt-4">
          By clicking login, you agree to our{" "}
          <a href="#" className="text-blue-600 underline ml-1 mr-1">Terms of Service</a>
          and
          <a href="#" className="text-blue-600 underline ml-1">Privacy Policy</a>.
        </CardFooter>
      </Card>
    </div>
  )
}
