import { MessageSquare, Send, Sparkles, BookOpen, Calendar, TrendingUp, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AIHelp() {
  const suggestions = [
    {
      icon: Calendar,
      title: "Schedule Planning",
      description: "Get help with course scheduling and time management",
      query: "How should I plan my course schedule for next semester?"
    },
    {
      icon: TrendingUp,
      title: "Academic Progress",
      description: "Track and optimize your academic progress",
      query: "Am I on track to graduate on time?"
    },
    {
      icon: BookOpen,
      title: "Course Recommendations",
      description: "Get personalized course and elective suggestions",
      query: "What electives should I take for my major?"
    },
    {
      icon: HelpCircle,
      title: "General Help",
      description: "Ask any questions about academics or university life",
      query: "I need help with study strategies"
    }
  ];

  const chatHistory = [
    {
      type: "user",
      message: "How many credits do I need to graduate?",
      time: "2:15 PM"
    },
    {
      type: "assistant",
      message: "Based on your current progress, you need 75 more credits to complete your degree. You've completed 45 out of 120 required credits. At your current pace of 18 credits per semester, you're on track to graduate in about 4 more semesters.",
      time: "2:16 PM"
    },
    {
      type: "user", 
      message: "What electives would you recommend for a CS major?",
      time: "2:18 PM"
    },
    {
      type: "assistant",
      message: "For CS majors, I recommend these electives based on current industry trends:\n\n• Machine Learning Fundamentals (CS350) - High demand skill\n• Web Development (CS360) - Practical for many roles\n• Database Systems (CS340) - Essential for backend development\n• Mobile App Development (CS370) - Growing market\n\nBased on your completed courses, you have the prerequisites for all of these.",
      time: "2:19 PM"
    }
  ];

  const quickStats = [
    {
      title: "Questions Asked",
      value: "47",
      icon: MessageSquare,
      color: "text-blue-600"
    },
    {
      title: "Study Tips Provided", 
      value: "23",
      icon: BookOpen,
      color: "text-green-600"
    },
    {
      title: "Schedule Optimizations",
      value: "8",
      icon: Calendar,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">AI Academic Assistant</h1>
        <p className="text-muted-foreground">Get personalized help with your academic journey</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {suggestions.map((suggestion, index) => (
          <Card key={index} className="border-border cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <suggestion.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-foreground">{suggestion.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{suggestion.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-border h-[500px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Chat with AI Assistant
              </CardTitle>
              <CardDescription>Ask questions about courses, schedules, graduation requirements, and more</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Chat History */}
              <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-foreground'
                    }`}>
                      {message.type === 'assistant' && (
                        <div className="flex items-center gap-1 mb-1">
                          <Sparkles className="h-3 w-3" />
                          <span className="text-xs font-medium">AI Assistant</span>
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-line">{message.message}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input */}
              <div className="flex gap-2">
                <Input placeholder="Ask about courses, schedules, requirements..." className="flex-1" />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Features & Tips */}
        <div className="space-y-4">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Course Planning
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Schedule Optimization
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Credit Analysis
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Study Strategies
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Career Guidance
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Recent Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-foreground">Graduation Timeline</p>
                <p className="text-muted-foreground text-xs">You're on track to graduate in Spring 2026</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-foreground">Credit Distribution</p>
                <p className="text-muted-foreground text-xs">Focus more on electives this semester</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-foreground">Study Schedule</p>
                <p className="text-muted-foreground text-xs">Best study times: Mon/Wed evenings</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Study Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm">
                <p className="text-muted-foreground">💡 Break study sessions into 25-minute blocks</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">📚 Review notes within 24 hours of class</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">⏰ Use your calendar to block study time</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}