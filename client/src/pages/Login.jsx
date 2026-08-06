import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import { login } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed ❌"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center p-4">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Panel */}

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

          <div className="space-y-6">

            <div className="flex gap-4">

              <ShieldCheck className="text-green-400" />

              <div>

                <h3 className="font-semibold">
                  Secure Authentication
                </h3>

                <p className="text-gray-300 text-sm">
                  Protected login with JWT authentication.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <BarChart3 className="text-cyan-400" />

              <div>

                <h3 className="font-semibold">
                  AI Analytics
                </h3>

                <p className="text-gray-300 text-sm">
                  Live smart grid monitoring & predictions.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Panel */}

        <div className="p-8 md:p-12">

          <h2 className="text-4xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Login to continue to your dashboard.
          </p>

          <form
            onSubmit={submitHandler}
            className="space-y-5"
          >

            <div>

              <label className="font-medium">
                Email
              </label>

              <input
                type="email"
                className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            <div>

              <label className="font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  className="w-full border rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
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
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-[1.02] transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;