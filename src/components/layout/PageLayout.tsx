
import React from "react";
import NavBar from "./NavBar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 mt-16 pb-10">{children}</main>
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Taleem</h3>
              <p className="text-gray-300">Learn anytime, anywhere.</p>
              <p className="text-gray-300 mt-2">© {new Date().getFullYear()} Taleem. All rights reserved.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/courses" className="text-gray-300 hover:text-white">Courses</a></li>
                <li><a href="/teach" className="text-gray-300 hover:text-white">Become an Instructor</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <p className="text-gray-300">Email: info@taleem.com</p>
              <p className="text-gray-300">Phone: +92 123 456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
