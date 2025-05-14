
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, role: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: `You have signed up as a ${role}. Welcome to Taleem!`,
      });
      
      // Navigate based on user role
      if (role === "student") {
        navigate("/student/education-type");
      } else {
        navigate("/instructor/dashboard");
      }
    }, 1500);
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: COLORS.primary }}>
          Join Taleem
        </h1>
        
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="student">As a Student</TabsTrigger>
            <TabsTrigger value="instructor">As an Instructor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="student">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">Create Student Account</h2>
              <form onSubmit={(e) => handleSubmit(e, "student")}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="student-name">Full Name</Label>
                    <Input id="student-name" placeholder="Enter your full name" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="student-email">Email</Label>
                    <Input id="student-email" type="email" placeholder="Enter your email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="student-password">Password</Label>
                    <Input id="student-password" type="password" placeholder="Create a password" required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    style={{ backgroundColor: COLORS.primary }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Sign Up"}
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
                  </p>
                </div>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="instructor">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">Create Instructor Account</h2>
              <form onSubmit={(e) => handleSubmit(e, "instructor")}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="instructor-name">Full Name</Label>
                    <Input id="instructor-name" placeholder="Enter your full name" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="instructor-email">Email</Label>
                    <Input id="instructor-email" type="email" placeholder="Enter your email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="instructor-password">Password</Label>
                    <Input id="instructor-password" type="password" placeholder="Create a password" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="instructor-specialty">Specialty/Subject</Label>
                    <Input id="instructor-specialty" placeholder="e.g., Mathematics, Physics" required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    style={{ backgroundColor: COLORS.primary }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Sign Up as Instructor"}
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
                  </p>
                </div>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default SignUp;
