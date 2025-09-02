import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import RoleSelection from "./pages/RoleSelection";
import AdminLayout from "./components/layout/AdminLayout";
import FacultyLayout from "./components/layout/FacultyLayout";
import StudentLayout from "./components/layout/StudentLayout";
import { 
  Dashboard, 
  FacultyManagement, 
  StudentManagement, 
  CoursesManagement, 
  NEPRules, 
  GenerateTimetable, 
  Reports 
} from "./pages/admin";
import {
  FacultyDashboard,
  Availability,
  MyCourses,
  RequestsSwap,
  AIAssistant
} from "./pages/faculty";
import {
  StudentDashboard,
  MyTimetable,
  Electives,
  CreditTracker,
  Announcements,
  AIHelp
} from "./pages/student";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin/faculty" element={<AdminLayout><FacultyManagement /></AdminLayout>} />
          <Route path="/admin/students" element={<AdminLayout><StudentManagement /></AdminLayout>} />
          <Route path="/admin/courses" element={<AdminLayout><CoursesManagement /></AdminLayout>} />
          <Route path="/admin/nep-rules" element={<AdminLayout><NEPRules /></AdminLayout>} />
          <Route path="/admin/generate" element={<AdminLayout><GenerateTimetable /></AdminLayout>} />
          <Route path="/admin/reports" element={<AdminLayout><Reports /></AdminLayout>} />
          
          {/* Faculty Routes */}
          <Route path="/faculty" element={<FacultyLayout><FacultyDashboard /></FacultyLayout>} />
          <Route path="/faculty/availability" element={<FacultyLayout><Availability /></FacultyLayout>} />
          <Route path="/faculty/courses" element={<FacultyLayout><MyCourses /></FacultyLayout>} />
          <Route path="/faculty/requests" element={<FacultyLayout><RequestsSwap /></FacultyLayout>} />
          <Route path="/faculty/ai-assistant" element={<FacultyLayout><AIAssistant /></FacultyLayout>} />
          
          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
          <Route path="/student/timetable" element={<StudentLayout><MyTimetable /></StudentLayout>} />
          <Route path="/student/electives" element={<StudentLayout><Electives /></StudentLayout>} />
          <Route path="/student/credits" element={<StudentLayout><CreditTracker /></StudentLayout>} />
          <Route path="/student/announcements" element={<StudentLayout><Announcements /></StudentLayout>} />
          <Route path="/student/ai-help" element={<StudentLayout><AIHelp /></StudentLayout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
