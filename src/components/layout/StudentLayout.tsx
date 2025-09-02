import { useState } from "react";
import { 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Bell, 
  MessageSquare, 
  User, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { name: "My Timetable", href: "/student", icon: Calendar },
  { name: "Electives", href: "/student/electives", icon: BookOpen },
  { name: "Credit Tracker", href: "/student/credits", icon: TrendingUp },
  { name: "Announcements", href: "/student/announcements", icon: Bell },
  { name: "AI Help", href: "/student/ai-help", icon: MessageSquare },
];

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveLink = (href: string) => location.pathname === href;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NT</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold">NEP Timetable</h1>
                <p className="text-xs text-muted-foreground">Student Portal</p>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/student.png" alt="Student" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 text-destructive">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <nav className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-card/30">
          <div className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => `
                      group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <nav className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card p-6">
              <ul className="space-y-2 mt-16">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `
                        group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                        ${isActive 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }
                      `}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}