import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Study Resources</h1>
              <p className="text-slate-600">Share and access learning materials</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload Resource
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Search resources..." className="w-full" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">My Files</Button>
              <Button variant="outline" size="sm">Shared</Button>
              <Button variant="outline" size="sm">Favorites</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Folders Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Folders</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-cyan-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">Computer Science</h4>
                      <p className="text-xs text-slate-600">24 files</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-emerald-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">Database Systems</h4>
                      <p className="text-xs text-slate-600">18 files</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-violet-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">Mathematics</h4>
                      <p className="text-xs text-slate-600">15 files</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Recent Files */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Recent Files</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>

              <Card>
                <div className="divide-y">
                  {/* File Item 1 */}
                  <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-900 truncate">Algorithm_Analysis_Notes.pdf</h4>
                          <Badge className="bg-cyan-100 text-cyan-700 text-xs">ADF152S</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-600">
                          <span>Uploaded by Onesimo Mabomba</span>
                          <span>2.4 MB</span>
                          <span>2 hours ago</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* File Item 2 */}
                  <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-900 truncate">Database_Design_Slides.pptx</h4>
                          <Badge className="bg-emerald-100 text-emerald-700 text-xs">PRT152S</Badge>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs">Shared</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-600">
                          <span>Shared by Eventer Lekhuleni</span>
                          <span>5.1 MB</span>
                          <span>5 hours ago</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* File Item 3 */}
                  <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-900 truncate">Software_Requirements_Doc.docx</h4>
                          <Badge className="bg-orange-100 text-orange-700 text-xs">PRG152S</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-600">
                          <span>Uploaded by Nande Tokota</span>
                          <span>1.8 MB</span>
                          <span>Yesterday</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* File Item 4 */}
                  <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-900 truncate">Linear_Algebra_Formulas.pdf</h4>
                          <Badge className="bg-violet-100 text-violet-700 text-xs">PRG152S</Badge>
                          <Badge className="bg-emerald-100 text-emerald-700 text-xs">Faculty</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-600">
                          <span>Shared by Dr. Didi</span>
                          <span>892 KB</span>
                          <span>2 days ago</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Storage Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Storage</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Used Space</span>
                    <span className="text-sm font-semibold text-slate-900">4.2 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  Upgrade Storage
                </Button>
              </div>
            </Card>

            {/* File Types */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">File Types</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">PDFs</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Documents</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">32</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Presentations</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Spreadsheets</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">12</span>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-slate-900 font-medium">Onesimo shared a file</p>
                  <p className="text-xs text-slate-600">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-slate-900 font-medium">You uploaded 3 files</p>
                  <p className="text-xs text-slate-600">5 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-slate-900 font-medium">Eventer favorited a file</p>
                  <p className="text-xs text-slate-600">Yesterday</p>
                </div>
              </div>
            </Card>

            {/* Shared With Me */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Shared With Me</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    MC
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">Onesimo Mabomba</p>
                    <p className="text-xs text-slate-600">5 files</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    SJ
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">Eventer Lekhuleni</p>
                    <p className="text-xs text-slate-600">3 files</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    DR
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">Dr. Didi</p>
                    <p className="text-xs text-slate-600">8 files</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
