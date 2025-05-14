
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Logged in successfully",
        description: `Welcome back!`,
      });
      
      // Navigate based on user role
      if (role === "student") {
        navigate("/student/courses");
      } else {
        navigate("/instructor/dashboard");
      }
    }, 1500);
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: COLORS.primary }}>
          Log in to Taleem
        </h1>
        
        <Card className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter your password" 
                  required 
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="role" checked={role === "instructor"} onCheckedChange={(checked) => {
                  setRole(checked ? "instructor" : "student");
                }} />
                <Label htmlFor="role" className="text-sm font-normal">
                  I am an instructor
                </Label>
              </div>
              
              <div className="flex justify-end">
                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                style={{ backgroundColor: COLORS.primary }}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Login;
