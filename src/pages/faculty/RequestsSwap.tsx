import { RefreshCw, Send, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RequestsSwap() {
  const swapRequests = [
    {
      id: "REQ001",
      from: "Dr. Sarah Johnson",
      course: "CS201 - Data Structures",
      originalTime: "Monday 9:00 AM",
      requestedTime: "Wednesday 2:00 PM",
      reason: "Conference attendance",
      status: "pending",
      date: "2024-01-15"
    },
    {
      id: "REQ002", 
      from: "Prof. Michael Chen",
      course: "CS301 - Algorithms", 
      originalTime: "Friday 2:00 PM",
      requestedTime: "Monday 11:00 AM",
      reason: "Medical appointment",
      status: "approved",
      date: "2024-01-12"
    }
  ];

  const myRequests = [
    {
      id: "MY001",
      to: "Dr. Emily Wilson",
      course: "CS101 - Fundamentals",
      originalTime: "Tuesday 11:00 AM", 
      requestedTime: "Thursday 3:00 PM",
      reason: "Personal commitment",
      status: "pending",
      date: "2024-01-14"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'default';
      case 'rejected': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'rejected': return XCircle;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Requests & Swaps</h1>
        <p className="text-muted-foreground">Manage class schedule change requests</p>
      </div>

      <Tabs defaultValue="incoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="incoming">Incoming Requests</TabsTrigger>
          <TabsTrigger value="my-requests">My Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="incoming" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Swap Requests from Colleagues
              </CardTitle>
              <CardDescription>
                Review and respond to schedule change requests from other faculty members
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {swapRequests.map((request) => {
                const StatusIcon = getStatusIcon(request.status);
                return (
                  <div key={request.id} className="p-4 border border-border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">{request.from}</h4>
                        <p className="text-sm text-muted-foreground">{request.course}</p>
                      </div>
                      <Badge variant={getStatusColor(request.status)} className="flex items-center gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Original Time:</span>
                        <p className="font-medium">{request.originalTime}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Requested Time:</span>
                        <p className="font-medium">{request.requestedTime}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground text-sm">Reason:</span>
                      <p className="text-sm">{request.reason}</p>
                    </div>

                    {request.status === 'pending' && (
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <XCircle className="h-4 w-4" />
                          Decline
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-requests" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                My Swap Requests
              </CardTitle>
              <CardDescription>
                Track your submitted schedule change requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {myRequests.map((request) => {
                const StatusIcon = getStatusIcon(request.status);
                return (
                  <div key={request.id} className="p-4 border border-border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">Request to {request.to}</h4>
                        <p className="text-sm text-muted-foreground">{request.course}</p>
                      </div>
                      <Badge variant={getStatusColor(request.status)} className="flex items-center gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Original Time:</span>
                        <p className="font-medium">{request.originalTime}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Requested Time:</span>
                        <p className="font-medium">{request.requestedTime}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground text-sm">Reason:</span>
                      <p className="text-sm">{request.reason}</p>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      Submitted on {request.date}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Create New Request</CardTitle>
              <CardDescription>Submit a new schedule change request</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                New Swap Request
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}