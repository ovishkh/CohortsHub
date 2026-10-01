"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Code, Briefcase, Monitor, PenTool, Megaphone, Camera, HeartPulse, Music, 
  BookOpen, GraduationCap, Languages, Coffee, Search, Bookmark, Heart, 
  Star, ChevronRight, CheckCircle2, ThumbsUp, Sparkles, ArrowRight
} from "lucide-react";

interface CourseItem {
  id: number;
  imageSrc: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  category: string;
  level: string;
}

const COURSES_DATA: CourseItem[] = [
  {
    id: 1,
    imageSrc: "/course-1.png",
    title: "Learn Figma from Basic",
    author: "purepixel studio",
    rating: 4.5,
    price: 25,
    lessons: 17,
    duration: "2 hrs 15 mins",
    comments: 59,
    category: "Design",
    level: "Beginner",
  },
  {
    id: 2,
    imageSrc: "/course-2.png",
    title: "Build Digital Asset",
    author: "purepixel studio",
    rating: 4.6,
    price: 25,
    lessons: 24,
    duration: "3 hrs 40 mins",
    comments: 82,
    category: "Design",
    level: "Intermediate",
  },
  {
    id: 3,
    imageSrc: "/course-3.png",
    title: "The Power of Big Data",
    author: "purepixel studio",
    rating: 4.5,
    price: 25,
    lessons: 19,
    duration: "4 hrs 10 mins",
    comments: 44,
    category: "Data Science",
    level: "All Levels",
  },
  {
    id: 4,
    imageSrc: "/course-4.png",
    title: "Balancing Productivity and Life",
    author: "purepixel studio",
    rating: 4.5,
    price: 25,
    lessons: 12,
    duration: "1 hr 50 mins",
    comments: 38,
    category: "Productivity",
    level: "Beginner",
  },
  {
    id: 5,
    imageSrc: "/course-5.png",
    title: "Mastering Money Management",
    author: "purepixel studio",
    rating: 4.7,
    price: 25,
    lessons: 15,
    duration: "2 hrs 30 mins",
    comments: 91,
    category: "Finance",
    level: "Beginner",
  },
  {
    id: 6,
    imageSrc: "/course-6.png",
    title: "From Idea to Startup Success",
    author: "purepixel studio",
    rating: 4.8,
    price: 25,
    lessons: 30,
    duration: "5 hrs 20 mins",
    comments: 114,
    category: "Business",
    level: "Advanced",
  },
];

const CATEGORIES = [
  "Featured",
  "Design",
  "Data Science",
  "Productivity",
  "Finance",
  "Business",
  "Marketing",
  "Web Development",
  "Music",
  "Photography",
  "Animation",
];

const FEATURE_POINTS = [
  {
    title: "Share Your Expertise",
    desc: "Reach thousands of eager students worldwide with our intuitive lesson editor and curriculum builder.",
  },
  {
    title: "Monetize Your Passion",
    desc: "Set flexible pricing, provide cohort tiers, and keep up to 90% of your earnings with instant payouts.",
  },
  {
    title: "Flexibility and Autonomy",
    desc: "Teach on your own schedule with automated student onboarding and live community channels.",
  },
  {
    title: "Build a Community",
    desc: "Cultivate lifelong relationships through discussions, assignment feedback, and live Q&A sessions.",
  },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [savedCourses, setSavedCourses] = useState<number[]>([1]);
  const [animatingId, setAnimatingId] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [testimonialLikes, setTestimonialLikes] = useState<{ [id: number]: { count: number; liked: boolean } }>({
    1: { count: 48, liked: false },
    2: { count: 35, liked: true },
    3: { count: 62, liked: false },
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnimatingId(id);
    setTimeout(() => setAnimatingId(null), 350);

    setSavedCourses((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleTestimonialLike = (id: number) => {
    setTestimonialLikes((prev) => {
      const current = prev[id] || { count: 0, liked: false };
      return {
        ...prev,
        [id]: {
          count: current.liked ? current.count - 1 : current.count + 1,
          liked: !current.liked,
        },
      };
    });
  };

  const filteredCourses =
    selectedCategory === "Featured"
      ? COURSES_DATA
      : COURSES_DATA.filter(
          (course) =>
            course.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      {/* 1. Hero Section (Hero_Frame #1:1695 - 1440x1024) */}
      <section className="relative bg-[#003BE2] w-full overflow-hidden" style={{height: 'clamp(760px, 71.1vw, 1024px)'}}>
        {/* Crisp Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

        {/* Hero Content: Headline, Subtext, Search — top-center */}
        <div className="relative z-30 flex flex-col items-center text-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-[140px]">
          <h1 className="text-white font-poppins font-semibold text-[34px] xs:text-[42px] sm:text-[54px] lg:text-[64px] leading-[1.15] lg:leading-[1.1] tracking-tight mb-4 lg:mb-6 max-w-4xl">
            Get Access to Hundreds<br />Courses Available
          </h1>
          
          <p className="text-white/80 text-[15px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-satoshi mb-6 sm:mb-8 lg:mb-10 px-2">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          
          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center justify-center gap-3 sm:gap-4 w-full max-w-[580px] relative z-40 mx-auto"
          >
            <div className="bg-white rounded-full px-5 sm:px-6 h-[48px] sm:h-[52px] flex items-center gap-2.5 sm:gap-3 flex-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Search className="text-shuttle-gray-400 shrink-0 w-5 h-5" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator" 
                className="bg-transparent border-none outline-none text-shuttle-gray-800 w-full placeholder:text-shuttle-gray-400 font-satoshi text-[14px] sm:text-[15px] h-full"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#CBFC01] hover:bg-[#bbf000] text-shuttle-gray-950 font-bold px-6 sm:px-8 h-[48px] sm:h-[52px] rounded-full whitespace-nowrap shadow-[0_8px_25px_rgba(203,252,1,0.25)] hover:scale-105 active:scale-95 transition-all text-[15px] sm:text-[16px] cursor-pointer shrink-0 font-satoshi"
            >
              Search
            </button>
          </form>
        </div>

        {/* ── Visuals Layer (absolute, fills entire section) ─────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="relative w-full max-w-[1440px] h-full mx-auto">

            {/*
              LIME DOME  (#1:1866 in Figma)
              Figma: x=145, y=582, w=1149, h=1149  (1440px frame)
              Center of circle: x=145+1149/2=719.5  y=582+1149/2=1156.5
              At 1440px width  → center-x is dead-center (720px).
              The circle center sits at y=1156 which is BELOW the 1024px hero
              → roughly 132px below bottom.  So top of circle = 582px.
              We translate this proportionally: top = 56.8% of hero height.
            */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#CBFC01] z-10 pointer-events-none"
              style={{
                /* Scale the 1149px circle relative to viewport width, capped at 1149px */
                width:  'clamp(480px, 79.8vw, 1149px)',
                height: 'clamp(480px, 79.8vw, 1149px)',
                /* top = 582/1024 = 56.8% of hero height */
                top: 'clamp(380px, 56.8%, 582px)',
              }}
            />

            {/* 3D Ornaments — scattered across full hero */}
            <div className="absolute top-[180px] sm:top-[200px] lg:top-[221px] left-1/2 -translate-x-1/2 w-[900px] sm:w-[1300px] lg:w-[1550px] xl:w-[1719px] h-[550px] sm:h-[650px] lg:h-[803px] z-20 pointer-events-none">
              <Image src="/3d-ornaments.png" alt="3D Shapes" fill className="object-contain" priority />
            </div>

            {/*
              STUDENT IMAGE  (#1:1796: x=431, y=512, w=578, h=541)
              Bottom of image = 512+541 = 1053 ≈ 1024px hero bottom.
              Center-x = 431+578/2 = 720 = perfect center.
              → bottom: 0, left: 50%, -translate-x-1/2
              Increased height to ensure full figure is visible.
            */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              style={{
                width:  'clamp(320px, 43vw, 620px)',
                height: 'clamp(300px, 40.5vw, 584px)',
              }}
            >
              <Image
                src="/hero.png"
                alt="Hero Student"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
                priority
              />
            </div>

            {/* ── Floating Card 1: UI/UX Design ── LEFT of model */}
            <div className="pointer-events-auto hidden sm:flex absolute z-40 flex-col"
              style={{
                bottom: 'clamp(200px, 24vw, 334px)',
                left:   'clamp(40px, 14vw, 210px)',
              }}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-[16px] px-5 py-3.5 shadow-[0px_20px_40px_rgba(0,0,0,0.12)] animate-float border border-white/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-[#003BE2]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#003BE2] text-[15px]">🎨</span>
                  </div>
                  <p className="font-bold text-shuttle-gray-950 font-satoshi text-[14px] leading-tight">UI/UX Design</p>
                </div>
                <p className="text-shuttle-gray-400 text-[12px] font-satoshi pl-[42px]">200 Courses • 1000+ Students</p>
              </div>
            </div>

            {/* ── Floating Card 2: Learning Progress ── RIGHT of model */}
            <div className="pointer-events-auto hidden sm:flex absolute z-40"
              style={{
                bottom: 'clamp(200px, 26vw, 374px)',
                right:  'clamp(40px, 14vw, 210px)',
              }}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-[16px] p-4 shadow-[0px_20px_40px_rgba(0,0,0,0.12)] animate-float-delayed border border-white/30 hover:scale-105 transition-transform duration-300 w-[210px]">
                <p className="font-bold text-shuttle-gray-950 font-satoshi text-[12px] sm:text-[13px] mb-1 leading-tight">Learning Progress</p>
                <p className="text-[28px] sm:text-[34px] font-poppins font-bold text-shuttle-gray-950 mb-2 leading-none">55%</p>
                <div className="w-full bg-shuttle-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#CBFC01] w-[55%] h-full rounded-full" />
                </div>
              </div>
            </div>

            {/* ── Floating Card 3: Happy Students ── BELOW-LEFT of model (mobile visible) */}
            <div className="pointer-events-auto absolute z-40"
              style={{
                bottom: 'clamp(16px, 6vw, 86px)',
                left:   'clamp(12px, 12vw, 172px)',
              }}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-[16px] p-3 sm:p-4 lg:p-5 shadow-[0px_20px_40px_rgba(0,0,0,0.12)] animate-float-reverse border border-white/30 hover:scale-105 transition-transform duration-300 w-[180px] sm:w-[230px] lg:w-[258px]">
                <p className="font-bold text-shuttle-gray-950 font-satoshi text-[12px] sm:text-[14px] mb-1 sm:mb-1.5 leading-tight">Happy Students</p>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="font-bold text-[14px] sm:text-[18px] text-shuttle-gray-950 leading-none">4.5</span>
                  <span className="text-[#CBFC01] text-[15px] sm:text-[20px] leading-none">★</span>
                  <span className="text-shuttle-gray-400 text-[10px] sm:text-[12px] leading-none">(240)</span>
                </div>
                <div className="flex -space-x-2 sm:-space-x-2.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-shuttle-gray-200 relative overflow-hidden shadow-sm">
                      <Image src="/hero.png" alt="Avatar" fill className="object-cover" />
                    </div>
                  ))}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-[#CBFC01] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-shuttle-gray-950 z-10 relative shadow-sm">
                    2k+
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trusted By (Logos) - Continuous Marquee Ticker */}
      <section className="bg-[#FAFAFA] h-[120px] sm:h-[160px] lg:h-[202px] flex items-center justify-center border-b border-shuttle-gray-100 overflow-hidden relative">
        <div className="w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-12 sm:gap-20 lg:gap-28 py-2 hover:[animation-play-state:paused] cursor-pointer">
            <Image src="/logo-strip.svg" alt="Trusted Companies" width={1132} height={42} className="h-7 sm:h-9 lg:h-11 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" />
            <Image src="/logo-strip.svg" alt="Trusted Companies" width={1132} height={42} className="h-7 sm:h-9 lg:h-11 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" />
            <Image src="/logo-strip.svg" alt="Trusted Companies" width={1132} height={42} className="h-7 sm:h-9 lg:h-11 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-12 sm:gap-20 lg:gap-28 py-2 hover:[animation-play-state:paused] cursor-pointer" aria-hidden="true">
            <Image src="/logo-strip.svg" alt="Trusted Companies" width={1132} height={42} className="h-7 sm:h-9 lg:h-11 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" />
            <Image src="/logo-strip.svg" alt="Trusted Companies" width={1132} height={42} className="h-7 sm:h-9 lg:h-11 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" />
            <Image src="/logo-strip.svg" alt="Trusted Companies" width={1132} height={42} className="h-7 sm:h-9 lg:h-11 w-auto opacity-60 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* 3. Discover Your Passion Section */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-poppins font-semibold text-shuttle-gray-950 mb-3 sm:mb-4 text-center leading-tight">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-shuttle-gray-500 text-[15px] sm:text-[18px] leading-relaxed max-w-3xl text-center mb-8 sm:mb-12 font-satoshi px-2">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>

          {/* Swipeable Category Filter Pills (Horizontal on mobile, wrap on desktop) */}
          <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 mb-10 sm:mb-14 py-2 px-2 touch-pan-x">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 font-satoshi ${
                    isActive
                      ? "bg-[#CBFC01] text-shuttle-gray-950 font-bold shadow-md scale-105 ring-2 ring-[#CBFC01]/50"
                      : "bg-[#F8F9FB] text-shuttle-gray-600 hover:text-shuttle-gray-950 hover:bg-shuttle-gray-100 font-medium"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <Link
              href="/search"
              className="text-[#003BE2] hover:underline font-bold text-[13px] sm:text-[14px] px-3 whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <span>+ More</span>
            </Link>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-center">
            {filteredCourses.map((course) => {
              const isSaved = savedCourses.includes(course.id);
              const isPopping = animatingId === course.id;

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-[24px] overflow-hidden border border-shuttle-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col group w-full max-w-[373px] p-4 shadow-sm hover:-translate-y-1.5"
                >
                  {/* Card Thumbnail */}
                  <div className="relative h-[200px] sm:h-[210px] w-full rounded-[20px] overflow-hidden shrink-0 bg-shuttle-gray-100">
                    <Image
                      src={course.imageSrc}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Bookmark action */}
                    <button
                      onClick={(e) => toggleBookmark(course.id, e)}
                      aria-label="Bookmark course"
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-md transition-transform z-10 ${
                        isPopping ? "scale-125" : "scale-100"
                      } hover:scale-110 active:scale-95`}
                    >
                      <Bookmark
                        className={`w-4 h-4 transition-colors ${
                          isSaved ? "fill-[#003BE2] text-[#003BE2]" : "text-shuttle-gray-500 hover:text-[#003BE2]"
                        }`}
                      />
                    </button>

                    {/* Overlay stats badges */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 flex-wrap">
                      <span className="bg-white/95 backdrop-blur text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1 text-shuttle-gray-950 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#003BE2]" /> {course.lessons} Lessons
                      </span>
                      <span className="bg-white/95 backdrop-blur text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1 text-shuttle-gray-950 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col mt-4 px-1">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <Link href="/course-details" className="group-hover:text-[#003BE2] transition-colors">
                        <h3 className="font-bold text-shuttle-gray-950 text-[17px] sm:text-[18px] leading-snug line-clamp-2">
                          {course.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-1 shrink-0 mt-0.5 bg-yellow-50 px-2 py-0.5 rounded-md">
                        <span className="text-[12px] sm:text-[13px] font-bold text-shuttle-gray-950">{course.rating}</span>
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    
                    <p className="text-shuttle-gray-400 text-[13px] mb-auto font-satoshi flex items-center gap-1">
                      by <Link href="/creator-profile" className="font-medium text-[#003BE2] hover:underline">{course.author}</Link>
                    </p>
                    
                    {/* Price and Enrollment Footer */}
                    <div className="flex justify-between items-end mt-4 pt-3 border-t border-shuttle-gray-100">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="w-1.5 h-3 bg-[#CBFC01] rounded-sm block" />
                          <span className="text-[11px] font-medium text-shuttle-gray-400 uppercase tracking-wider">
                            {course.level}
                          </span>
                        </div>
                        <div className="flex items-end gap-1.5">
                          <span className="text-[20px] sm:text-[22px] font-bold text-[#003BE2] leading-none">
                            ${course.price}
                          </span>
                          <span className="text-shuttle-gray-400 text-[12px] font-satoshi line-through mb-0.5">
                            ${course.price + 15}
                          </span>
                        </div>
                      </div>
                      
                      <Link
                        href="/course-details"
                        className="bg-[#003BE2] hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1 group/btn"
                      >
                        <span>Enroll</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#F8F9FB] hover:bg-shuttle-gray-100 text-shuttle-gray-950 font-bold px-8 py-3.5 rounded-full border border-shuttle-gray-200 transition-all font-satoshi shadow-sm hover:scale-105"
            >
              <span>Explore All 200+ Courses</span>
              <ArrowRight className="w-4 h-4 text-[#003BE2]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Professional Growth Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] w-[450px] sm:w-[672px] h-[450px] sm:h-[672px] bg-[#CBFC01] opacity-15 rounded-full blur-[100px] z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          {/* Visual Container */}
          <div className="flex-1 relative w-full max-w-[480px] lg:max-w-none aspect-square order-2 lg:order-1">
             <div className="w-full h-full rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white border border-shuttle-gray-100 flex items-end">
               <div className="relative w-[90%] h-[90%] mx-auto mb-0">
                 <Image src="/hero.png" alt="Growth Image" fill className="object-contain object-bottom" />
               </div>
             </div>
          </div>

          {/* Text & Stats */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003BE2]/10 text-[#003BE2] font-semibold text-xs sm:text-sm w-fit">
              <span>Career Acceleration</span>
            </div>

            <h2 className="text-shuttle-gray-950 font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-shuttle-gray-700 text-base sm:text-lg leading-relaxed max-w-lg font-satoshi">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills or embark on a new career path entirely, we have the resources you need.
            </p>
            
            {/* Stat Counters with responsive grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 border-t border-shuttle-gray-200">
              <div className="group cursor-default">
                <p className="text-[#003BE2] font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl group-hover:scale-105 transition-transform">12K</p>
                <p className="text-shuttle-gray-600 text-xs sm:text-sm lg:text-base mt-1 font-satoshi font-medium">Students</p>
              </div>
              <div className="group cursor-default">
                <p className="text-[#003BE2] font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl group-hover:scale-105 transition-transform">70+</p>
                <p className="text-shuttle-gray-600 text-xs sm:text-sm lg:text-base mt-1 font-satoshi font-medium">Courses</p>
              </div>
              <div className="group cursor-default">
                <p className="text-[#003BE2] font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl group-hover:scale-105 transition-transform">16</p>
                <p className="text-shuttle-gray-600 text-xs sm:text-sm lg:text-base mt-1 font-satoshi font-medium">Creators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features Section - Interactive Tabs */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-semibold text-shuttle-gray-950 mb-6 sm:mb-8 leading-[1.2]">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-base sm:text-lg text-shuttle-gray-700 leading-relaxed mb-8 max-w-xl font-satoshi">
              <strong className="text-shuttle-gray-950">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            
            {/* Interactive Feature List */}
            <div className="space-y-4">
              {FEATURE_POINTS.map((item, index) => {
                const isSelected = activeFeature === index;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActiveFeature(index)}
                    className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-[#F8F9FB] border-[#003BE2]/30 shadow-sm"
                        : "border-transparent hover:bg-shuttle-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isSelected ? "bg-[#003BE2] text-white" : "bg-[#CBFC01] text-shuttle-gray-950"
                      }`}>
                        ✓
                      </div>
                      <span className="text-base sm:text-lg font-medium text-shuttle-gray-950 font-satoshi">
                        {item.title}
                      </span>
                    </div>
                    {isSelected && (
                      <p className="text-sm sm:text-base text-shuttle-gray-500 font-satoshi mt-2 pl-10 sm:pl-11 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-md mx-auto aspect-[3/4]">
            <div className="w-full h-full rounded-[24px] sm:rounded-[32px] relative overflow-hidden shadow-2xl bg-[#CBFC01]/10 border border-shuttle-gray-100 group">
               <Image 
                 src="/feature.png" 
                 alt="Dashboard Feature" 
                 fill 
                 className="object-contain object-top transition-transform duration-500 group-hover:scale-102" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Categories Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-shuttle-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-semibold text-shuttle-gray-950 leading-tight">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-shuttle-gray-500 mt-4 max-w-3xl mx-auto font-satoshi px-2">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone.
            </p>
          </div>
          
          {/* Responsive Categories Grid with Clickable Search Targets */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
            {[
              { name: 'Development', icon: Code },
              { name: 'Business', icon: Briefcase },
              { name: 'IT & Software', icon: Monitor },
              { name: 'Design', icon: PenTool },
              { name: 'Marketing', icon: Megaphone },
              { name: 'Photography', icon: Camera },
              { name: 'Health & Fitness', icon: HeartPulse },
              { name: 'Music', icon: Music },
              { name: 'Teaching', icon: BookOpen },
              { name: 'Academics', icon: GraduationCap },
              { name: 'Language', icon: Languages },
              { name: 'Lifestyle', icon: Coffee }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/search?category=${encodeURIComponent(category.name)}`}
                className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-3 sm:gap-4 hover:shadow-lg hover:-translate-y-1.5 active:scale-95 transition-all cursor-pointer group border border-transparent hover:border-[#003BE2]/20"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-shuttle-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#CBFC01] transition-colors">
                  <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#003BE2] transition-transform group-hover:scale-110" strokeWidth={1.75} />
                </div>
                <h3 className="font-medium text-shuttle-gray-950 text-center text-xs sm:text-sm font-satoshi group-hover:text-[#003BE2] transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section (CTA_Frame) */}
      <section className="bg-[#003BE2] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 text-center text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-poppins font-semibold mb-6 sm:mb-8 max-w-3xl leading-[1.2]">
              Unlock Your Potential as a{" "}
              <span className="text-[#CBFC01] relative inline-block">
                Creator
                <svg className="absolute -bottom-2 left-0 w-full text-[#CBFC01]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/>
                </svg>
              </span>{" "}
              with ByteSpace
            </h2>
            <p className="text-[15px] sm:text-[18px] lg:text-[20px] text-shuttle-gray-50 leading-relaxed mb-8 sm:mb-12 opacity-90 max-w-3xl font-satoshi font-light px-2">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators.
            </p>
            <Link 
              href="/register" 
              className="bg-[#CBFC01] text-shuttle-gray-950 font-bold px-8 sm:px-12 py-3.5 sm:py-5 text-base sm:text-xl rounded-full hover:bg-white transition-all shadow-[0_4px_14px_0_rgba(203,252,1,0.39)] hover:shadow-[0_6px_20px_rgba(203,252,1,0.23)] hover:scale-105 active:scale-95 font-satoshi flex items-center gap-2"
            >
              <span>Join as Creator</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
         </div>

         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-[#CBFC01] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none" />
         <div className="absolute bottom-0 left-[10%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 pointer-events-none" />
      </section>

      {/* 8. Testimonials Section with Interactive Reaction Counters */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-poppins font-semibold text-shuttle-gray-950 mb-12 sm:mb-16">
            Hear from Our Community
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left relative z-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-shuttle-gray-100 flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-shuttle-gray-100 rounded-full flex items-center justify-center font-bold text-shuttle-gray-950 text-xl font-poppins">S</div>
                  <div>
                    <h4 className="font-bold text-shuttle-gray-950 text-[16px] font-satoshi">Sarah M.</h4>
                    <p className="text-[#003BE2] text-[13px] font-medium font-satoshi mt-0.5">Enthusiastic Learner</p>
                  </div>
                </div>
                <p className="text-shuttle-gray-600 leading-[1.6] text-[14px] sm:text-[15px] font-satoshi">
                  ByteSpace completely changed my career trajectory. The courses are top-notch and the community is incredibly supportive!
                </p>
              </div>

              {/* Reaction button */}
              <div className="mt-6 pt-4 border-t border-shuttle-gray-100 flex items-center justify-between">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <button
                  onClick={() => toggleTestimonialLike(1)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all active:scale-95 ${
                    testimonialLikes[1]?.liked
                      ? "bg-[#CBFC01] text-shuttle-gray-950"
                      : "bg-shuttle-gray-50 text-shuttle-gray-600 hover:bg-shuttle-gray-100"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{testimonialLikes[1]?.count || 0}</span>
                </button>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-shuttle-gray-100 flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-[-30px] right-[-30px] w-32 h-32 bg-[#CBFC01] opacity-20 rounded-full pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6 relative z-10">
                  <div className="w-12 h-12 bg-shuttle-gray-100 rounded-full flex items-center justify-center font-bold text-shuttle-gray-950 text-xl font-poppins">J</div>
                  <div>
                    <h4 className="font-bold text-shuttle-gray-950 text-[16px] font-satoshi">James L.</h4>
                    <p className="text-[#003BE2] text-[13px] font-medium font-satoshi mt-0.5">Lifelong Learner</p>
                  </div>
                </div>
                <p className="text-shuttle-gray-600 leading-[1.6] text-[14px] sm:text-[15px] font-satoshi relative z-10">
                  The platform is so easy to use. I love the variety of categories and the quality of the creators. Highly recommended.
                </p>
              </div>

              {/* Reaction button */}
              <div className="mt-6 pt-4 border-t border-shuttle-gray-100 flex items-center justify-between relative z-10">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <button
                  onClick={() => toggleTestimonialLike(2)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all active:scale-95 ${
                    testimonialLikes[2]?.liked
                      ? "bg-[#CBFC01] text-shuttle-gray-950"
                      : "bg-shuttle-gray-50 text-shuttle-gray-600 hover:bg-shuttle-gray-100"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{testimonialLikes[2]?.count || 0}</span>
                </button>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-shuttle-gray-100 flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-shuttle-gray-100 rounded-full flex items-center justify-center font-bold text-shuttle-gray-950 text-xl font-poppins">A</div>
                  <div>
                    <h4 className="font-bold text-shuttle-gray-950 text-[16px] font-satoshi">Alex B.</h4>
                    <p className="text-[#003BE2] text-[13px] font-medium font-satoshi mt-0.5">Inspired Creator</p>
                  </div>
                </div>
                <p className="text-shuttle-gray-600 leading-[1.6] text-[14px] sm:text-[15px] font-satoshi">
                  As a creator, ByteSpace gives me all the tools I need to share my knowledge and monetize my passion effortlessly.
                </p>
              </div>

              {/* Reaction button */}
              <div className="mt-6 pt-4 border-t border-shuttle-gray-100 flex items-center justify-between">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <button
                  onClick={() => toggleTestimonialLike(3)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all active:scale-95 ${
                    testimonialLikes[3]?.liked
                      ? "bg-[#CBFC01] text-shuttle-gray-950"
                      : "bg-shuttle-gray-50 text-shuttle-gray-600 hover:bg-shuttle-gray-100"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{testimonialLikes[3]?.count || 0}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
