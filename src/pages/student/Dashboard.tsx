import { Calendar, BookOpen, TrendingUp, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StudentDashboard() {
  const todayClasses = [
    { time: "9:00 AM", course: "CS101 - Computer Science Fundamentals", room: "Room 301", instructor: "Dr. Smith" },
    { time: "11:00 AM", course: "MATH201 - Discrete Mathematics", room: "Room 205", instructor: "Prof. Johnson" },
    { time: "2:00 PM", course: "CS201 - Data Structures", room: "Lab 1", instructor: "Dr. Wilson" },
  ];

  const stats = [
    { name: "Today's Classes", value: "3", icon: Calendar, color: "text-blue-600" },
    { name: "Credits Enrolled", value: "18", icon: BookOpen, color: "text-green-600" },
    { name: "Credits Completed", value: "45", icon: TrendingUp, color: "text-purple-600" },
    { name: "Unread Announcements", value: "2", icon: Bell, color: "text-orange-600" },
  ];

  const recentAnnouncements = [
    {
      title: "Midterm Schedule Released",
      course: "CS201",
      time: "2 hours ago",
      priority: "high"
    },
    {
      title: "Assignment 3 Deadline Extended",
      course: "CS101", 
      time: "1 day ago",
      priority: "medium"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Student Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your academic overview.</p>
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

      {/* Today's Schedule & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Classes
            </CardTitle>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayClasses.map((class_, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-foreground">{class_.course}</p>
                  <p className="text-sm text-muted-foreground">{class_.instructor} • {class_.room}</p>
                </div>
                <div className="text-sm font-medium text-primary">{class_.time}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Announcements
            </CardTitle>
            <CardDescription>Latest updates from your courses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAnnouncements.map((announcement, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{announcement.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{announcement.course} • {announcement.time}</p>
                  </div>
                  <Badge variant={announcement.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                    {announcement.priority}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Announcements
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">View Full Schedule</span>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="flex flex-col items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm">Browse Electives</span>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">Check Credits</span>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="flex flex-col items-center gap-2">
                <Bell className="h-6 w-6" />
                <span className="text-sm">View Announcements</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}