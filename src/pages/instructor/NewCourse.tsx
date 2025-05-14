
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { EDUCATION_TYPES, COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";

const NewCourse = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTab, setCurrentTab] = useState("basics");
  
  // Form state
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    educationType: "",
    category: "",
    price: "",
    thumbnail: null as File | null,
    sections: [{ title: "Section 1", lessons: [{ title: "", video: null as File | null }] }]
  });
  
  const handleInputChange = (field: string, value: string) => {
    setCourseData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCourseData(prev => ({ ...prev, thumbnail: file }));
    }
  };
  
  const addSection = () => {
    setCourseData(prev => ({
      ...prev,
      sections: [...prev.sections, { 
        title: `Section ${prev.sections.length + 1}`, 
        lessons: [{ title: "", video: null }] 
      }]
    }));
  };
  
  const updateSectionTitle = (index: number, title: string) => {
    setCourseData(prev => {
      const sections = [...prev.sections];
      sections[index].title = title;
      return { ...prev, sections };
    });
  };
  
  const addLesson = (sectionIndex: number) => {
    setCourseData(prev => {
      const sections = [...prev.sections];
      sections[sectionIndex].lessons.push({ title: "", video: null });
      return { ...prev, sections };
    });
  };
  
  const updateLessonTitle = (sectionIndex: number, lessonIndex: number, title: string) => {
    setCourseData(prev => {
      const sections = [...prev.sections];
      sections[sectionIndex].lessons[lessonIndex].title = title;
      return { ...prev, sections };
    });
  };
  
  const handleVideoChange = (sectionIndex: number, lessonIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCourseData(prev => {
        const sections = [...prev.sections];
        sections[sectionIndex].lessons[lessonIndex].video = file;
        return { ...prev, sections };
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Course created",
        description: "Your course has been created successfully!",
      });
      navigate("/instructor/dashboard");
    }, 1500);
  };
  
  const categories = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"];
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8" style={{ color: COLORS.primary }}>
          Create New Course
        </h1>
        
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="mb-6">
            <TabsTrigger value="basics" className="flex-1 py-3">
              Course Basics
            </TabsTrigger>
            <TabsTrigger value="curriculum" className="flex-1 py-3">
              Curriculum
            </TabsTrigger>
            <TabsTrigger value="pricing" className="flex-1 py-3">
              Pricing
            </TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleSubmit}>
            <TabsContent value="basics" className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="title">Course Title</Label>
                  <Input
                    id="title"
                    value={courseData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="e.g., Complete Mathematics for O Level Students"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Course Description</Label>
                  <Textarea
                    id="description"
                    value={courseData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe what students will learn in this course"
                    rows={5}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="education-type">Education System</Label>
                  <Select 
                    value={courseData.educationType} 
                    onValueChange={(value) => handleInputChange("educationType", value)}
                  >
                    <SelectTrigger id="education-type">
                      <SelectValue placeholder="Select education system" />
                    </SelectTrigger>
                    <SelectContent>
                      {EDUCATION_TYPES.map(type => (
                        <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={courseData.category} 
                    onValueChange={(value) => handleInputChange("category", value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="thumbnail">Course Thumbnail</Label>
                  <Input
                    id="thumbnail"
                    type="file"
                    onChange={handleThumbnailChange}
                    accept="image/*"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Recommended size: 1280x720 pixels
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={() => setCurrentTab("curriculum")}
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    Next: Curriculum
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="space-y-6">
              <div className="space-y-8">
                {courseData.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border rounded-lg p-4">
                    <div className="mb-4">
                      <Label htmlFor={`section-${sectionIndex}`}>Section Title</Label>
                      <Input
                        id={`section-${sectionIndex}`}
                        value={section.title}
                        onChange={(e) => updateSectionTitle(sectionIndex, e.target.value)}
                        placeholder="e.g., Introduction to Algebra"
                        required
                      />
                    </div>
                    
                    <div className="space-y-4 pl-4 border-l-2 border-gray-200">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="grid gap-4">
                          <div>
                            <Label htmlFor={`lesson-${sectionIndex}-${lessonIndex}`}>Lesson Title</Label>
                            <Input
                              id={`lesson-${sectionIndex}-${lessonIndex}`}
                              value={lesson.title}
                              onChange={(e) => updateLessonTitle(sectionIndex, lessonIndex, e.target.value)}
                              placeholder="e.g., Understanding Variables"
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor={`video-${sectionIndex}-${lessonIndex}`}>Video</Label>
                            <Input
                              id={`video-${sectionIndex}-${lessonIndex}`}
                              type="file"
                              onChange={(e) => handleVideoChange(sectionIndex, lessonIndex, e)}
                              accept="video/*"
                            />
                          </div>
                        </div>
                      ))}
                      
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => addLesson(sectionIndex)}
                        className="mt-2"
                      >
                        Add Lesson
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={addSection}
                >
                  Add Section
                </Button>
                
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentTab("basics")}
                  >
                    Back to Basics
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setCurrentTab("pricing")}
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    Next: Pricing
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="price">Course Price (USD)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={courseData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="pl-8"
                      placeholder="29.99"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Set a price between $0 (free) and $999.99
                  </p>
                </div>
                
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentTab("curriculum")}
                  >
                    Back to Curriculum
                  </Button>
                  <Button
                    type="submit"
                    style={{ backgroundColor: COLORS.primary }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating Course..." : "Create Course"}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </form>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default NewCourse;
