import { Bell, Calendar, BookOpen, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Announcements() {
  const announcements = [
    {
      id: "1",
      title: "Midterm Exam Schedule Released",
      course: "CS201 - Data Structures",
      instructor: "Dr. Wilson",
      content: "The midterm exam will be held on March 15th, 2024 from 2:00 PM to 4:00 PM in Room 301. Please bring your student ID and writing materials.",
      priority: "high",
      date: "2024-01-10",
      time: "2:30 PM",
      type: "exam",
      isRead: false
    },
    {
      id: "2", 
      title: "Assignment 3 Deadline Extended",
      course: "CS101 - Fundamentals",
      instructor: "Dr. Smith",
      content: "Due to the recent system maintenance, Assignment 3 deadline has been extended to January 20th, 2024. No late penalty will be applied.",
      priority: "medium",
      date: "2024-01-09",
      time: "11:15 AM",
      type: "assignment",
      isRead: true
    },
    {
      id: "3",
      title: "Guest Lecture: AI in Healthcare",
      course: "CS350 - Machine Learning",
      instructor: "Dr. Chen",
      content: "Join us for a special guest lecture by Dr. Sarah Johnson from MIT on 'AI Applications in Healthcare' on January 18th at 3:00 PM.",
      priority: "low",
      date: "2024-01-08", 
      time: "9:45 AM",
      type: "event",
      isRead: true
    },
    {
      id: "4",
      title: "Lab Session Canceled",
      course: "CS201 - Data Structures", 
      instructor: "Dr. Wilson",
      content: "Tomorrow's lab session (January 12th) is canceled due to instructor illness. We will reschedule and notify you soon.",
      priority: "high",
      date: "2024-01-11",
      time: "4:20 PM", 
      type: "schedule",
      isRead: false
    },
    {
      id: "5",
      title: "Registration Open for Electives",
      course: "Academic Office",
      instructor: "Registrar",
      content: "Registration for next semester's elective courses is now open. Please check the course catalog and register by February 1st.",
      priority: "medium", 
      date: "2024-01-07",
      time: "1:00 PM",
      type: "registration",
      isRead: true
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'exam': return AlertCircle;
      case 'assignment': return BookOpen;
      case 'event': return Calendar;
      case 'schedule': return Calendar;
      case 'registration': return CheckCircle;
      default: return Bell;
    }
  };

  const unreadCount = announcements.filter(a => !a.isRead).length;
  const allAnnouncements = announcements;
  const unreadAnnouncements = announcements.filter(a => !a.isRead);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Announcements</h1>
        <p className="text-muted-foreground">Stay updated with course announcements and important notices</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Announcements</p>
                <p className="text-2xl font-bold text-foreground">{allAnnouncements.length}</p>
              </div>
              <Bell className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Unread</p>
                <p className="text-2xl font-bold text-orange-600">{unreadCount}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Priority</p>
                <p className="text-2xl font-bold text-red-600">
                  {allAnnouncements.filter(a => a.priority === 'high').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Announcements List */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all">All Announcements</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {allAnnouncements.map((announcement) => {
            const TypeIcon = getTypeIcon(announcement.type);
            return (
              <Card key={announcement.id} className={`border-border ${!announcement.isRead ? 'ring-1 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                        <TypeIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          {!announcement.isRead && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <span>{announcement.course}</span>
                          <span>•</span>
                          <span>{announcement.instructor}</span>
                          <span>•</span>
                          <span>{announcement.date} at {announcement.time}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={getPriorityColor(announcement.priority)}>
                      {announcement.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{announcement.content}</p>
                  {!announcement.isRead && (
                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        Mark as Read
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          {unreadAnnouncements.length > 0 ? (
            unreadAnnouncements.map((announcement) => {
              const TypeIcon = getTypeIcon(announcement.type);
              return (
                <Card key={announcement.id} className="border-border ring-1 ring-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                          <TypeIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg">{announcement.title}</CardTitle>
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <span>{announcement.course}</span>
                            <span>•</span>
                            <span>{announcement.instructor}</span>
                            <span>•</span>
                            <span>{announcement.date} at {announcement.time}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={getPriorityColor(announcement.priority)}>
                        {announcement.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{announcement.content}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        Mark as Read
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="border-border">
              <CardContent className="p-12 text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">All caught up!</h3>
                <p className="text-muted-foreground">You've read all your announcements.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}