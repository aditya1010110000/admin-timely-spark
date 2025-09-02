import { useState } from "react";
import { Plus, Search, Filter, Edit, Trash2, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const facultyData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    department: "Computer Science",
    designation: "Associate Professor",
    subjects: ["Data Structures", "Algorithms", "Machine Learning"],
    workload: "18 hours/week",
    status: "active"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    email: "michael.chen@university.edu",
    phone: "+1 (555) 234-5678",
    department: "Mathematics",
    designation: "Professor",
    subjects: ["Calculus", "Linear Algebra", "Statistics"],
    workload: "20 hours/week",
    status: "active"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@university.edu",
    phone: "+1 (555) 345-6789",
    department: "Physics",
    designation: "Assistant Professor",
    subjects: ["Quantum Physics", "Thermodynamics"],
    workload: "16 hours/week",
    status: "inactive"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    email: "james.wilson@university.edu",
    phone: "+1 (555) 456-7890",
    department: "Chemistry",
    designation: "Associate Professor",
    subjects: ["Organic Chemistry", "Biochemistry"],
    workload: "19 hours/week",
    status: "active"
  }
];

export default function FacultyManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");

  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === "all" || faculty.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = Array.from(new Set(facultyData.map(f => f.department)));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Faculty Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage teaching staff and their assignments
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Faculty
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-card-border">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{facultyData.length}</div>
            <p className="text-sm text-muted-foreground">Total Faculty</p>
          </CardContent>
        </Card>
        <Card className="border-card-border">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-success">
              {facultyData.filter(f => f.status === 'active').length}
            </div>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>
        <Card className="border-card-border">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{departments.length}</div>
            <p className="text-sm text-muted-foreground">Departments</p>
          </CardContent>
        </Card>
        <Card className="border-card-border">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">17.8</div>
            <p className="text-sm text-muted-foreground">Avg Hours/Week</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="border-card-border">
        <CardContent className="p-6">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search faculty by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFaculty.map((faculty) => (
          <Card key={faculty.id} className="border-card-border hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{faculty.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{faculty.designation}</p>
                  </div>
                </div>
                <Badge variant={faculty.status === 'active' ? 'default' : 'secondary'}>
                  {faculty.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{faculty.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{faculty.phone}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Department</p>
                <Badge variant="outline">{faculty.department}</Badge>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Subjects</p>
                <div className="flex flex-wrap gap-1">
                  {faculty.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-card-border">
                <div>
                  <p className="text-sm font-medium">Workload</p>
                  <p className="text-sm text-muted-foreground">{faculty.workload}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Edit className="w-3 h-3" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 text-destructive hover:text-destructive">
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <Card className="border-card-border">
          <CardContent className="p-12 text-center">
            <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No faculty found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or add a new faculty member.
            </p>
            <Button className="mt-4 gap-2">
              <Plus className="w-4 h-4" />
              Add Faculty
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}