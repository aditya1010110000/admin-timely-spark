import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import RoleSelection from "./pages/RoleSelection";
import AdminLayout from "./components/layout/AdminLayout";
import { 
  Dashboard, 
  FacultyManagement, 
  StudentManagement, 
  CoursesManagement, 
  NEPRules, 
  GenerateTimetable, 
  Reports 
} from "./pages/admin";
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
