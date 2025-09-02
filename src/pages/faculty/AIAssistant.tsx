import { MessageSquare, Send, Sparkles, BookOpen, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AIAssistant() {
  const suggestions = [
    {
      icon: Calendar,
      title: "Schedule Optimization",
      description: "Get suggestions to optimize your teaching schedule",
      query: "How can I optimize my weekly schedule?"
    },
    {
      icon: BookOpen,
      title: "Course Planning",
      description: "AI assistance for curriculum and lesson planning",
      query: "Help me plan the syllabus for CS201"
    },
    {
      icon: Users,
      title: "Student Insights",
      description: "Analyze student performance and engagement",
      query: "Show insights about student performance"
    }
  ];

  const chatHistory = [
    {
      type: "user",
      message: "How can I better manage my workload this semester?",
      time: "10:30 AM"
    },
    {
      type: "assistant", 
      message: "Based on your current schedule, I suggest consolidating office hours and using time blocks for grading. You could also implement automated feedback for certain assignments to save time.",
      time: "10:31 AM"
    },
    {
      type: "user",
      message: "What about balancing research and teaching?",
      time: "10:32 AM"
    },
    {
      type: "assistant",
      message: "Consider dedicating specific days to research (like Tuesdays and Thursdays) while keeping teaching prep on Mondays and Wednesdays. This creates clear boundaries and helps maintain focus.",
      time: "10:33 AM"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">AI Assistant</h1>
        <p className="text-muted-foreground">Get intelligent suggestions and support for your teaching activities</p>
      </div>

      {/* Quick Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <CardDescription>Ask questions about teaching, scheduling, or course management</CardDescription>
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
                      <p className="text-sm">{message.message}</p>
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
                <Input placeholder="Ask me anything about your teaching schedule..." className="flex-1" />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Features */}
        <div className="space-y-4">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Schedule Analysis
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Workload Optimization
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Course Planning
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Student Insights
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Research Integration
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
                <p className="font-medium text-foreground">Schedule Efficiency</p>
                <p className="text-muted-foreground text-xs">Your Tuesday schedule has 3 hour gaps that could be optimized</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-foreground">Student Engagement</p>
                <p className="text-muted-foreground text-xs">CS201 shows higher engagement in afternoon sessions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}