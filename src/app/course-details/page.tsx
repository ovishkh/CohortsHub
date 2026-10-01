import Image from "next/image";
import Link from "next/link";

export default function CourseDetails() {
  return (
    <div className="min-h-screen bg-shuttle-gray-50 pb-24">
      
      {/* Course Hero */}
      <div className="bg-black-950 pt-32 pb-40 px-16 text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/search" className="text-shuttle-gray-400 hover:text-white transition-colors text-sm">Design</Link>
              <span className="text-shuttle-gray-400 text-sm">&gt;</span>
              <span className="text-shuttle-gray-200 text-sm">UI/UX Design</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold mb-6 leading-tight">
              Mastering UI/UX Design Fundamentals
            </h1>
            <p className="text-lg text-shuttle-gray-200 mb-8 leading-relaxed">
              Learn the principles of user interface and user experience design from scratch. Build practical projects and create a stunning portfolio.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-electric-lime-400 text-lg">★</span>
                <span className="font-bold text-white text-base">4.8</span>
                <Link href="/course-reviews" className="text-shuttle-gray-400 underline hover:text-white">(120 Reviews)</Link>
              </div>
              <div className="flex items-center gap-2 text-shuttle-gray-200">
                <div className="w-5 h-5 bg-shuttle-gray-400 rounded-full opacity-50"></div>
                12K Students
              </div>
              <div className="flex items-center gap-2 text-shuttle-gray-200">
                <div className="w-5 h-5 bg-shuttle-gray-400 rounded-full opacity-50"></div>
                Intermediate Level
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-shuttle-gray-800 rounded-full"></div>
              <div>
                <p className="text-shuttle-gray-400 text-sm">Created by</p>
                <Link href="/creator-profile" className="font-bold text-white hover:underline">Alex Johnson</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-16 -mt-24 relative z-20 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column - Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-10 border border-shuttle-gray-100">
          
          {/* Tabs */}
          <div className="flex border-b border-shuttle-gray-200 mb-10 overflow-x-auto hide-scrollbar">
            <button className="px-6 py-4 border-b-2 border-persian-blue-800 text-persian-blue-800 font-bold whitespace-nowrap">Overview</button>
            <button className="px-6 py-4 border-b-2 border-transparent text-shuttle-gray-400 hover:text-shuttle-gray-950 font-medium whitespace-nowrap transition-colors">Curriculum</button>
            <button className="px-6 py-4 border-b-2 border-transparent text-shuttle-gray-400 hover:text-shuttle-gray-950 font-medium whitespace-nowrap transition-colors">Reviews</button>
            <button className="px-6 py-4 border-b-2 border-transparent text-shuttle-gray-400 hover:text-shuttle-gray-950 font-medium whitespace-nowrap transition-colors">Instructor</button>
          </div>

          {/* About Course */}
          <div className="mb-12">
            <h2 className="text-2xl font-poppins font-semibold text-shuttle-gray-950 mb-4">About This Course</h2>
            <div className="space-y-4 text-shuttle-gray-700 leading-relaxed">
              <p>This comprehensive course is designed to take you from a complete beginner to a confident UI/UX designer. You'll learn the core principles of design thinking, user research, wireframing, and high-fidelity prototyping using industry-standard tools.</p>
              <p>Throughout the course, we'll focus on practical application. You won't just learn theory; you'll build real-world projects that you can showcase in your portfolio to land your first design role.</p>
            </div>
          </div>

          {/* What you'll learn */}
          <div className="mb-12">
            <h2 className="text-2xl font-poppins font-semibold text-shuttle-gray-950 mb-6">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Understand the core principles of UI/UX design.",
                "Conduct user research and create user personas.",
                "Design wireframes and interactive prototypes in Figma.",
                "Master typography, color theory, and layout.",
                "Build a professional design portfolio.",
                "Prepare for UI/UX design interviews."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-electric-lime-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-electric-lime-400 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-shuttle-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Preview */}
          <div>
            <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-poppins font-semibold text-shuttle-gray-950">Curriculum</h2>
               <span className="text-shuttle-gray-400 text-sm">24 Lessons • 12h 30m</span>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Module 1: Introduction to UI/UX Design", lessons: 4, duration: "1h 15m" },
                { title: "Module 2: User Research & Personas", lessons: 5, duration: "2h 30m" },
                { title: "Module 3: Wireframing Fundamentals", lessons: 6, duration: "3h 45m" },
                { title: "Module 4: High-Fidelity Design in Figma", lessons: 9, duration: "5h 00m" },
              ].map((module, i) => (
                <div key={i} className="border border-shuttle-gray-200 rounded-xl overflow-hidden">
                  <button className="w-full bg-shuttle-gray-50 px-6 py-4 flex items-center justify-between hover:bg-shuttle-gray-100 transition-colors text-left">
                    <span className="font-bold text-shuttle-gray-950">{module.title}</span>
                    <div className="flex items-center gap-4 text-sm text-shuttle-gray-400">
                      <span>{module.lessons} Lessons</span>
                      <span>{module.duration}</span>
                      <span className="text-lg">↓</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
               <Link href="/course-lessons" className="text-persian-blue-800 font-medium hover:underline">View Full Curriculum</Link>
            </div>
          </div>

        </div>
        
        {/* Right Column - Sticky Purchase Card */}
        <aside className="w-full lg:w-96 flex-shrink-0">
          <div className="sticky top-32 bg-white rounded-2xl shadow-xl overflow-hidden border border-shuttle-gray-100">
            {/* Video Preview */}
            <div className="w-full aspect-video bg-shuttle-gray-800 relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-persian-blue-800 border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-poppins font-bold text-shuttle-gray-950">$49.99</span>
                <span className="text-lg text-shuttle-gray-400 line-through mb-1">$99.99</span>
              </div>

              <Link href="/course-lessons" className="block w-full bg-persian-blue-800 text-white text-center font-bold py-4 rounded-xl hover:bg-persian-blue-800/90 transition-colors mb-4 shadow-sm">
                Enroll Now
              </Link>
              
              <p className="text-center text-sm text-shuttle-gray-400 mb-8">30-Day Money-Back Guarantee</p>

              <div className="space-y-4">
                <h4 className="font-bold text-shuttle-gray-950 mb-2">This course includes:</h4>
                {[
                  "12.5 hours on-demand video",
                  "24 downloadable resources",
                  "Full lifetime access",
                  "Access on mobile and TV",
                  "Certificate of completion"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-shuttle-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 bg-shuttle-gray-400 rounded-sm"></div>
                    </div>
                    <span className="text-sm text-shuttle-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
