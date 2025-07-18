import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeOff, Eye } from "lucide-react"
import { useState } from "react"
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {signupSchema, SignupSchemaType } from "@/lib/schema/signupSchema";
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  const navigate=useNavigate();

const{
  register,
  handleSubmit,
  formState:{errors},
}=useForm<SignupSchemaType>({
  resolver:zodResolver(signupSchema),
})


function handleSignup(data: SignupSchemaType) {
  const { email, password, confirmPassword } = data;
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

  const userExists = existingUsers.some((user: any) => user.email === email);
  if (userExists) {
    alert("User already exists");
    return;
  }

  const newUser = { email, password };
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  navigate("/");
}

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-zinc-800">
      <Card className="w-full max-w-sm p-6 border border-gray-200 shadow-lg bg-white dark:bg-zinc-800">
        <CardHeader>
          <h2 className="text-xl font-semibold">Create Account</h2>
          <p className="text-sm text-gray-400">Enter your details to create a new account</p>
        </CardHeader>

        <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
      id="email"
      type="email"
      placeholder="name@example.com"
      {...register("email")}
      className="bg-white dark:bg-zinc-800"
    />
    {errors.email && (
      <p className="text-red-500 text-sm">{errors.email.message}</p>
    )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="********"
        {...register("password")}
        className="bg-white dark:bg-zinc-800"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
      >
        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
    {errors.password && (
      <p className="text-red-500 text-sm">{errors.password.message}</p>
    )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
      <Input
        id="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        placeholder="********"
        {...register("confirmPassword")}
        className="bg-white dark:bg-zinc-800"
      />
      <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
      >
        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
    {errors.confirmPassword && (
      <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
    )}
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900">
    Create Account
  </Button>
  </form>

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
