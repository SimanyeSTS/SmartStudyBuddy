import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 to-teal-600 p-12 flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Smart Study Buddy</h1>
          <p className="text-emerald-100">Your Academic Success Partner</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Organize Your Studies</h3>
                <p className="text-emerald-100 text-sm">Manage tasks, schedule sessions, and track your academic progress all in one place.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Collaborate with Peers</h3>
                <p className="text-emerald-100 text-sm">Share resources, chat in real-time, and work together on group projects.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-emerald-100 text-sm">
          © 2025 Smart Study Buddy. All rights reserved.
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h2>
              <p className="text-slate-600">Sign in to your account to continue</p>
            </div>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <Button variant="outline" className="w-full h-11" size="lg">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full h-11" size="lg">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M0 0h11.5v11.5H0z"/>
                  <path fill="currentColor" d="M12.5 0H24v11.5H12.5z"/>
                  <path fill="currentColor" d="M0 12.5h11.5V24H0z"/>
                  <path fill="currentColor" d="M12.5 12.5H24V24H12.5z"/>
              </svg>
                Continue with Microsoft
              </Button>
            </div>

            <div className="relative mb-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-slate-500">
                Or continue with email
              </span>
            </div>

            {/* Email Login Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@university.edu"
                  className="h-11"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700">
                    Forgot password?
                  </a>
                </div>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="h-11"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="rounded border-slate-300" />
                <label htmlFor="remember" className="text-sm text-slate-600">
                  Remember me for 30 days
                </label>
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-11" size="lg">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Don&#39;t have an account?{" "}
                <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                  Create free account
                </a>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t">
              <p className="text-xs text-slate-500 text-center">
                By signing in, you agree to our Terms of Service and Privacy Policy.
                Your data is protected with enterprise-grade security including 2FA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
