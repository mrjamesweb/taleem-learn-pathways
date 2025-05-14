
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { COLORS } from "@/lib/constants";

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  category: string;
  educationType: string;
}

const CourseCard = ({ 
  id, title, instructor, price, rating, students, image, category, educationType 
}: CourseCardProps) => {
  return (
    <Link to={`/course/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="bg-blue-50">
              {category}
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              {educationType === "metric" ? "Metric/Inter" : "O/A Level"}
            </Badge>
          </div>
          <h3 className="font-semibold mb-1 line-clamp-2" title={title}>{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{instructor}</p>
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <span className="font-bold text-amber-500 mr-1">{rating.toFixed(1)}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={14}
                    className={i < Math.floor(rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-500 ml-2">({students})</span>
          </div>
          <div className="font-bold" style={{ color: COLORS.primary }}>
            ${price.toFixed(2)}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
