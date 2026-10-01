import Image from "next/image";
import { Star, Signal } from "lucide-react";

interface AuthVisualsProps {
  title: string;
  subtitle: string;
}

export default function AuthVisuals({ title, subtitle }: AuthVisualsProps) {
  return (
    <div className="w-full lg:w-[500px] xl:w-[550px] flex flex-col justify-start relative select-none">
      {/* Title & Subtitle */}
      <div className="mb-6 lg:mb-8 text-left">
        <h2 className="font-poppins font-semibold text-[20px] text-[#F5F5F6] leading-[1.2] tracking-[-0.01em] mb-3">
          {title}
        </h2>
        <p className="font-satoshi text-[16px] lg:text-[18px] text-[#F5F5F6]/90 leading-[1.6] max-w-[475px]">
          {subtitle}
        </p>
      </div>

      {/* Floating Graphics & Cards Canvas */}
      <div className="relative w-full h-[520px] sm:h-[550px] max-w-[500px] mx-auto lg:mx-0">
        {/* 1. Lime Torus (Ring) - x: 151, y: 320 in Figma */}
        <div className="absolute top-[10px] left-[15px] sm:left-[25px] w-[130px] sm:w-[146px] h-[130px] sm:h-[146px] z-0 pointer-events-none drop-shadow-lg -rotate-12">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="25"
              stroke="#D4FB20"
              strokeWidth="18"
              fill="none"
              className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            />
            <ellipse
              cx="48"
              cy="46"
              rx="32"
              ry="18"
              stroke="#CBFC01"
              strokeWidth="4"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* 2. Card 2: "the Power of Big Data" - x: 233, y: 305 */}
        <div className="absolute top-0 right-0 sm:right-[10px] w-[320px] sm:w-[350px] lg:w-[373px] h-[350px] sm:h-[384px] bg-white rounded-[24px] p-4 border border-[#CED0D3] shadow-[0_15px_35px_rgba(0,0,0,0.18)] z-10 transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between">
          {/* Card Image with pre-rendered badges */}
          <div className="relative h-[175px] sm:h-[195px] w-full rounded-[12px] overflow-hidden bg-slate-900 shrink-0">
            <Image
              src="/course-3.png"
              alt="the Power of Big Data"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Card Content */}
          <div className="pt-2 flex flex-col justify-between flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-poppins font-semibold text-[16px] sm:text-[18px] text-[#000000] leading-snug">
                  the Power of Big Data
                </h4>
                <p className="text-[12px] text-[#4F4F4F] font-satoshi mt-0.5">
                  by <span className="text-[#003BE2] font-medium">purepearl studio</span>
                </p>
              </div>
              <div className="flex items-center gap-1 text-[13px] sm:text-[14px] font-bold text-[#4F4F4F]">
                <span>4.5</span>
                <Star className="w-3.5 h-3.5 fill-[#D4FB20] text-[#D4FB20]" />
              </div>
            </div>

            {/* Beginner Tag & Avatars */}
            <div className="flex items-center justify-between mt-2">
              <div className="inline-flex items-center gap-1.5 bg-[#F5F5F6] px-2.5 py-1 rounded-full text-[11px] text-[#4B4C53] font-medium">
                <Signal className="w-3 h-3 text-[#003BE2]" />
                <span>Beginner</span>
              </div>
              <div className="flex -space-x-1.5 items-center">
                <div className="w-6 h-6 rounded-full border border-white bg-blue-300 relative overflow-hidden">
                  <Image src="/hero.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white bg-purple-300 relative overflow-hidden">
                  <Image src="/course-1.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white bg-amber-300 relative overflow-hidden">
                  <Image src="/course-2.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white bg-[#000000] flex items-center justify-center text-[9px] font-bold text-white z-10">
                  26+
                </div>
              </div>
            </div>

            {/* Price & Rating */}
            <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100">
              <div className="flex items-baseline gap-1">
                <span className="font-poppins font-bold text-[18px] text-[#300B6A]">$25</span>
                <span className="text-[11px] text-[#4F4F4F] font-satoshi">/lifetime</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Card 1: "Build Digital Asset" - x: 122, y: 394 */}
        <div className="absolute top-[85px] sm:top-[90px] left-0 sm:left-[5px] w-[320px] sm:w-[350px] lg:w-[373px] h-[350px] sm:h-[384px] bg-white rounded-[24px] p-4 border border-[#CED0D3] shadow-[0_20px_45px_rgba(0,0,0,0.22)] z-20 transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between">
          {/* Card Image with pre-rendered badges */}
          <div className="relative h-[175px] sm:h-[195px] w-full rounded-[12px] overflow-hidden bg-slate-100 shrink-0">
            <Image
              src="/course-2.png"
              alt="Build Digital Asset"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Card Content */}
          <div className="pt-2 flex flex-col justify-between flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-poppins font-semibold text-[16px] sm:text-[18px] text-[#000000] leading-snug">
                  Build Digital Asset
                </h4>
                <p className="text-[12px] text-[#4F4F4F] font-satoshi mt-0.5">
                  by <span className="text-[#003BE2] font-medium">purepearl studio</span>
                </p>
              </div>
              <div className="flex items-center gap-1 text-[13px] sm:text-[14px] font-bold text-[#4F4F4F]">
                <span>4.5</span>
                <Star className="w-3.5 h-3.5 fill-[#D4FB20] text-[#D4FB20]" />
              </div>
            </div>

            {/* Beginner Tag & Avatars */}
            <div className="flex items-center justify-between mt-2">
              <div className="inline-flex items-center gap-1.5 bg-[#F5F5F6] px-2.5 py-1 rounded-full text-[11px] text-[#4B4C53] font-medium">
                <Signal className="w-3 h-3 text-[#003BE2]" />
                <span>Beginner</span>
              </div>
              <div className="flex -space-x-1.5 items-center">
                <div className="w-6 h-6 rounded-full border border-white bg-blue-300 relative overflow-hidden">
                  <Image src="/hero.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white bg-purple-300 relative overflow-hidden">
                  <Image src="/course-4.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white bg-emerald-300 relative overflow-hidden">
                  <Image src="/course-5.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white bg-[#000000] flex items-center justify-center text-[9px] font-bold text-white z-10">
                  26+
                </div>
              </div>
            </div>

            {/* Price & Rating */}
            <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100">
              <div className="flex items-baseline gap-1">
                <span className="font-poppins font-bold text-[18px] text-[#300B6A]">$25</span>
                <span className="text-[11px] text-[#4F4F4F] font-satoshi">/lifetime</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Lime Cone / 3D Pyramid - x: 97, y: 702 */}
        <div className="absolute bottom-6 -left-6 sm:-left-8 w-24 sm:w-28 h-24 sm:h-28 z-25 pointer-events-none drop-shadow-2xl">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform rotate-12">
            <polygon points="50,12 14,86 50,76" fill="#CBFC01" opacity="0.95" />
            <polygon points="50,12 86,86 50,76" fill="#D4FB20" />
            <polygon points="14,86 50,76 86,86 50,96" fill="#9ECD00" opacity="0.8" />
          </svg>
        </div>

        {/* 5. White 3D Ribbon / Spring - x: 470, y: 626 */}
        <div className="absolute bottom-20 sm:bottom-24 -right-3 sm:-right-5 w-16 sm:w-20 h-16 sm:h-20 z-25 pointer-events-none drop-shadow-xl opacity-90">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path
              d="M15,25 Q50,5 85,25 Q50,45 15,25 Z M15,48 Q50,28 85,48 Q50,68 15,48 Z M15,70 Q50,50 85,70 Q50,90 15,70 Z"
              stroke="#FFFFFF"
              strokeWidth="5"
              fill="rgba(255,255,255,0.2)"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 6. Floating "Happy Students" Card - x: 348, y: 740 */}
        <div className="absolute bottom-2 sm:bottom-4 right-0 sm:right-2 w-[240px] sm:w-[258px] bg-[#D4FB20] rounded-[16px] p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] z-30 transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-1.5">
            <p className="font-satoshi font-bold text-[14px] sm:text-[15px] text-[#242528]">
              Happy Students
            </p>
            <div className="flex items-center gap-1">
              <span className="font-satoshi font-bold text-[13px] text-[#424348]">4.5</span>
              <Star className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" />
              <span className="font-satoshi text-[12px] text-[#424348]">(240)</span>
            </div>
          </div>

          {/* Avatars Row: 7 avatars + +2K badge */}
          <div className="flex -space-x-2 items-center mt-2">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="w-7 h-7 rounded-full border-2 border-[#D4FB20] bg-white relative overflow-hidden shadow-sm shrink-0"
              >
                <Image
                  src={`/course-${(idx % 6) + 1}.png`}
                  alt="Student avatar"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-7 h-7 rounded-full border-2 border-[#D4FB20] bg-[#242528] flex items-center justify-center text-[9px] font-bold text-[#F5F5F6] z-10 shadow-sm shrink-0">
              2K+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
