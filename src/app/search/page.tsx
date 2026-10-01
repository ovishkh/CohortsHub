import Image from "next/image";
import Link from "next/link";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-shuttle-gray-50 pt-24 pb-20 px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-poppins font-semibold text-shuttle-gray-950 mb-6">Explore Courses</h1>
          
          {/* Search Bar & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Search for courses, topics, creators..." 
                className="w-full border border-shuttle-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-persian-blue-800 transition-colors shadow-sm"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-shuttle-gray-400 opacity-50"></div>
            </div>
            
            <button className="bg-white border border-shuttle-gray-200 text-shuttle-gray-950 font-medium px-8 py-4 rounded-xl hover:bg-shuttle-gray-50 transition-colors shadow-sm flex items-center gap-2">
              <div className="w-5 h-5 bg-shuttle-gray-950 opacity-20"></div>
              Filters
            </button>
          </div>

          <div className="flex items-center gap-2 text-shuttle-gray-700">
            <span className="font-semibold text-shuttle-gray-950">24</span> results found for <span className="italic">"design"</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-bold text-shuttle-gray-950 mb-4">Category</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" defaultChecked />
                  <span className="text-shuttle-gray-700">Design (12)</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" />
                  <span className="text-shuttle-gray-700">Development (4)</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" />
                  <span className="text-shuttle-gray-700">Marketing (8)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-shuttle-gray-950 mb-4">Level</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" />
                  <span className="text-shuttle-gray-700">Beginner</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" defaultChecked />
                  <span className="text-shuttle-gray-700">Intermediate</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" />
                  <span className="text-shuttle-gray-700">Advanced</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-shuttle-gray-950 mb-4">Price</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" />
                  <span className="text-shuttle-gray-700">Free</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded text-persian-blue-800 focus:ring-persian-blue-800" defaultChecked />
                  <span className="text-shuttle-gray-700">Paid</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Search Results Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link key={item} href="/course-details" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-full aspect-[4/3] bg-shuttle-gray-200 relative">
                     {/* Thumbnail Placeholder */}
                     <div className="absolute inset-0 bg-persian-blue-800/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-persian-blue-800 bg-persian-blue-800/10 px-2 py-1 rounded">Design</span>
                      <span className="text-xs text-shuttle-gray-400">Intermediate</span>
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-shuttle-gray-950 mb-2 line-clamp-2 group-hover:text-persian-blue-800 transition-colors">
                      Mastering UI/UX Design Fundamentals
                    </h3>
                    <p className="text-sm text-shuttle-gray-400 mb-4">By Alex Johnson</p>
                    
                    <div className="flex items-center justify-between border-t border-shuttle-gray-100 pt-4">
                      <div className="flex items-center gap-1">
                        <span className="text-electric-lime-400 text-sm">★</span>
                        <span className="text-sm font-bold text-shuttle-gray-950">4.8</span>
                        <span className="text-xs text-shuttle-gray-400">(120)</span>
                      </div>
                      <span className="font-bold text-shuttle-gray-950">$49.99</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="w-10 h-10 rounded-lg border border-shuttle-gray-200 flex items-center justify-center text-shuttle-gray-400 hover:bg-shuttle-gray-50 transition-colors">&lt;</button>
              <button className="w-10 h-10 rounded-lg bg-persian-blue-800 text-white font-medium flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-lg border border-shuttle-gray-200 flex items-center justify-center text-shuttle-gray-700 hover:bg-shuttle-gray-50 transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg border border-shuttle-gray-200 flex items-center justify-center text-shuttle-gray-700 hover:bg-shuttle-gray-50 transition-colors">3</button>
              <span className="text-shuttle-gray-400">...</span>
              <button className="w-10 h-10 rounded-lg border border-shuttle-gray-200 flex items-center justify-center text-shuttle-gray-400 hover:bg-shuttle-gray-50 transition-colors">&gt;</button>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
