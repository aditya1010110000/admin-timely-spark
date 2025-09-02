import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react";

export default function StudentManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Student Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage student enrollments, course assignments, and academic records
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-primary-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Total Students</h3>
            <p className="text-2xl font-bold">2,843</p>
            <p className="text-sm text-success flex items-center justify-center gap-1 mt-2">
              <TrendingUp className="w-3 h-3" />
              +8% this semester
            </p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Active Enrollments</h3>
            <p className="text-2xl font-bold">12,567</p>
            <p className="text-sm text-muted-foreground mt-2">Course registrations</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-semibold mb-2">Pending Reviews</h3>
            <p className="text-2xl font-bold">47</p>
            <p className="text-sm text-muted-foreground mt-2">Require attention</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-card-border">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="p-12 text-center">
          <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Student Management Module</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            This comprehensive student management system is currently under development. 
            It will include enrollment tracking, grade management, and academic progress monitoring.
          </p>
          <Button>Request Early Access</Button>
        </CardContent>
      </Card>
    </div>
  );
}