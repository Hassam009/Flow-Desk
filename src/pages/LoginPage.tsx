import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useAuth } from "@/context/AuthContext";

import { loginSchema, LoginSchemaType } from "@/lib/schema/loginScheme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeOff, Eye } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
const {login}=useAuth();
  const onSubmit = (data: LoginSchemaType) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (user: { email: string; password: string }) =>
        user.email === data.email && user.password === data.password
    );

    if (foundUser) {
      login(foundUser, "mockToken123");
      navigate("/Dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-zinc-800">
      <Card className="w-full max-w-sm p-6 border border-gray-200 shadow-lg bg-white dark:bg-zinc-800">
        <CardHeader>
          <h2 className="text-xl font-semibold">Login</h2>
          <p className="text-sm text-gray-400">
            Enter your email and password below to log into your account
          </p>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {/* Email */}
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
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("password")}
                  className="bg-white dark:bg-zinc-800"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}

                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900">
              Login
            </Button>

            {/* Signup Button */}
            <Button
              type="button"
              className="w-full bg-black text-white hover:bg-gray-900"
              onClick={() => navigate("/signup")}
            >
              Signup
            </Button>
          </CardContent>
        </form>

        <CardFooter className="text-xs text-center text-gray-500 mt-4">
          By clicking login, you agree to our{" "}
          <a href="#" className="text-blue-600 underline mx-1">
            Terms of Service
          </a>
          and
          <a href="#" className="text-blue-600 underline ml-1">
            Privacy Policy
          </a>
          .
        </CardFooter>
      </Card>
    </div>
  );
}
