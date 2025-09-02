import { BookOpen, Users, Clock, Plus, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Electives() {
  const availableElectives = [
    {
      id: "CS350",
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Sarah Chen",
      credits: 3,
      capacity: 30,
      enrolled: 24,
      schedule: "Mon, Wed 2:00-3:30 PM",
      department: "Computer Science",
      prerequisites: "CS201, MATH201",
      description: "Introduction to machine learning algorithms and applications"
    },
    {
      id: "CS360",
      title: "Web Development",
      instructor: "Prof. Mike Johnson", 
      credits: 3,
      capacity: 25,
      enrolled: 18,
      schedule: "Tue, Thu 11:00-12:30 PM",
      department: "Computer Science", 
      prerequisites: "CS101",
      description: "Modern web development using React, Node.js, and databases"
    },
    {
      id: "MATH310",
      title: "Statistics for Computer Science",
      instructor: "Dr. Emily Wilson",
      credits: 4,
      capacity: 35,
      enrolled: 28,
      schedule: "Mon, Wed, Fri 9:00-10:00 AM",
      department: "Mathematics",
      prerequisites: "MATH201",
      description: "Statistical methods and probability theory for CS applications"
    },
    {
      id: "CS370",
      title: "Mobile App Development",
      instructor: "Dr. Alex Rodriguez",
      credits: 3,
      capacity: 20,
      enrolled: 16,
      schedule: "Tue, Thu 2:00-3:30 PM",
      department: "Computer Science",
      prerequisites: "CS201",
      description: "iOS and Android app development using native and cross-platform tools"
    }
  ];

  const myElectives = [
    {
      id: "CS340",
      title: "Database Systems",
      instructor: "Prof. Lisa Zhang",
      credits: 4,
      status: "Enrolled"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Elective Courses</h1>
        <p className="text-muted-foreground">Browse and register for elective courses</p>
      </div>

      {/* Search and Filters */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Find Electives</CardTitle>
          <CardDescription>Search and filter available elective courses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search courses..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="phy">Physics</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-32">
                <SelectValue placeholder="Credits" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="3">3 Credits</SelectItem>
                <SelectItem value="4">4 Credits</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* My Current Electives */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>My Enrolled Electives</CardTitle>
          <CardDescription>Elective courses you are currently enrolled in</CardDescription>
        </CardHeader>
        <CardContent>
          {myElectives.length > 0 ? (
            <div className="space-y-4">
              {myElectives.map((course) => (
                <div key={course.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.id} • {course.instructor} • {course.credits} credits</p>
                  </div>
                  <Badge variant="default">{course.status}</Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No electives enrolled yet</p>
          )}
        </CardContent>
      </Card>

      {/* Available Electives */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Available Electives</h2>
        
        <div className="grid gap-6">
          {availableElectives.map((course) => (
            <Card key={course.id} className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      {course.title}
                      <Badge variant="outline">{course.department}</Badge>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.id}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.enrolled}/{course.capacity} students
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.credits} credits
                      </span>
                    </CardDescription>
                  </div>
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Register
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{course.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Instructor:</span>
                    <p>{course.instructor}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Schedule:</span>
                    <p>{course.schedule}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Prerequisites:</span>
                    <p>{course.prerequisites}</p>
                  </div>
                </div>

                {/* Capacity Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Enrollment</span>
                    <span className="text-muted-foreground">{course.enrolled}/{course.capacity}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all" 
                      style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}