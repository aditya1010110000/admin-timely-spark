import { Shield, Users, GraduationCap, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    id: "admin",
    title: "Administrator",
    description: "Full system access with management capabilities",
    icon: Shield,
    features: [
      "Manage faculty and students",
      "Configure NEP rules",
      "Generate timetables",
      "View detailed reports"
    ],
    available: true
  },
  {
    id: "faculty",
    title: "Faculty Member",
    description: "Access to teaching schedules and availability",
    icon: Users,
    features: [
      "View teaching schedule",
      "Update availability",
      "Submit preferences",
      "Track workload"
    ],
    available: true
  },
  {
    id: "student",
    title: "Student",
    description: "View class schedules and academic information",
    icon: GraduationCap,
    features: [
      "View class timetable",
      "Check credit hours",
      "Access course details",
      "Download schedule"
    ],
    available: true
  }
];

export default function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (roleId: string) => {
    if (roleId === "admin") {
      navigate("/admin");
    } else if (roleId === "faculty") {
      navigate("/faculty");
    } else if (roleId === "student") {
      navigate("/student");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
          onClick={() => navigate("/login")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Select Your Role</h1>
          <p className="text-muted-foreground">
            Choose your access level to continue to the dashboard
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Card 
              key={role.id}
              className={`border-card-border hover:shadow-lg transition-all cursor-pointer relative ${
                !role.available ? 'opacity-60' : 'hover:border-primary/50'
              }`}
              onClick={() => role.available && handleRoleSelect(role.id)}
            >
              {!role.available && (
                <div className="absolute top-4 right-4 bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  role.available ? 'bg-gradient-primary' : 'bg-muted'
                }`}>
                  <role.icon className={`w-8 h-8 ${
                    role.available ? 'text-white' : 'text-muted-foreground'
                  }`} />
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {role.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full"
                  disabled={!role.available}
                  onClick={() => role.available && handleRoleSelect(role.id)}
                >
                  {role.available ? (
                    <>
                      Continue as {role.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    "Coming Soon"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Select your role to access the appropriate dashboard and features.
          </p>
        </div>
      </div>
    </div>
  );
}