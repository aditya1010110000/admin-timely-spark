import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Plus } from "lucide-react";

export default function CoursesManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Courses & Credits</h1>
          <p className="text-muted-foreground mt-2">
            Manage course catalog, credit hours, and academic requirements
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Course
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-primary-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Total Courses</h3>
            <p className="text-2xl font-bold">89</p>
            <p className="text-sm text-muted-foreground mt-2">Across all departments</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Credit Hours</h3>
            <p className="text-2xl font-bold">1,247</p>
            <p className="text-sm text-muted-foreground mt-2">Total offered</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-semibold mb-2">Enrollments</h3>
            <p className="text-2xl font-bold">12,567</p>
            <p className="text-sm text-muted-foreground mt-2">This semester</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-card-border">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="p-12 text-center">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Course Management System</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Complete course catalog management with NEP-compliant credit structures, 
            prerequisite tracking, and automated scheduling optimization.
          </p>
          <Button>Get Notified</Button>
        </CardContent>
      </Card>
    </div>
  );
}