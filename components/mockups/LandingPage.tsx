import dashboard from "../lib/Screenshot 2025-10-16 040528.png"
import { Button } from "../ui/button";

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Your Academic Success Partner
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Study Smarter,<br />Not Harder
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Smart Study Buddy helps you manage your study schedule, collaborate with peers,
                and achieve your academic goals with intelligent planning and organization tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                No credit card required • Free forever plan available
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <img src={dashboard.src} alt="Dashboard Screenshot" className="w-120 rounded-lg shadow-lg mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to help students manage their academic life efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Calendar</h3>
            <p className="text-slate-600">
              Schedule study sessions, set reminders, and visualize your academic commitments in an intuitive calendar interface.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Task Management</h3>
            <p className="text-slate-600">
              Track assignments, set priorities, and never miss a deadline with our comprehensive task management system.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-Time Chat</h3>
            <p className="text-slate-600">
              Collaborate with classmates, discuss topics, and work on group projects with instant messaging.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Resource Sharing</h3>
            <p className="text-slate-600">
              Upload, organize, and share study materials with your peers. Access a library of collaborative resources.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Progress Tracking</h3>
            <p className="text-slate-600">
              Monitor your academic progress with detailed analytics and insights into your study habits.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Secure & Private</h3>
            <p className="text-slate-600">
              Your data is protected with enterprise-grade security, including 2FA and encrypted connections.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Study Habits?</h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using Smart Study Buddy to achieve their academic goals.
          </p>
          <Button size="lg" className="bg-emerald text-emerald-600 hover:bg-emerald-50 text-lg px-10">
            Create Free Account
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Smart Study Buddy</h3>
              <p className="text-sm">Empowering students to achieve academic excellence through smart organization and collaboration.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
            © 2025 Smart Study Buddy. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
