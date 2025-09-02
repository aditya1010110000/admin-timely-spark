import { useState } from "react";
import { Clock, Save, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function Availability() {
  const [availability, setAvailability] = useState<{[key: string]: boolean}>({});

  const toggleAvailability = (day: string, time: string) => {
    const key = `${day}-${time}`;
    setAvailability(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isAvailable = (day: string, time: string) => {
    return availability[`${day}-${time}`] || false;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Availability Management</h1>
        <p className="text-muted-foreground">Set your weekly availability for class scheduling</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Weekly Schedule
          </CardTitle>
          <CardDescription>
            Toggle your availability for each time slot. Green indicates available times.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-10 gap-2 mb-4">
                <div className="p-2 font-medium text-sm">Time</div>
                {days.map(day => (
                  <div key={day} className="p-2 text-center font-medium text-sm">
                    {day.slice(0, 3)}
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {timeSlots.map(time => (
                <div key={time} className="grid grid-cols-10 gap-2 mb-2">
                  <div className="p-2 text-sm text-muted-foreground font-medium">
                    {time}
                  </div>
                  {days.map(day => (
                    <div key={`${day}-${time}`} className="flex items-center justify-center">
                      <button
                        onClick={() => toggleAvailability(day, time)}
                        className={`w-8 h-8 rounded border-2 transition-colors ${
                          isAvailable(day, time)
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'bg-background border-muted hover:border-muted-foreground'
                        }`}
                      >
                        {isAvailable(day, time) ? '✓' : ''}
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <Button className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Availability
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset to Default
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Scheduling Preferences</CardTitle>
          <CardDescription>Additional preferences for automatic scheduling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Prefer morning sessions</Label>
              <p className="text-sm text-muted-foreground">Priority for classes before 12 PM</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Avoid back-to-back classes</Label>
              <p className="text-sm text-muted-foreground">Leave buffer time between classes</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Flexible break times</Label>
              <p className="text-sm text-muted-foreground">Allow lunch break adjustments</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}