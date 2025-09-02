import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Settings, 
  Calendar,
  FileText,
  LogOut,
  Menu,
  Brain
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const adminMenuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Faculty Management", url: "/admin/faculty", icon: Users },
  { title: "Student Management", url: "/admin/students", icon: GraduationCap },
  { title: "Courses & Credits", url: "/admin/courses", icon: BookOpen },
  { title: "NEP Rules", url: "/admin/nep-rules", icon: Settings },
  { title: "Generate Timetable", url: "/admin/generate", icon: Calendar },
  { title: "Reports", url: "/admin/reports", icon: FileText },
];

function AdminSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  
  const isActive = (path: string) => {
    if (path === "/admin" && location.pathname === "/admin") return true;
    if (path !== "/admin" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <Sidebar className={state === "collapsed" ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r border-card-border">
        {/* Logo */}
        <div className="p-6 border-b border-card-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            {state !== "collapsed" && (
              <div>
                <h2 className="font-semibold text-sm">NEP Timetable</h2>
                <p className="text-xs text-muted-foreground">AI System</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-2 text-xs font-medium text-muted-foreground">
            Admin Panel
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3">
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive: navActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-accent ${
                          isActive(item.url) 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "text-foreground hover:text-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <div className="mt-auto p-3 border-t border-card-border">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
            onClick={() => {/* Handle logout */}}
          >
            <LogOut className="w-4 h-4" />
            {state !== "collapsed" && <span>Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-subtle">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 bg-card border-b border-card-border flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden">
                <Menu className="w-5 h-5" />
              </SidebarTrigger>
              <div>
                <h1 className="font-semibold text-lg">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage your NEP timetable system</p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}