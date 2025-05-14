
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PlusCircle, BookOpen, Users, DollarSign, 
  BarChart2, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { COLORS } from "@/lib/constants";
import PageLayout from "@/components/layout/PageLayout";

const Dashboard = () => {
  // Mock instructor analytics data
  const [analytics] = useState({
    totalStudents: 124,
    totalCourses: 3,
    totalRevenue: 1249.50,
    courseCompletionRate: 68
  });
  
  // Mock instructor courses
  const [instructorCourses] = useState([
    {
      id: 101,
      title: "Intermediate Mathematics - Complete Course",
      students: 62,
      revenue: 620,
      published: true,
      progress: 100
    },
    {
      id: 102,
      title: "Algebra Fundamentals for Metric Students",
      students: 45,
      revenue: 450,
      published: true,
      progress: 100
    },
    {
      id: 103,
      title: "Advanced Calculus for A Level",
      students: 17,
      revenue: 179.50,
      published: false,
      progress: 75
    }
  ]);
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
              Instructor Dashboard
            </h1>
            <p className="text-gray-600">Manage your courses and track your performance</p>
          </div>
          
          <Link to="/instructor/courses/new">
            <Button className="mt-4 md:mt-0" style={{ backgroundColor: COLORS.primary }}>
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Course
            </Button>
          </Link>
        </div>
        
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <h3 className="text-2xl font-bold mt-1">{analytics.totalStudents}</h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Courses</p>
                <h3 className="text-2xl font-bold mt-1">{analytics.totalCourses}</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <BookOpen className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <h3 className="text-2xl font-bold mt-1">${analytics.totalRevenue.toFixed(2)}</h3>
              </div>
              <div className="p-3 bg-amber-100 rounded-full">
                <DollarSign className="h-6 w-6 text-amber-700" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Completion Rate</p>
                <h3 className="text-2xl font-bold mt-1">{analytics.courseCompletionRate}%</h3>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <BarChart2 className="h-6 w-6 text-purple-700" />
              </div>
            </div>
            <Progress value={analytics.courseCompletionRate} className="mt-3" />
          </Card>
        </div>
        
        {/* Your Courses */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold" style={{ color: COLORS.primary }}>Your Courses</h2>
            <Link to="/instructor/courses" className="flex items-center text-blue-600 hover:underline">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {instructorCourses.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{course.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.students}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${course.revenue.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.published ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Published
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative w-full h-2 bg-gray-200 rounded">
                        <div 
                          className="absolute top-0 left-0 h-2 bg-blue-600 rounded"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{course.progress}%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Link 
                        to={`/instructor/courses/${course.id}`}
                        className="text-blue-600 hover:text-blue-800 mr-4"
                      >
                        Edit
                      </Link>
                      <Link 
                        to={`/instructor/courses/${course.id}/analytics`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Analytics
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Promotional Banner */}
        <Card className="p-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Ready to create more courses?</h3>
              <p>Share your expertise with students across Pakistan</p>
            </div>
            <Link to="/instructor/courses/new">
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                Create New Course
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
