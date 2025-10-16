import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-bold text-slate-900">Smart Study Buddy</h1>
              <nav className="hidden md:flex gap-1">
                <Button variant="ghost" className="text-emerald-600 bg-emerald-50">Dashboard</Button>
                <Button variant="ghost">Calendar</Button>
                <Button variant="ghost">Tasks</Button>
                <Button variant="ghost">Resources</Button>
                <Button variant="ghost">Chat</Button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Avatar className="h-9 w-9 bg-emerald-600 text-white flex items-center justify-center">
                <span className="text-sm font-semibold">SS</span>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Simanye!</h2>
          <p className="text-slate-600">Here&#39;s what&#39;s happening with your studies today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <div className="text-sm text-slate-600">Active Tasks</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900">28.5h</div>
            <div className="text-sm text-slate-600">Study Hours (Week)</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900">5</div>
            <div className="text-sm text-slate-600">Sessions Today</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900">89%</div>
            <div className="text-sm text-slate-600">Completion Rate</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Schedule */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Today&#39;s Schedule</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg border">
                    <div className="text-xs text-slate-600">9:00</div>
                    <div className="text-xs text-slate-600">AM</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-slate-900">Data Structures Review</h4>
                      <Badge className="bg-emerald-600">In Progress</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Programming 152S • Lab 3.11</p>
                    <p className="text-xs text-slate-500 mt-2">Next: 15 minutes remaining</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border">
                  <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg border">
                    <div className="text-xs text-slate-600">11:00</div>
                    <div className="text-xs text-slate-600">AM</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Group Project Meeting</h4>
                    <p className="text-sm text-slate-600">Applications Development 152S • Online</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border">
                  <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg border">
                    <div className="text-xs text-slate-600">2:00</div>
                    <div className="text-xs text-slate-600">PM</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Database Systems Study</h4>
                    <p className="text-sm text-slate-600">Poject 152S • Study Hal</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Upcoming Deadlines</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Algorithm Assignment 3</h4>
                      <p className="text-sm text-slate-600">Due Tomorrow, 11:59 PM</p>
                    </div>
                  </div>
                  <Badge variant="destructive">High</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Research Paper Draft</h4>
                      <p className="text-sm text-slate-600">Due in 3 days</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-500">Medium</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Database Project Proposal</h4>
                      <p className="text-sm text-slate-600">Due in 5 days</p>
                    </div>
                  </div>
                  <Badge variant="outline">Low</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700" size="lg">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  New Study Session
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Add Task
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload Resource
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">Completed &quot;Chapter 5 Review&quot;</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">Uploaded study notes</p>
                    <p className="text-xs text-slate-500">5 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">Joined &quot;ADF152S Study Group&quot;</p>
                    <p className="text-xs text-slate-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Study Streak */}
            <Card className="p-6 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-emerald-100 text-sm">Day Streak</div>
                </div>
              </div>
              <p className="text-emerald-100 text-sm">You&#39;re on fire! Keep up the great work.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
