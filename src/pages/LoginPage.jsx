import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, User, Mail, Lock } from "lucide-react";

export function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${userType} with email: ${email}`);
    navigate("/");
  };  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1614728672820-e88260ce6d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMGRpc2FzdGVyJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NTg3OTYzODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Satellite monitoring Earth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        {!userType ? (
          <div className="w-full max-w-2xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-white/95 rounded-full px-6 py-2 mb-6">
                <span className="text-red-600 font-semibold">Real-time Monitoring • 24/7 Protection</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Select Access Type</h1>
              <p className="text-blue-200 text-lg">Choose your role to continue to the system</p>
            </div>

            {/* Portal Cards */}
            <div className="space-y-6 mb-12">
              {/* Admin Portal */}
              <button
                onClick={() => setUserType("admin")}
                className="w-full bg-gradient-to-r from-red-500 via-orange-500 to-orange-600 hover:from-red-600 hover:via-orange-600 hover:to-orange-700 rounded-2xl p-8 text-white transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors">
                      <Shield size={32} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold mb-1">Admin Portal</h3>
                      <p className="text-orange-100">Manage alerts, monitor threats, and coordinate responses</p>
                    </div>
                  </div>
                  <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </button>

              {/* User Portal */}
              <button
                onClick={() => setUserType("user")}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-2xl p-8 text-white transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors">
                      <User size={32} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold mb-1">User Portal</h3>
                      <p className="text-blue-100">View alerts, report incidents, and stay informed</p>
                    </div>
                  </div>
                  <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            </div>

            {/* Features Footer */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-blue-200">Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">Real-time</div>
                <div className="text-blue-200">Alerts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">AI-Powered</div>
                <div className="text-blue-200">Prediction</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              {/* Change Role Link */}
              <button
                onClick={() => setUserType(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 font-medium transition-colors"
              >
                <span>←</span> Change Role
              </button>

              {/* Access Badge */}
              <div className={`inline-block rounded-full px-4 py-2 mb-6 ${
                userType === "admin"
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700"
              }`}>
                <div className="flex items-center gap-2 font-semibold">
                  {userType === "admin" ? (
                    <>
                      <Shield size={18} />
                      Admin Access
                    </>
                  ) : (
                    <>
                      <User size={18} />
                      User Access
                    </>
                  )}
                </div>
              </div>

              {/* Welcome Text */}
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600 mb-8">Sign in to access the system</p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-gray-800 text-sm font-semibold mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-gray-700 font-medium">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className={`w-full text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    userType === "admin"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700"
                      : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  }`}
                >
                  Sign In to Dashboard
                </button>
              </form>

              {/* Register Link */}
              <p className="text-center mt-6 text-gray-700">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Register Now
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

