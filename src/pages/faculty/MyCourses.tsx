import { BookOpen, Users, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function MyCourses() {
  const courses = [
    {
      id: "CS101",
      title: "Computer Science Fundamentals",
      credits: 3,
      students: 45,
      schedule: [
        { day: "Monday", time: "9:00 AM - 10:30 AM", room: "Room 301" },
        { day: "Wednesday", time: "9:00 AM - 10:30 AM", room: "Room 301" },
      ],
      type: "Core"
    },
    {
      id: "CS201",
      title: "Data Structures and Algorithms",
      credits: 4,
      students: 38,
      schedule: [
        { day: "Tuesday", time: "11:00 AM - 12:30 PM", room: "Room 205" },
        { day: "Thursday", time: "11:00 AM - 12:30 PM", room: "Room 205" },
        { day: "Friday", time: "2:00 PM - 3:30 PM", room: "Lab 1" },
      ],
      type: "Core"
    },
    {
      id: "CS301",
      title: "Advanced Algorithms",
      credits: 3,
      students: 24,
      schedule: [
        { day: "Monday", time: "2:00 PM - 3:30 PM", room: "Lab 1" },
        { day: "Wednesday", time: "2:00 PM - 3:30 PM", room: "Lab 1" },
      ],
      type: "Elective"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Courses</h1>
        <p className="text-muted-foreground">Courses you are currently teaching this semester</p>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                <p className="text-2xl font-bold text-foreground">{courses.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-foreground">
                  {courses.reduce((sum, course) => sum + course.students, 0)}
                </p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Weekly Hours</p>
                <p className="text-2xl font-bold text-foreground">18</p>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses List */}
      <div className="space-y-6">
        {courses.map((course) => (
          <Card key={course.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3">
                    {course.title}
                    <Badge variant={course.type === 'Core' ? 'default' : 'secondary'}>
                      {course.type}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.id}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students} students
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.credits} credits
                    </span>
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                  Class Schedule
                </h4>
                {course.schedule.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{session.day}</span>
                      <span className="text-muted-foreground">{session.time}</span>
                    </div>
                    <span className="text-sm text-primary font-medium">{session.room}</span>
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