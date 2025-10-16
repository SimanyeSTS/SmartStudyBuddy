import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function CalendarView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  const today = 15;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Study Calendar</h1>
              <p className="text-slate-600">Plan and track your study sessions</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Session
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </Button>
            <div className="flex-1 text-center">
              <h2 className="text-lg font-semibold text-slate-900">October 2025</h2>
            </div>
            <Button variant="outline" size="sm">
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <div className="hidden md:flex gap-2">
              <Button variant="outline" size="sm">Month</Button>
              <Button variant="ghost" size="sm">Week</Button>
              <Button variant="ghost" size="sm">Day</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Calendar Grid */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {days.map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-slate-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="space-y-2">
                {dates.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 gap-2">
                    {week.map((date, dateIndex) => (
                      <div
                        key={dateIndex}
                        className={`
                          min-h-[120px] p-2 rounded-lg border transition-all
                          ${date === null ? 'bg-slate-50 border-slate-100' : 'bg-white hover:shadow-md cursor-pointer'}
                          ${date === today ? 'border-emerald-500 border-2 bg-emerald-50' : 'border-slate-200'}
                        `}
                      >
                        {date !== null && (
                          <>
                            <div className={`text-sm font-semibold mb-2 ${date === today ? 'text-emerald-600' : 'text-slate-900'}`}>
                              {date}
                            </div>
                            <div className="space-y-1">
                              {date === 15 && (
                                <>
                                  <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded truncate">
                                    9:00 AM Data Structures
                                  </div>
                                  <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded truncate">
                                    2:00 PM Database
                                  </div>
                                  <div className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded truncate">
                                    4:00 PM Group Study
                                  </div>
                                </>
                              )}
                              {date === 16 && (
                                <>
                                  <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded truncate">
                                    10:00 AM Algorithms
                                  </div>
                                  <div className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded truncate">
                                    3:00 PM Research
                                  </div>
                                </>
                              )}
                              {date === 18 && (
                                <div className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded truncate">
                                  1:00 PM Exam Prep
                                </div>
                              )}
                              {date === 20 && (
                                <>
                                  <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded truncate">
                                    9:00 AM Study Session
                                  </div>
                                  <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded truncate">
                                    2:00 PM Lab Work
                                  </div>
                                </>
                              )}
                              {date === 22 && (
                                <div className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded truncate">
                                  11:00 AM Team Meeting
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Today's Sessions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Today&#39;s Sessions</h3>
              <div className="space-y-3">
                <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-cyan-700">9:00 AM</span>
                    <Badge className="bg-cyan-600 text-xs">1h 30m</Badge>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">Data Structures Review</p>
                  <p className="text-xs text-slate-600 mt-1">Computer Science</p>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-emerald-700">2:00 PM</span>
                    <Badge className="bg-emerald-600 text-xs">2h</Badge>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">Database Systems</p>
                  <p className="text-xs text-slate-600 mt-1">Study Hall</p>
                </div>

                <div className="p-3 bg-violet-50 border border-violet-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-violet-700">4:00 PM</span>
                    <Badge className="bg-violet-600 text-xs">1h</Badge>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">Group Study</p>
                  <p className="text-xs text-slate-600 mt-1">Online</p>
                </div>
              </div>
            </Card>

            {/* Study Stats */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">This Week</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Study Hours</span>
                    <span className="text-sm font-semibold text-slate-900">28.5 / 30h</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Sessions Completed</span>
                    <span className="text-sm font-semibold text-slate-900">18 / 20</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Attendance Rate</span>
                    <span className="text-sm font-semibold text-slate-900">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Legend */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded"></div>
                  <span className="text-sm text-slate-700">Computer Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                  <span className="text-sm text-slate-700">Database</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded"></div>
                  <span className="text-sm text-slate-700">Group Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className="text-sm text-slate-700">Algorithms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span className="text-sm text-slate-700">Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500 rounded"></div>
                  <span className="text-sm text-slate-700">Exam Prep</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
