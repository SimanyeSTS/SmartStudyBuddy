import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

export default function TaskManagement() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Task Management</h1>
              <p className="text-slate-600">Track your assignments and stay organized</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Task
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Search tasks..." className="w-full" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All Tasks</Button>
              <Button variant="outline" size="sm">Active</Button>
              <Button variant="outline" size="sm">Completed</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Task Board */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {/* To Do Column */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">To Do</h3>
                  <Badge variant="outline">5</Badge>
                </div>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-red-500 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Algorithm Assignment 3</h4>
                      <Badge variant="destructive" className="text-xs">High</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Implement sorting algorithms and analyze complexity</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-red-600 font-medium">Tomorrow</span>
                      </div>
                      <Badge className="bg-cyan-100 text-cyan-700 text-xs">PRC152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-orange-500 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Research Paper Draft</h4>
                      <Badge className="bg-orange-500 text-xs">Medium</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Complete introduction and literature review sections</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-slate-600">In 3 days</span>
                      </div>
                      <Badge className="bg-violet-100 text-violet-700 text-xs">MUF152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-slate-400 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Database Project Proposal</h4>
                      <Badge variant="outline" className="text-xs">Low</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Define scope and requirements for database project</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-slate-600">In 5 days</span>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 text-xs">PRT152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-slate-400 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Review Chapter 7</h4>
                      <Badge variant="outline" className="text-xs">Low</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Study materials for upcoming quiz</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-slate-600">Next week</span>
                      </div>
                      <Badge className="bg-teal-100 text-teal-700 text-xs">ICF152S</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              {/* In Progress Column */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">In Progress</h3>
                  <Badge variant="outline">3</Badge>
                </div>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Software Engineering Project</h4>
                      <Badge className="bg-emerald-600 text-xs">Active</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Develop user authentication module</p>
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-600">Progress</span>
                        <span className="text-xs font-semibold text-emerald-600">65%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-slate-600">In 6 days</span>
                      </div>
                      <Badge className="bg-orange-100 text-orange-700 text-xs">ADF152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-cyan-500 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Data Analysis Lab Report</h4>
                      <Badge className="bg-cyan-600 text-xs">Active</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Analyze dataset and write findings</p>
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-600">Progress</span>
                        <span className="text-xs font-semibold text-cyan-600">40%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-slate-600">In 4 days</span>
                      </div>
                      <Badge className="bg-rose-100 text-rose-700 text-xs">CNF152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-violet-500 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Study Group Presentation</h4>
                      <Badge className="bg-violet-600 text-xs">Active</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Prepare slides for group presentation</p>
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-600">Progress</span>
                        <span className="text-xs font-semibold text-violet-600">80%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-violet-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-slate-600">In 2 days</span>
                      </div>
                      <Badge className="bg-cyan-100 text-cyan-700 text-xs">PRC152S</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Done Column */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Done</h3>
                  <Badge variant="outline">4</Badge>
                </div>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-slate-300 bg-slate-50 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-700 line-through">Chapter 5 Review</h4>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Completed study materials review</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Completed today</span>
                      <Badge variant="outline" className="text-xs">PRT152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-slate-300 bg-slate-50 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-700 line-through">Quiz Preparation</h4>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Finished practice questions</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Completed yesterday</span>
                      <Badge variant="outline" className="text-xs">ICF152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-slate-300 bg-slate-50 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-700 line-through">Lab Assignment 2</h4>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Submitted lab work</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Completed 2 days ago</span>
                      <Badge variant="outline" className="text-xs">PRC152S</Badge>
                    </div>
                  </Card>

                  <Card className="p-4 border-l-4 border-l-slate-300 bg-slate-50 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-700 line-through">Reading Assignment</h4>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Finished assigned chapters</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Completed 3 days ago</span>
                      <Badge variant="outline" className="text-xs">MUF152S</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Completion Rate</span>
                    <span className="text-sm font-semibold text-emerald-600">89%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-slate-900">12</div>
                    <div className="text-xs text-slate-600">Total Tasks</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-emerald-600">4</div>
                    <div className="text-xs text-slate-600">Completed</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Priority Tasks */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">High Priority</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">Algorithm Assignment 3</p>
                    <p className="text-xs text-slate-600 mt-1">Due tomorrow</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Courses */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Courses</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">PRC152S</span>
                  </div>
                  <Badge variant="outline" className="text-xs">3</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">PRT152S</span>
                  </div>
                  <Badge variant="outline" className="text-xs">2</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">MUF152S</span>
                  </div>
                  <Badge variant="outline" className="text-xs">2</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">ADF152S</span>
                  </div>
                  <Badge variant="outline" className="text-xs">1</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
