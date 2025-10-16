"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import LandingPage from "../../components/mockups/LandingPage";
import LoginPage from "../../components/mockups/LoginPage";
import Dashboard from "../../components/mockups/Dashboard";
import CalendarView from "../../components/mockups/CalenderView";
import TaskManagement from "../../components/mockups/TaskManagement";
import ResourcesPage from "../../components/mockups/ResourcesPage";
import ChatInterface from "../../components/mockups/ChatInterface";
import ProfileSettings from "../../components/mockups/ProfileSettings";

const mockups = [
  { id: "landing", name: "Landing Page", component: LandingPage },
  { id: "login", name: "Login/Register", component: LoginPage },
  { id: "dashboard", name: "Dashboard", component: Dashboard },
  { id: "calendar", name: "Calendar", component: CalendarView },
  { id: "tasks", name: "Task Management", component: TaskManagement },
  { id: "resources", name: "Resources", component: ResourcesPage },
  { id: "chat", name: "Chat", component: ChatInterface },
  { id: "profile", name: "Profile & Settings", component: ProfileSettings },
];

export default function Home() {
  const [selectedMockup, setSelectedMockup] = useState("landing");

  const CurrentMockup = mockups.find((m) => m.id === selectedMockup)?.component || LandingPage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Smart Study Buddy</h1>
            </div>
            <div className="flex gap-2">
            </div>
          </div>

          {/* Mockup Navigation */}
          <div className="flex gap-2 flex-wrap">
            {mockups.map((mockup) => (
              <Button
                key={mockup.id}
                variant={selectedMockup === mockup.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedMockup(mockup.id)}
                className="text-xs"
              >
                {mockup.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Mockup Display Area */}
      <div className="container mx-auto px-4 py-8">
        <Card className="overflow-hidden shadow-lg">
          <CurrentMockup />
        </Card>
      </div>

      {/* Footer Info */}
    </div>
  );
}
