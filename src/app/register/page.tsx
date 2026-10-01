"use client";

import Link from "next/link";
import Image from "next/image";
import AuthVisuals from "@/components/AuthVisuals";

export default function Register() {
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
            title="Sign up and come in"
            subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          />
        </div>

        {/* Right Column: Register Form Card (x: 741, y: 120 in Figma) */}
        <div className="w-full lg:w-[580px] flex justify-center lg:justify-end">
          <div className="w-full max-w-[580px] min-h-[680px] lg:min-h-[760px] bg-white rounded-[24px] p-8 sm:p-12 lg:p-[60px] shadow-[0_25px_60px_rgba(0,0,0,0.2)] relative z-20 flex flex-col justify-between">
            {/* Top Form Section */}
            <div>
              {/* Form Header */}
              <div className="mb-8">
                <span className="text-[#003BE2] font-satoshi text-[16px] font-medium block mb-1">
                  Create an Account
                </span>
                <h1 className="font-poppins font-semibold text-[32px] sm:text-[38px] text-[#242528] leading-[1.2] max-w-[340px]">
                  Welcome to ByteSpace
                </h1>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[14px] font-medium text-[#242528] mb-2 font-satoshi"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Jamie Davis"
                    required
                    className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] px-6 text-[15px] font-satoshi text-[#242528] placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                  />
                </div>

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
                    Continue
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Login Link (generous spacing matching gap: 122px in Figma) */}
            <div className="pt-12 pb-2 text-center text-[15px] font-satoshi text-[#4B4C53]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#003BE2] font-semibold hover:underline ml-1"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
