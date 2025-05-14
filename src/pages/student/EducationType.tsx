
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EDUCATION_TYPES, COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";

const EducationType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const handleContinue = () => {
    if (selectedType) {
      navigate(`/student/courses?type=${selectedType}`);
    }
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Select Your Education System
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Choose the education system you're following to see relevant courses
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {EDUCATION_TYPES.map((type) => (
              <Card 
                key={type.id}
                className={`p-6 flex flex-col items-center cursor-pointer transition-all
                  ${selectedType === type.id 
                    ? 'border-4 border-blue-500 shadow-lg transform scale-105' 
                    : 'border hover:shadow-md'}`}
                onClick={() => setSelectedType(type.id)}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold" style={{ color: COLORS.primary }}>
                    {type.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                <p className="text-gray-600 text-center mb-6">
                  {type.id === "metric" 
                    ? "For students following the Pakistani Metric/Intermediate system" 
                    : "For students following the Cambridge O/A Level system"}
                </p>
                
                <Button 
                  variant={selectedType === type.id ? "default" : "outline"}
                  onClick={() => setSelectedType(type.id)}
                  style={selectedType === type.id ? { backgroundColor: COLORS.primary } : {}}
                  className="w-full"
                >
                  {selectedType === type.id ? "Selected" : "Select"}
                </Button>
              </Card>
            ))}
          </div>
          
          <Button 
            onClick={handleContinue} 
            disabled={!selectedType}
            className="mt-12 px-8 py-6 text-lg"
            style={{ backgroundColor: COLORS.primary }}
          >
            Continue to Courses
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default EducationType;
