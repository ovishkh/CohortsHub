import Image from "next/image";
import Link from "next/link";

export default function CreatorProfile() {
  return (
    <div className="min-h-screen bg-shuttle-gray-50 pt-24 pb-24 px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Sidebar - Creator Info */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center sticky top-24 border border-shuttle-gray-100">
            <div className="w-32 h-32 mx-auto bg-shuttle-gray-200 rounded-full mb-6 relative overflow-hidden">
               {/* Avatar Placeholder */}
            </div>
            
            <h1 className="text-2xl font-poppins font-bold text-shuttle-gray-950 mb-2">Alex Johnson</h1>
            <p className="text-shuttle-gray-400 font-medium mb-6">Senior UI/UX Designer</p>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-xl font-bold text-shuttle-gray-950">12K</p>
                <p className="text-xs text-shuttle-gray-400 mt-1">Students</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-shuttle-gray-950">15</p>
                <p className="text-xs text-shuttle-gray-400 mt-1">Courses</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-shuttle-gray-950">4.8</p>
                <p className="text-xs text-shuttle-gray-400 mt-1">Rating</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8">
               {/* Social Icons Placeholder */}
               <div className="w-10 h-10 rounded-full bg-shuttle-gray-50 flex items-center justify-center text-shuttle-gray-400 hover:text-persian-blue-800 hover:bg-persian-blue-800/10 cursor-pointer transition-colors">TW</div>
               <div className="w-10 h-10 rounded-full bg-shuttle-gray-50 flex items-center justify-center text-shuttle-gray-400 hover:text-persian-blue-800 hover:bg-persian-blue-800/10 cursor-pointer transition-colors">IN</div>
               <div className="w-10 h-10 rounded-full bg-shuttle-gray-50 flex items-center justify-center text-shuttle-gray-400 hover:text-persian-blue-800 hover:bg-persian-blue-800/10 cursor-pointer transition-colors">IG</div>
            </div>

            <div className="text-left">
              <h3 className="font-bold text-shuttle-gray-950 mb-2">About me</h3>
              <p className="text-sm text-shuttle-gray-700 leading-relaxed">
                Hi! I'm Alex, a passionate UI/UX designer with over 8 years of experience in creating digital products. I love sharing my knowledge and helping others break into the design industry. Let's create something amazing together!
              </p>
            </div>
          </div>
        </aside>

        {/* Right Main Content - Courses */}
        <main className="flex-1">
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-semibold text-shuttle-gray-950">Courses by Alex Johnson</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((course) => (
              <Link key={course} href="/course-details" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-shuttle-gray-100">
                <div className="w-full aspect-video bg-shuttle-gray-200 relative">
                  {/* Thumbnail Placeholder */}
                  <div className="absolute inset-0 bg-persian-blue-800/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-persian-blue-800 bg-persian-blue-800/10 px-2 py-1 rounded">Design</span>
                    <div className="flex items-center gap-1">
                      <span className="text-electric-lime-400 text-sm">★</span>
                      <span className="text-sm font-bold text-shuttle-gray-950">4.8</span>
                    </div>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-shuttle-gray-950 mb-4 line-clamp-2 group-hover:text-persian-blue-800 transition-colors">
                    Mastering UI/UX Design Fundamentals
                  </h3>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-shuttle-gray-100">
                    <span className="text-sm text-shuttle-gray-400">12h 30m • 24 Lessons</span>
                    <span className="font-bold text-shuttle-gray-950">$49.99</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="border border-shuttle-gray-200 bg-white text-shuttle-gray-950 font-medium px-8 py-3 rounded-xl hover:bg-shuttle-gray-50 transition-colors shadow-sm">Load More</button>
          </div>
        </main>

      </div>
    </div>
  );
}
