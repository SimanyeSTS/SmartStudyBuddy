import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";

export default function ProfileSettings() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-900">Profile & Settings</h1>
          <p className="text-slate-600">Manage your account and preferences</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <nav className="space-y-1">
                <button className="w-full text-left px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-medium text-sm">
                  Profile
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 text-sm">
                  Account
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 text-sm">
                  Notifications
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 text-sm">
                  Privacy
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 text-sm">
                  Appearance
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 text-sm">
                  Security
                </button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Information */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Profile Information</h2>

              {/* Profile Picture */}
              <div className="flex items-center gap-6 mb-6 pb-6 border-b">
                <Avatar className="h-24 w-24 bg-emerald-600 text-white flex items-center justify-center">
                  <span className="text-3xl font-semibold">SS</span>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Profile Photo</h3>
                  <p className="text-sm text-slate-600 mb-3">Update your profile picture</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Upload New</Button>
                    <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <Input defaultValue="Simanye" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <Input defaultValue="Somdaka" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <Input defaultValue="241180031@mycput.ac.za" type="email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    className="w-full min-h-[100px] px-3 py-2 border rounded-lg text-sm"
                    defaultValue="Application Development major passionate about algorithms and data structures. Always happy to collaborate and share knowledge!"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Major
                    </label>
                    <Input defaultValue="Applications Development" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Year
                    </label>
                    <Input defaultValue="1st" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    University
                  </label>
                  <Input defaultValue="Cape Peninsula University of Technology" />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                </div>
              </div>
            </Card>

            {/* Courses */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900">Current Courses</h2>
                <Button variant="outline" size="sm">Add Course</Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-semibold">
                      PG
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">PRG152S - Data Structures</h4>
                      <p className="text-sm text-slate-600">Prof. Mlotshwa • Jan 2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-semibold">
                      PT
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">PRT152S - Database Systems</h4>
                      <p className="text-sm text-slate-600">Prof. Gqada • Jan 2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-semibold">
                      AD
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">ADF152S - Software Engineering</h4>
                      <p className="text-sm text-slate-600">Dr. Didi • Fall 2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-violet-50 border border-violet-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center text-white font-semibold">
                      MA
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">MUF152S - Linear Algebra</h4>
                      <p className="text-sm text-slate-600">Prof. Hamman • Fall 2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Academic Progress */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Academic Progress</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
                  <div className="text-3xl font-bold text-emerald-900 mb-1">3.85</div>
                  <div className="text-sm text-slate-700">Current GPA</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-4">
                  <div className="text-3xl font-bold text-cyan-900 mb-1">16</div>
                  <div className="text-sm text-slate-700">Credit Hours</div>
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-4">
                  <div className="text-3xl font-bold text-violet-900 mb-1">92%</div>
                  <div className="text-sm text-slate-700">Completion Rate</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Study Goals</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700">Study 30 hours/week</span>
                      <span className="text-sm font-semibold text-emerald-600">28.5h / 30h</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700">Complete all assignments on time</span>
                      <span className="text-sm font-semibold text-cyan-600">11 / 12</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700">Maintain 14-day study streak</span>
                      <span className="text-sm font-semibold text-violet-600">14 days</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-violet-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Notification Preferences */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Notification Preferences</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <h4 className="font-medium text-slate-900">Email Notifications</h4>
                    <p className="text-sm text-slate-600">Receive updates via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <h4 className="font-medium text-slate-900">Push Notifications</h4>
                    <p className="text-sm text-slate-600">Receive notifications in browser</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <h4 className="font-medium text-slate-900">Study Session Reminders</h4>
                    <p className="text-sm text-slate-600">Get reminded before sessions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <h4 className="font-medium text-slate-900">Assignment Deadlines</h4>
                    <p className="text-sm text-slate-600">Alerts for upcoming deadlines</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <h4 className="font-medium text-slate-900">Chat Messages</h4>
                    <p className="text-sm text-slate-600">Notifications for new messages</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <h4 className="font-medium text-slate-900">Resource Shares</h4>
                    <p className="text-sm text-slate-600">When someone shares a file with you</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>
            </Card>

            {/* Security Settings */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Security</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-slate-600">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700">Enabled</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Password</h4>
                      <p className="text-sm text-slate-600">Last changed 2 months ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Active Sessions</h4>
                      <p className="text-sm text-slate-600">Manage your active devices</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </Card>

            {/* Danger Zone */}
            <Card className="p-6 border-red-200 bg-red-50/50">
              <h2 className="text-lg font-semibold text-red-900 mb-6">Danger Zone</h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white border border-red-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">Download Your Data</h4>
                    <p className="text-sm text-slate-600">Export all your data from Smart Study Buddy</p>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border border-red-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">Deactivate Account</h4>
                    <p className="text-sm text-slate-600">Temporarily disable your account</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-orange-600 border-orange-300 hover:bg-orange-50">
                    Deactivate
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border border-red-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-red-900">Delete Account</h4>
                    <p className="text-sm text-slate-600">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
