import Link from "next/link";

export default function CourseReviews() {
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
                <span className="text-shuttle-gray-400">(120 Reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-shuttle-gray-200">
                <div className="w-5 h-5 bg-shuttle-gray-400 rounded-full opacity-50"></div>
                12K Students
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
            <Link href="/course-details" className="px-6 py-4 border-b-2 border-transparent text-shuttle-gray-400 hover:text-shuttle-gray-950 font-medium whitespace-nowrap transition-colors">Overview</Link>
            <Link href="/course-details" className="px-6 py-4 border-b-2 border-transparent text-shuttle-gray-400 hover:text-shuttle-gray-950 font-medium whitespace-nowrap transition-colors">Curriculum</Link>
            <button className="px-6 py-4 border-b-2 border-persian-blue-800 text-persian-blue-800 font-bold whitespace-nowrap">Reviews</button>
            <Link href="/course-details" className="px-6 py-4 border-b-2 border-transparent text-shuttle-gray-400 hover:text-shuttle-gray-950 font-medium whitespace-nowrap transition-colors">Instructor</Link>
          </div>

          {/* Student Feedback */}
          <div>
            <h2 className="text-2xl font-poppins font-semibold text-shuttle-gray-950 mb-8">Student Feedback</h2>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="flex flex-col items-center justify-center bg-shuttle-gray-50 p-8 rounded-2xl md:w-48 flex-shrink-0">
                <p className="text-6xl font-poppins font-bold text-shuttle-gray-950 mb-2">4.8</p>
                <div className="flex text-electric-lime-400 text-xl mb-2">★★★★★</div>
                <p className="text-shuttle-gray-400 font-medium text-sm">Course Rating</p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center gap-2">
                {[
                  { stars: 5, percent: 75 },
                  { stars: 4, percent: 20 },
                  { stars: 3, percent: 3 },
                  { stars: 2, percent: 1 },
                  { stars: 1, percent: 1 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 flex items-center gap-1 text-shuttle-gray-700 text-sm">
                       <span>{item.stars}</span>
                       <span className="text-electric-lime-400">★</span>
                    </div>
                    <div className="flex-1 h-2 bg-shuttle-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-persian-blue-800" style={{ width: `${item.percent}%` }}></div>
                    </div>
                    <div className="w-10 text-right text-shuttle-gray-400 text-sm">{item.percent}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-8">
              {[1, 2, 3, 4].map((review) => (
                <div key={review} className="border-b border-shuttle-gray-100 pb-8 last:border-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-shuttle-gray-200 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-shuttle-gray-950">Emily Chen</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex text-electric-lime-400 text-sm">★★★★★</div>
                          <span className="text-xs text-shuttle-gray-400">2 weeks ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-shuttle-gray-700 leading-relaxed">
                    This course is absolutely fantastic! The instructor explains everything clearly and the projects are very practical. I feel confident enough to start applying for UI/UX roles now. Highly recommended.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="border border-shuttle-gray-200 text-shuttle-gray-950 font-medium px-6 py-3 rounded-xl hover:bg-shuttle-gray-50 transition-colors">Load More Reviews</button>
            </div>
          </div>
        </div>
        
        {/* Right Column - Sticky Purchase Card */}
        <aside className="w-full lg:w-96 flex-shrink-0">
          <div className="sticky top-32 bg-white rounded-2xl shadow-xl overflow-hidden border border-shuttle-gray-100">
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
              </div>
              <Link href="/course-lessons" className="block w-full bg-persian-blue-800 text-white text-center font-bold py-4 rounded-xl hover:bg-persian-blue-800/90 transition-colors shadow-sm">
                Enroll Now
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
