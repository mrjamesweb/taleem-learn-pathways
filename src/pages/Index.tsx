import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";

const Index = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Taleem: Learn anytime, anywhere
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Explore Affordable Metric/Intermediate and O/A Level courses designed for students in Pakistan. Start your learning journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" style={{ backgroundColor: COLORS.primary }}>
                    Start Learning
                  </Button>
                </Link>
                <Link to="/teach">
                  <Button size="lg" variant="outline">
                    Become an Instructor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Student learning with a laptop"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 rounded-full h-3 w-3"></div>
                  <span className="text-sm font-medium">5,000+ Students Learning Now</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-gray-50 rounded-xl my-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Why Choose Taleem?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Taleem is Pakistan's first dedicated cheapest Mass Open Online Course (MOOC) platform focused on affordable exam prep for Metric/Inter and O/A Level students. Our mission is to give students access to top-quality courses from top-quality instructors from all over Pakistan at an optimal cost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Content</h3>
              <p className="text-gray-600">
                Course created specifically for Metric/Intermediate and O/A Level students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn at Your Own Pace</h3>
              <p className="text-gray-600">
                Access course materials anytime, anywhere, and learn at a pace that suits your schedule.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from experienced teachers and professionals who understand the Pakistani curriculum.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 my-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl text-white">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-lg mb-8">
              Join thousands of students already learning with Taleem. 
              Get access to quality education designed specifically for your curriculum.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Teach on Taleem section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Person teaching online"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Become an Instructor
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Share your knowledge with students across Pakistan and earn passive income. Create courses for Metric/Intermediate and/or O/A Level students and help shape the future of millions.
              </p>
              <Link to="/teach">
                <Button size="lg" style={{ backgroundColor: COLORS.primary }}>
                  Start Teaching
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Index;
