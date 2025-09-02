import { Calendar, Clock, BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FacultyDashboard() {
  const todaySchedule = [
    { time: "9:00 AM", course: "CS101 - Computer Science Fundamentals", room: "Room 301" },
    { time: "11:00 AM", course: "CS201 - Data Structures", room: "Room 205" },
    { time: "2:00 PM", course: "CS301 - Algorithms", room: "Lab 1" },
  ];

  const stats = [
    { name: "Today's Classes", value: "3", icon: Calendar, color: "text-blue-600" },
    { name: "Weekly Hours", value: "18", icon: Clock, color: "text-green-600" },
    { name: "Active Courses", value: "5", icon: BookOpen, color: "text-purple-600" },
    { name: "Total Students", value: "142", icon: Users, color: "text-orange-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Faculty Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your schedule overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaySchedule.map((class_, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-foreground">{class_.course}</p>
                  <p className="text-sm text-muted-foreground">{class_.room}</p>
                </div>
                <div className="text-sm font-medium text-primary">{class_.time}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Update Availability
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              View My Courses
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Check Requests
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}