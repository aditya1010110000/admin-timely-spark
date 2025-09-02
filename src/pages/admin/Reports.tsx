import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BarChart3, PieChart, TrendingUp } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Generate comprehensive reports and view system analytics
          </p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Export All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-primary-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Generated Reports</h3>
            <p className="text-2xl font-bold">127</p>
            <p className="text-sm text-muted-foreground mt-2">This month</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Data Points</h3>
            <p className="text-2xl font-bold">45.2K</p>
            <p className="text-sm text-muted-foreground mt-2">Analyzed</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-semibold mb-2">Efficiency</h3>
            <p className="text-2xl font-bold">94.7%</p>
            <p className="text-sm text-muted-foreground mt-2">Overall</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-card-border">
          <CardHeader>
            <CardTitle>Quick Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-3">
              <FileText className="w-4 h-4" />
              Faculty Workload Report
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3">
              <BarChart3 className="w-4 h-4" />
              Room Utilization Analysis
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3">
              <PieChart className="w-4 h-4" />
              Course Distribution Report
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3">
              <TrendingUp className="w-4 h-4" />
              Semester Performance
            </Button>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardHeader>
            <CardTitle>Custom Reports</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Build Custom Reports</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create tailored reports with specific metrics and filters
            </p>
            <Button>Create Report</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-card-border">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="p-12 text-center">
          <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Advanced Analytics Dashboard</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Comprehensive reporting suite with interactive dashboards, 
            automated insights, and predictive analytics for academic planning.
          </p>
          <Button>Request Access</Button>
        </CardContent>
      </Card>
    </div>
  );
}