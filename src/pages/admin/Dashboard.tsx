import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const stats = [
  {
    title: "Total Faculty",
    value: "156",
    change: "+12%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Total Students",
    value: "2,843",
    change: "+8%",
    icon: GraduationCap,
    color: "text-green-600"
  },
  {
    title: "Active Courses",
    value: "89",
    change: "+5%",
    icon: BookOpen,
    color: "text-purple-600"
  },
  {
    title: "Generated Timetables",
    value: "23",
    change: "+2",
    icon: Calendar,
    color: "text-orange-600"
  }
];

const recentActivities = [
  {
    title: "New faculty member added",
    description: "Dr. Sarah Johnson joined Computer Science Department",
    time: "2 hours ago",
    type: "success"
  },
  {
    title: "Timetable generated for Fall 2024",
    description: "Engineering Department timetable completed successfully",
    time: "4 hours ago",
    type: "info"
  },
  {
    title: "Course conflict detected",
    description: "Overlap found in CS-301 and MATH-205 schedules",
    time: "6 hours ago",
    type: "warning"
  },
  {
    title: "Student enrollment updated",
    description: "125 new students enrolled for the semester",
    time: "1 day ago",
    type: "success"
  }
];

const quickActions = [
  {
    title: "Generate New Timetable",
    description: "Create optimized schedules for departments",
    action: "Generate",
    icon: Calendar,
    color: "bg-primary text-primary-foreground"
  },
  {
    title: "Add Faculty Member",
    description: "Register new teaching staff",
    action: "Add",
    icon: Users,
    color: "bg-success text-success-foreground"
  },
  {
    title: "Manage Courses",
    description: "Update course details and credits",
    action: "Manage",
    icon: BookOpen,
    color: "bg-warning text-warning-foreground"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin</h1>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your NEP timetable system today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-card-border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-primary-muted ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-card-border hover:bg-accent/50 transition-colors">
                  <div className={`p-2 rounded-lg ${action.color}`}>
                    <action.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{action.title}</h4>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    {action.action}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/30 transition-colors">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'success' ? 'bg-success/20 text-success' :
                      activity.type === 'warning' ? 'bg-warning/20 text-warning' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {activity.type === 'success' && <CheckCircle className="w-4 h-4" />}
                      {activity.type === 'warning' && <AlertCircle className="w-4 h-4" />}
                      {activity.type === 'info' && <Clock className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* System Health */}
      <Card className="border-card-border">
        <CardHeader>
          <CardTitle>System Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold">All Systems Operational</h3>
              <p className="text-sm text-muted-foreground">99.9% uptime this month</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-semibold">Timetable Engine</h3>
              <p className="text-sm text-muted-foreground">Ready for generation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/20 text-warning rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold">Pending Reviews</h3>
              <p className="text-sm text-muted-foreground">3 conflicts to resolve</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}