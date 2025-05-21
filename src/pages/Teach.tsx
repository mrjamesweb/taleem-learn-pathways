import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  { 
    src: "https://images.unsplash.com/photo-1509062522106-8a044c093c53", 
    alt: "Students learning in a classroom setting", 
    description: "Interactive lessons designed for young, curious minds." 
  },
  { 
    src: "https://images.unsplash.com/photo-1509228468518-180dd486f085", 
    alt: "Chalkboard with colorful mathematical equations", 
    description: "Discover the fun in mathematics with engaging problems and activities." 
  },
  { 
    src: "https://images.unsplash.com/photo-1491841550275-501afe219db5", 
    alt: "Children sitting together reading books", 
    description: "Explore the world of English and literature through captivating stories." 
  },
  { 
    src: "https://images.unsplash.com/photo-1574680096145-f84a884aa9d6", 
    alt: "Young student excited about a science experiment", 
    description: "Ignite passion for science with hands-on experiments and discovery." 
  },
];

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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Instructors collaborating with students"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Statistics section removed */}
        
        {/* New Carousel Section for Academic Subjects */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Inspire Across Diverse Subjects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your expertise in a variety of fields and help students discover their passion.
            </p>
          </div>
          <Carousel
            className="w-full max-w-3xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-4">
                        <p className="text-gray-700 text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 ml-[-10px] md:ml-[-40px] z-10 bg-white/80 hover:bg-white text-primary" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 mr-[-10px] md:mr-[-40px] z-10 bg-white/80 hover:bg-white text-primary" />
          </Carousel>
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
