
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Teach from "./pages/Teach";
import EducationType from "./pages/student/EducationType";
import Courses from "./pages/student/Courses";
import Dashboard from "./pages/instructor/Dashboard";
import NewCourse from "./pages/instructor/NewCourse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teach" element={<Teach />} />
          
          {/* Student Routes */}
          <Route path="/student/education-type" element={<EducationType />} />
          <Route path="/student/courses" element={<Courses />} />
          
          {/* Instructor Routes */}
          <Route path="/instructor/dashboard" element={<Dashboard />} />
          <Route path="/instructor/courses/new" element={<NewCourse />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
