
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { COLORS } from "@/lib/constants";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-3 px-4 md:px-8 bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/e55f862f-c9a4-430c-a2e7-0aca8a456aa0.png" 
                alt="Taleem Logo" 
                className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold" style={{ color: COLORS.primary }}>Taleem</span>
          </Link>
        </div>

        {!isMobile && (
          <div className="flex-1 px-12 max-w-xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        )}

        {isMobile ? (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/courses" className="hover:text-blue-600 font-medium">Courses</Link>
            <Link to="/teach" className="hover:text-blue-600 font-medium">Teach on Taleem</Link>
            <Link to="/signup">
              <Button variant="outline" className="mr-2">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button style={{ backgroundColor: COLORS.primary }}>Log In</Button>
            </Link>
          </div>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="mt-4 py-3 border-t border-gray-200">
          <div className="relative mb-3">
            <Input
              type="search"
              placeholder="Search for courses..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          <div className="flex flex-col space-y-3">
            <Link to="/courses" className="hover:text-blue-600 font-medium py-2">Courses</Link>
            <Link to="/teach" className="hover:text-blue-600 font-medium py-2">Teach on Taleem</Link>
            <Link to="/signup" className="py-2">
              <Button variant="outline" className="w-full">Sign Up</Button>
            </Link>
            <Link to="/login" className="py-2">
              <Button style={{ backgroundColor: COLORS.primary }} className="w-full">Log In</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
