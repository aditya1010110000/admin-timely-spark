import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyTimetable() {
  const schedule = {
    Monday: [
      { time: "9:00 AM - 10:30 AM", course: "CS101", title: "Computer Science Fundamentals", instructor: "Dr. Smith", room: "Room 301", type: "Lecture" },
      { time: "2:00 PM - 3:30 PM", course: "MATH201", title: "Discrete Mathematics", instructor: "Prof. Johnson", room: "Room 205", type: "Lecture" }
    ],
    Tuesday: [
      { time: "11:00 AM - 12:30 PM", course: "CS201", title: "Data Structures", instructor: "Dr. Wilson", room: "Room 205", type: "Lecture" },
      { time: "2:00 PM - 5:00 PM", course: "CS201L", title: "Data Structures Lab", instructor: "TA Sarah", room: "Lab 1", type: "Lab" }
    ],
    Wednesday: [
      { time: "9:00 AM - 10:30 AM", course: "CS101", title: "Computer Science Fundamentals", instructor: "Dr. Smith", room: "Room 301", type: "Lecture" },
      { time: "2:00 PM - 3:30 PM", course: "MATH201", title: "Discrete Mathematics", instructor: "Prof. Johnson", room: "Room 205", type: "Lecture" }
    ],
    Thursday: [
      { time: "11:00 AM - 12:30 PM", course: "CS201", title: "Data Structures", instructor: "Dr. Wilson", room: "Room 205", type: "Lecture" },
      { time: "3:00 PM - 4:30 PM", course: "CS340", title: "Database Systems", instructor: "Prof. Zhang", room: "Room 301", type: "Lecture" }
    ],
    Friday: [
      { time: "9:00 AM - 12:00 PM", course: "CS101L", title: "CS Fundamentals Lab", instructor: "TA Mike", room: "Lab 2", type: "Lab" },
      { time: "2:00 PM - 3:30 PM", course: "CS340", title: "Database Systems", instructor: "Prof. Zhang", room: "Room 301", type: "Lecture" }
    ],
    Saturday: [],
    Sunday: []
  };

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Lecture': return 'default';
      case 'Lab': return 'secondary';
      case 'Tutorial': return 'outline';
      default: return 'default';
    }
  };

  const todayClasses = schedule.Monday; // For demo, showing Monday as today

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Timetable</h1>
        <p className="text-muted-foreground">Your complete class schedule for this semester</p>
      </div>

      {/* Today's Schedule */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Today's Classes
          </CardTitle>
          <CardDescription>Monday, January 15, 2024</CardDescription>
        </CardHeader>
        <CardContent>
          {todayClasses.length > 0 ? (
            <div className="space-y-4">
              {todayClasses.map((class_, index) => (
                <div key={index} className="p-4 border border-border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{class_.title}</h4>
                    <Badge variant={getTypeColor(class_.type)}>{class_.type}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{class_.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{class_.room}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{class_.instructor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No classes scheduled for today</p>
          )}
        </CardContent>
      </Card>

      {/* Weekly Timetable */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Weekly Schedule
          </CardTitle>
          <CardDescription>Complete timetable for the week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                <div className="p-2 font-medium text-sm">Time</div>
                {days.map(day => (
                  <div key={day} className="p-2 text-center font-medium text-sm">
                    {day}
                  </div>
                ))}
              </div>

              {/* Time Grid */}
              {timeSlots.map(time => (
                <div key={time} className="grid grid-cols-7 gap-2 mb-2">
                  <div className="p-2 text-sm text-muted-foreground font-medium">
                    {time}
                  </div>
                  {days.map(day => {
                    const daySchedule = schedule[day as keyof typeof schedule];
                    const classInSlot = daySchedule.find(class_ => 
                      class_.time.includes(time.replace(" AM", "").replace(" PM", ""))
                    );
                    
                    return (
                      <div key={`${day}-${time}`} className="p-1">
                        {classInSlot ? (
                          <div className="bg-primary/10 border border-primary/20 rounded p-2 text-xs">
                            <div className="font-medium text-foreground">{classInSlot.course}</div>
                            <div className="text-muted-foreground">{classInSlot.room}</div>
                          </div>
                        ) : (
                          <div className="h-12 border border-dashed border-muted-foreground/20 rounded"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Summary */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Course Summary</CardTitle>
          <CardDescription>All courses you are enrolled in this semester</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(schedule).flatMap(([day, classes]) => classes)
              .filter((class_, index, arr) => arr.findIndex(c => c.course === class_.course) === index)
              .map((course, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{course.title}</h4>
                    <Badge variant="outline">{course.course}</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{course.room}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}