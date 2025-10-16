import { Input } from "../ui/input";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function ChatInterface() {
  return (
    <div className="h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b p-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Messages</h1>
              <p className="text-sm text-slate-600">Collaborate with your peers</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Chat
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid lg:grid-cols-4 gap-0 h-full">
            {/* Conversations List */}
            <div className="lg:col-span-1 bg-white border-r overflow-y-auto">
              <div className="p-4">
                <Input placeholder="Search conversations..." className="w-full" />
              </div>

              <div className="divide-y">
                {/* Active Conversation */}
                <div className="p-4 bg-emerald-50 cursor-pointer hover:bg-emerald-100 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 bg-emerald-600 text-white flex items-center justify-center">
                        <span className="text-sm font-semibold">AD</span>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-900 truncate">ADF152S Study Group</h4>
                        <span className="text-xs text-slate-600">2m</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-slate-600 truncate flex-1">Ayabukwa: Let&#39;s meet at 3pm tomorrow</p>
                        <Badge className="bg-emerald-600 text-xs">3</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Conversations */}
                <div className="p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 bg-cyan-600 text-white flex items-center justify-center">
                        <span className="text-sm font-semibold">OM</span>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-900 truncate">Onesimo Mabomba</h4>
                        <span className="text-xs text-slate-600">1h</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">Thanks for sharing the notes!</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 bg-violet-600 text-white flex items-center justify-center">
                        <span className="text-sm font-semibold">DB</span>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-900 truncate">Database Project Team</h4>
                        <span className="text-xs text-slate-600">3h</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">You: I&#39;ve updated the schema design</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 bg-orange-600 text-white flex items-center justify-center">
                        <span className="text-sm font-semibold">AG</span>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-900 truncate">Ayabukwa Gumede</h4>
                        <span className="text-xs text-slate-600">5h</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">See you in the library!</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 bg-teal-600 text-white flex items-center justify-center">
                        <span className="text-sm font-semibold">AL</span>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-900 truncate">Algorithms Study</h4>
                        <span className="text-xs text-slate-600">Yesterday</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate">Great session today everyone!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 bg-white flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-emerald-600 text-white flex items-center justify-center">
                    <span className="text-sm font-semibold">AD</span>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-slate-900">ADF152S Study Group</h3>
                    <p className="text-xs text-slate-600">5 members • 3 online</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Date Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 border-t"></div>
                  <span className="text-xs text-slate-600 font-medium">Today</span>
                  <div className="flex-1 border-t"></div>
                </div>

                {/* Other User Message */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 bg-cyan-600 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">EL</span>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-slate-900">Eventer Lekhuleni</span>
                      <span className="text-xs text-slate-500">10:30 AM</span>
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 inline-block max-w-lg">
                      <p className="text-sm text-slate-900">Hey everyone! Did anyone finish the algorithm assignment yet?</p>
                    </div>
                  </div>
                </div>

                {/* Current User Message */}
                <div className="flex items-start gap-3 flex-row-reverse">
                  <Avatar className="h-8 w-8 bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">SS</span>
                  </Avatar>
                  <div className="flex-1 flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-1 flex-row-reverse">
                      <span className="text-sm font-semibold text-slate-900">You</span>
                      <span className="text-xs text-slate-500">10:32 AM</span>
                    </div>
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-sm p-3 inline-block max-w-lg">
                      <p className="text-sm">I&#39;m about 80% done. The sorting algorithms part was tricky!</p>
                    </div>
                  </div>
                </div>

                {/* Other User Message */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">NT</span>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-slate-900">Nande Tokota</span>
                      <span className="text-xs text-slate-500">10:35 AM</span>
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 inline-block max-w-lg">
                      <p className="text-sm text-slate-900">Same here! I found this great resource that helped me understand quicksort better.</p>
                    </div>
                    <div className="bg-slate-100 rounded-2xl p-3 inline-block max-w-lg mt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">QuickSort_Tutorial.pdf</p>
                          <p className="text-xs text-slate-600">2.1 MB</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current User Message */}
                <div className="flex items-start gap-3 flex-row-reverse">
                  <Avatar className="h-8 w-8 bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">SS</span>
                  </Avatar>
                  <div className="flex-1 flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-1 flex-row-reverse">
                      <span className="text-sm font-semibold text-slate-900">You</span>
                      <span className="text-xs text-slate-500">10:37 AM</span>
                    </div>
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-sm p-3 inline-block max-w-lg">
                      <p className="text-sm">Thanks Nande! That will be super helpful. Should we schedule a group session for tomorrow?</p>
                    </div>
                  </div>
                </div>

                {/* Other User Message */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 bg-cyan-600 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">AG</span>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-slate-900">Ayabukwa Gumede</span>
                      <span className="text-xs text-slate-500">10:40 AM</span>
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 inline-block max-w-lg">
                      <p className="text-sm text-slate-900">Let&#39;s meet at 3pm tomorrow in the library. I&#39;ll reserve Lab 3.10.</p>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 bg-violet-600 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">OM</span>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 inline-flex items-center gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t flex-shrink-0">
                <div className="flex items-end gap-2">
                  <Button variant="ghost" size="icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </Button>
                  <div className="flex-1">
                    <Input
                      placeholder="Type your message..."
                      className="w-full"
                    />
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Group Info Sidebar */}
            <div className="lg:col-span-1 bg-white border-l overflow-y-auto">
              <div className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="h-20 w-20 bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-semibold">SG</span>
                  </Avatar>
                  <h3 className="font-semibold text-slate-900 text-lg">ADF152S Study Group</h3>
                  <p className="text-sm text-slate-600">5 members</p>
                </div>

                <div className="space-y-6">
                  {/* Members */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Members</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                        <div className="relative">
                          <Avatar className="h-10 w-10 bg-emerald-600 text-white flex items-center justify-center">
                            <span className="text-sm font-semibold">SS</span>
                          </Avatar>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">Simanye Somdaka (You)</p>
                          <p className="text-xs text-slate-600">Online</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                        <div className="relative">
                          <Avatar className="h-10 w-10 bg-cyan-600 text-white flex items-center justify-center">
                            <span className="text-sm font-semibold">EL</span>
                          </Avatar>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">Eventer Lekhuleni</p>
                          <p className="text-xs text-slate-600">Online</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                        <div className="relative">
                          <Avatar className="h-10 w-10 bg-orange-600 text-white flex items-center justify-center">
                            <span className="text-sm font-semibold">OM</span>
                          </Avatar>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">Onesimo Mabomba</p>
                          <p className="text-xs text-slate-600">Online</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                        <div className="relative">
                          <Avatar className="h-10 w-10 bg-violet-600 text-white flex items-center justify-center">
                            <span className="text-sm font-semibold">NT</span>
                          </Avatar>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">Nande Tokota</p>
                          <p className="text-xs text-slate-600">Away</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                        <div className="relative">
                          <Avatar className="h-10 w-10 bg-teal-600 text-white flex items-center justify-center">
                            <span className="text-sm font-semibold">AG</span>
                          </Avatar>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">Ayabukwa Gumede</p>
                          <p className="text-xs text-slate-600">Offline</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shared Files */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Shared Files</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">QuickSort_Tutorial.pdf</p>
                          <p className="text-xs text-slate-600">2.1 MB</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">Assignment_3.docx</p>
                          <p className="text-xs text-slate-600">1.5 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search in Conversation
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      Mute Notifications
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Leave Group
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
