
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";
import { SAMPLE_COURSES, COLORS } from "@/lib/constants";
import CourseCard from "@/components/courses/CourseCard";
import PageLayout from "@/components/layout/PageLayout";

const Courses = () => {
  const [searchParams] = useSearchParams();
  const initialEducationType = searchParams.get("type") || "metric";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState(SAMPLE_COURSES);
  const [educationType, setEducationType] = useState(initialEducationType);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  
  // Extract unique categories
  const categories = Array.from(new Set(SAMPLE_COURSES.map(course => course.category)));
  
  // Filter courses based on search term, education type, and categories
  useEffect(() => {
    let filtered = SAMPLE_COURSES;
    
    // Filter by education type
    filtered = filtered.filter(course => course.educationType === educationType);
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        course => 
          course.title.toLowerCase().includes(term) || 
          course.instructor.toLowerCase().includes(term)
      );
    }
    
    // Filter by categories
    if (categoryFilters.length > 0) {
      filtered = filtered.filter(course => categoryFilters.includes(course.category));
    }
    
    setCourses(filtered);
  }, [searchTerm, educationType, categoryFilters]);
  
  // Toggle category filter
  const toggleCategory = (category: string) => {
    setCategoryFilters(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-4" style={{ color: COLORS.primary }}>Education System</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="metric" 
                    checked={educationType === "metric"}
                    onCheckedChange={() => setEducationType("metric")}
                  />
                  <Label htmlFor="metric">Metric/Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="olevel" 
                    checked={educationType === "olevel"}
                    onCheckedChange={() => setEducationType("olevel")}
                  />
                  <Label htmlFor="olevel">O/A Level</Label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4" style={{ color: COLORS.primary }}>Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={category} 
                      checked={categoryFilters.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
                {educationType === "metric" ? "Metric/Intermediate" : "O/A Level"} Courses
              </h1>
              <p className="text-gray-600 mb-6">
                Find the perfect courses tailored for your education system
              </p>
              
              {/* Search bar */}
              <div className="relative max-w-md">
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
            
            {/* Course results */}
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Courses;
