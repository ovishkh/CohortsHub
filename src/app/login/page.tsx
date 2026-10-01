"use client";

import Link from "next/link";
import Image from "next/image";
import AuthVisuals from "@/components/AuthVisuals";

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#003BE2] relative overflow-x-hidden flex flex-col font-satoshi">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />

      {/* Top Header Logo (x: 122, y: 35 in Figma) */}
      <header className="relative z-20 max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-[122px] pt-8 sm:pt-[35px]">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            alt="ByteSpace Logo"
            width={32}
            height={32}
            className="w-8 h-8 group-hover:scale-105 transition-transform"
          />
          <span className="text-[24px] font-bold text-white tracking-tight font-satoshi">
            ByteSpace
          </span>
        </Link>
      </header>

      {/* Main Split Section (starts at y: 120 in Figma) */}
      <main className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-[122px] pt-8 lg:pt-[45px] pb-12 flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        {/* Left Column: Visual Illustrations & Copy */}
        <div className="w-full lg:w-[540px] flex justify-center lg:justify-start">
          <AuthVisuals
            title="Sign in with ease"
            subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
        </div>

        {/* Right Column: Login Form Card (x: 741, y: 120 in Figma) */}
        <div className="w-full lg:w-[580px] flex justify-center lg:justify-end">
          <div className="w-full max-w-[580px] min-h-[680px] lg:min-h-[760px] bg-white rounded-[24px] p-8 sm:p-12 lg:p-[60px] shadow-[0_25px_60px_rgba(0,0,0,0.2)] relative z-20 flex flex-col justify-between">
            {/* Top Form Section */}
            <div>
              {/* Form Header */}
              <div className="mb-8">
                <span className="text-[#003BE2] font-satoshi text-[16px] font-medium block mb-1">
                  Sign In
                </span>
                <h1 className="font-poppins font-semibold text-[32px] sm:text-[38px] text-[#242528] leading-[1.2]">
                  Welcome Back
                </h1>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[14px] font-medium text-[#242528] mb-2 font-satoshi"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="designer@example.com"
                    required
                    className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] px-6 text-[15px] font-satoshi text-[#242528] placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[14px] font-medium text-[#242528] mb-2 font-satoshi"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    required
                    className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] px-6 text-[15px] font-satoshi text-[#242528] placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                  />
                </div>

                {/* Submit Button (Right-aligned pill per Figma) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-[#D4FB20] hover:bg-[#CBFC01] text-[#242528] font-bold text-[16px] px-9 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Divider "or" (width: 453px in Figma) */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-[1px] bg-[#D1D1D1] flex-1" />
                <span className="text-[#888888] font-satoshi text-[16px] px-2 select-none">
                  or
                </span>
                <div className="h-[1px] bg-[#D1D1D1] flex-1" />
              </div>

              {/* Social OAuth Buttons (72x72px per Figma) */}
              <div className="mt-6 flex items-center justify-center gap-4">
                {/* Google Button */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-[72px] h-[72px] rounded-[16px] border border-[#CED0D3] hover:border-slate-400 bg-white flex items-center justify-center transition-all duration-200 shadow-sm hover:bg-slate-50 cursor-pointer active:scale-95"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </button>

                {/* Apple Button */}
                <button
                  type="button"
                  aria-label="Sign in with Apple"
                  className="w-[72px] h-[72px] rounded-[16px] border border-[#CED0D3] hover:border-slate-400 bg-white flex items-center justify-center transition-all duration-200 shadow-sm hover:bg-slate-50 cursor-pointer active:scale-95"
                >
                  <svg className="w-6 h-6 fill-black" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.74-11.97-14.1-6.19-9.13-11.08-19.47-14.67-30.01-3.59-10.55-5.39-20.73-5.39-30.56 0-14.35 3.59-26.24 10.77-35.68 7.18-9.44 16.3-14.28 27.37-14.51 5.33 0 11.08 1.41 17.27 4.22 6.19 2.82 10.37 4.34 12.54 4.57 1.84-.23 6.13-1.75 12.87-4.57 6.74-2.81 12.18-4.11 16.32-3.89 12.5.87 22.5 5.76 29.98 14.68-10.98 6.63-16.35 15.75-16.13 27.37.22 9.13 3.75 16.85 10.6 23.16 6.84 6.3 15.01 9.9 24.5 10.78-2.07 6.3-4.46 12.5-7.18 18.66zM119.22 31.84c0-7.39 2.66-14.46 7.99-21.2C132.53 3.9 139.38 0 147.76 0c.33 1.09.49 2.07.49 2.94 0 7.39-2.83 14.89-8.49 22.5-5.65 7.61-12.61 11.96-20.87 13.04.22-2.17.33-4.38.33-6.64z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom Register Link */}
            <div className="pt-8 pb-2 text-center text-[15px] font-satoshi text-[#888888]">
              New user?{" "}
              <Link
                href="/register"
                className="text-[#003BE2] font-semibold hover:underline ml-1"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
