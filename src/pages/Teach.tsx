
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";

const Teach = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Come teach with us
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Become an instructor and change lives — including your own. Share your knowledge 
                with students across Pakistan through interactive courses.
              </p>
              <Link to="/signup?role=instructor">
                <Button size="lg" style={{ backgroundColor: COLORS.primary }}>
                  Get Started
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Teach on Taleem" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </section>
        
        {/* Statistics section */}
        <section className="py-16 bg-gray-50 rounded-xl my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold mb-2" style={{ color: COLORS.primary }}>5,000+</h2>
              <p className="text-gray-700">Active students</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2" style={{ color: COLORS.primary }}>500+</h2>
              <p className="text-gray-700">Courses available</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2" style={{ color: COLORS.primary }}>₨25M+</h2>
              <p className="text-gray-700">Instructor earnings</p>
            </div>
          </div>
        </section>
        
        {/* Benefits section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Why Teach on Taleem?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of educators and help shape the future of education in Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle style={{ color: COLORS.primary }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Expertise</h3>
              <p className="text-gray-600">
                Create courses in your area of expertise and help students excel in their studies.
              </p>
            </div>
            
            <div className="p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle style={{ color: COLORS.primary }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Revenue</h3>
              <p className="text-gray-600">
                Earn money every time a student purchases your course, with competitive revenue sharing.
              </p>
            </div>
            
            <div className="p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle style={{ color: COLORS.primary }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Teaching</h3>
              <p className="text-gray-600">
                Teach on your own schedule. Create courses once and earn repeatedly as students enroll.
              </p>
            </div>
          </div>
        </section>
        
        {/* How it works section */}
        <section className="py-16 bg-gray-50 rounded-xl my-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to start teaching on Taleem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold" style={{ color: COLORS.primary }}>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Sign up as an instructor and complete your profile with your expertise and credentials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold" style={{ color: COLORS.primary }}>2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Your Course</h3>
              <p className="text-gray-600">
                Create engaging video content, quizzes, and assignments for your students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold" style={{ color: COLORS.primary }}>3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Publish and Earn</h3>
              <p className="text-gray-600">
                Launch your course and start earning as students enroll in your classes.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 my-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl text-white">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Teaching?</h2>
            <p className="text-lg mb-8">
              Join our community of passionate educators and help students across Pakistan succeed.
            </p>
            <Link to="/signup?role=instructor">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Become an Instructor <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Teach;
