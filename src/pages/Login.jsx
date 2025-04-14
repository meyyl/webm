import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import LoadingScreen from "../component/Loading";

export default function AuthUI() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-red-600"></div>
          <h1 className="ml-3 text-2xl font-bold text-gray-800">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`rounded-md py-2 text-sm font-medium transition-colors ${
              isLogin
                ? "bg-red-600 text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`rounded-md py-2 text-sm font-medium transition-colors ${
              !isLogin
                ? "bg-red-600 text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
            </>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="username"
              className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Masukkan username anda"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border border-gray-300 p-2 pr-10 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Masukkan password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border border-gray-300 p-2 pr-10 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Konfirmasi password"
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Ingat saya
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-red-600 hover:text-red-500"
              >
                Lupa password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            {isLogin ? "Masuk" : "Daftar"}
          </button>
        </form>
      </div>
    </div>
  );
}
