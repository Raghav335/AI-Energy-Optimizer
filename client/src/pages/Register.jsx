import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, Zap } from "lucide-react";
import { register } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await register({
        name,
        email,
        password,
      });

      alert("Registration Successful ✅");

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed ❌"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center p-4">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-12">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">

              <Zap size={34} />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                AI Power Optimizer
              </h1>

              <p className="text-blue-200">
                Smart Energy Dashboard
              </p>

            </div>

          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Create Your Account
          </h2>

          <p className="text-gray-300 mt-5 text-lg">
            Join the AI-powered smart energy platform and monitor power usage with real-time analytics.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-8 md:p-12">

          <h2 className="text-4xl font-bold text-gray-800">
            Register 🚀
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Create your AI Power Optimizer account.
          </p>

          <form
            onSubmit={submitHandler}
            className="space-y-5"
          >

            <div>

              <label className="font-medium">
                Full Name
              </label>

              <div className="relative mt-2">

                <User
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

              </div>

            </div>

            <div>

              <label className="font-medium">
                Email
              </label>

              <div className="relative mt-2">

                <Mail
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>

            <div>

              <label className="font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <Lock
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full border rounded-xl pl-12 pr-12 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-[1.02] transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;