import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Brain, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function GenerateTimetable() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Generate Timetable</h1>
        <p className="text-muted-foreground mt-2">
          Create optimized academic schedules using AI-powered algorithms
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-card-border">
          <CardHeader>
            <CardTitle>Quick Generation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Generation</h3>
              <p className="text-muted-foreground mb-6">
                Generate optimal timetables in minutes with advanced algorithms
              </p>
              <Button size="lg" className="w-full">
                Generate New Timetable
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardHeader>
            <CardTitle>Generation Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium">Engineering Department</p>
                  <p className="text-sm text-muted-foreground">Completed 2 hours ago</p>
                </div>
              </div>
              <Button size="sm" variant="outline">View</Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-warning/10 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <div>
                  <p className="font-medium">Arts Department</p>
                  <p className="text-sm text-muted-foreground">3 conflicts detected</p>
                </div>
              </div>
              <Button size="sm" variant="outline">Resolve</Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Science Department</p>
                  <p className="text-sm text-muted-foreground">In progress...</p>
                </div>
              </div>
              <Button size="sm" variant="outline" disabled>Processing</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-card-border">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="p-12 text-center">
          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Advanced Timetable Generator</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Complete AI-powered timetable generation with conflict resolution, 
            resource optimization, and real-time constraint satisfaction.
          </p>
          <Button>Join Beta</Button>
        </CardContent>
      </Card>
    </div>
  );
}