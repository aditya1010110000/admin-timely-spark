import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Shield, BookOpen, Clock } from "lucide-react";

export default function NEPRules() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">NEP Rules Configuration</h1>
        <p className="text-muted-foreground mt-2">
          Configure National Education Policy compliance rules and constraints
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-primary-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Active Rules</h3>
            <p className="text-2xl font-bold">24</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Compliance</h3>
            <p className="text-2xl font-bold">98.5%</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-semibold mb-2">Credit Hours</h3>
            <p className="text-2xl font-bold">140</p>
          </CardContent>
        </Card>

        <Card className="border-card-border">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Constraints</h3>
            <p className="text-2xl font-bold">17</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-card-border">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="p-12 text-center">
          <Settings className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">NEP Rules Engine</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Advanced rule configuration system for NEP 2020 compliance, including 
            credit distribution, multidisciplinary requirements, and flexible curriculum structures.
          </p>
          <Button>Configure Rules</Button>
        </CardContent>
      </Card>
    </div>
  );
}