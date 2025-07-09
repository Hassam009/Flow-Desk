import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Github, Facebook, EyeOff, Eye } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-sm p-6 border border-gray-200 shadow-lg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-900">Login</h2>
          <p className="text-sm text-gray-500">Enter your email and password below to log into your account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
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

          <Button className="w-full bg-black text-white hover:bg-gray-900">
            Login
          </Button>

          <div className="flex items-center justify-center gap-2">
            <Separator className="w-full" />
            <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
            <Separator className="w-full" />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="w-full">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="w-full">
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </div>
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
