import { TrendingUp, BookOpen, Award, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function CreditTracker() {
  const degreeRequirements = {
    total: 120,
    completed: 45,
    inProgress: 18,
    remaining: 57
  };

  const categoryBreakdown = [
    {
      category: "Core Courses",
      required: 40,
      completed: 24,
      inProgress: 6,
      courses: [
        { code: "CS101", title: "Computer Science Fundamentals", credits: 3, status: "Completed", grade: "A" },
        { code: "CS201", title: "Data Structures", credits: 4, status: "In Progress", grade: "-" },
        { code: "MATH201", title: "Discrete Mathematics", credits: 3, status: "Completed", grade: "B+" },
      ]
    },
    {
      category: "Mathematics",
      required: 16,
      completed: 12,
      inProgress: 4,
      courses: [
        { code: "MATH101", title: "Calculus I", credits: 4, status: "Completed", grade: "A-" },
        { code: "MATH102", title: "Calculus II", credits: 4, status: "Completed", grade: "B+" },
        { code: "MATH201", title: "Linear Algebra", credits: 4, status: "Completed", grade: "A" },
        { code: "MATH301", title: "Statistics", credits: 4, status: "In Progress", grade: "-" },
      ]
    },
    {
      category: "Electives", 
      required: 24,
      completed: 9,
      inProgress: 3,
      courses: [
        { code: "CS340", title: "Database Systems", credits: 4, status: "Completed", grade: "A" },
        { code: "CS350", title: "Machine Learning", credits: 3, status: "Completed", grade: "B+" },
        { code: "CS360", title: "Web Development", credits: 3, status: "In Progress", grade: "-" },
      ]
    },
    {
      category: "General Education",
      required: 40,
      completed: 0,
      inProgress: 5,
      courses: [
        { code: "ENG101", title: "English Composition", credits: 3, status: "In Progress", grade: "-" },
        { code: "HIS201", title: "World History", credits: 2, status: "In Progress", grade: "-" },
      ]
    }
  ];

  const getProgressColor = (completed: number, required: number) => {
    const percentage = (completed / required) * 100;
    if (percentage >= 100) return "bg-green-500";
    if (percentage >= 75) return "bg-blue-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-gray-400";
  };

  const getGradeColor = (grade: string) => {
    if (grade === "A" || grade === "A+") return "text-green-600";
    if (grade === "A-" || grade === "B+") return "text-blue-600";
    if (grade === "B" || grade === "B-") return "text-yellow-600";
    return "text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Credit Tracker</h1>
        <p className="text-muted-foreground">Monitor your academic progress and degree requirements</p>
      </div>

      {/* Overall Progress */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Credits</p>
                <p className="text-2xl font-bold text-foreground">{degreeRequirements.completed}/{degreeRequirements.total}</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-green-600">{degreeRequirements.completed}</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">{degreeRequirements.inProgress}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Remaining</p>
                <p className="text-2xl font-bold text-orange-600">{degreeRequirements.remaining}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress Bar */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Degree Progress</CardTitle>
          <CardDescription>
            {Math.round((degreeRequirements.completed / degreeRequirements.total) * 100)}% completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress 
            value={(degreeRequirements.completed / degreeRequirements.total) * 100} 
            className="h-3"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>0 credits</span>
            <span>{degreeRequirements.total} credits</span>
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <div className="space-y-6">
        {categoryBreakdown.map((category, index) => (
          <Card key={index} className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{category.category}</CardTitle>
                <Badge variant="outline">
                  {category.completed + category.inProgress}/{category.required} credits
                </Badge>
              </div>
              <div className="space-y-2">
                <Progress 
                  value={(category.completed / category.required) * 100} 
                  className="h-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Completed: {category.completed}</span>
                  <span>In Progress: {category.inProgress}</span>
                  <span>Required: {category.required}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium text-foreground">{course.title}</p>
                        <p className="text-sm text-muted-foreground">{course.code} • {course.credits} credits</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={course.status === 'Completed' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                      {course.grade !== '-' && (
                        <span className={`text-sm font-medium ${getGradeColor(course.grade)}`}>
                          {course.grade}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}