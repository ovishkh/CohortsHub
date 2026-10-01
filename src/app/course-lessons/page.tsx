import Link from "next/link";

export default function CourseLessons() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex flex-col lg:flex-row">
      
      {/* Main Content - Video Player */}
      <main className="flex-1 flex flex-col bg-shuttle-gray-950">
        
        {/* Top bar for mobile/desktop */}
        <div className="p-4 flex items-center justify-between border-b border-shuttle-gray-800 text-white">
          <div className="flex items-center gap-4">
            <Link href="/course-details" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-shuttle-gray-800 transition-colors">
              <span className="text-xl">&larr;</span>
            </Link>
            <h1 className="font-bold truncate max-w-sm md:max-w-md lg:max-w-xl">Mastering UI/UX Design Fundamentals</h1>
          </div>
        </div>

        {/* Video Area */}
        <div className="w-full aspect-video bg-black flex-shrink-0 relative flex items-center justify-center group">
          <div className="absolute inset-0 bg-persian-blue-800/10"></div>
          {/* Play Button */}
          <div className="w-20 h-20 bg-persian-blue-800 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform cursor-pointer relative z-10">
             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
          </div>
          
          {/* Video Controls Mock */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-full h-1 bg-shuttle-gray-700 mb-4 rounded cursor-pointer relative">
              <div className="absolute top-0 left-0 h-full bg-persian-blue-800 w-1/3 rounded"></div>
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-between items-center text-white text-sm">
              <div className="flex items-center gap-4">
                <span>Play</span>
                <span>04:12 / 15:30</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Settings</span>
                <span>Fullscreen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Info */}
        <div className="p-8 text-white flex-1 overflow-y-auto">
          <h2 className="text-2xl font-poppins font-semibold mb-2">1. Introduction to UI/UX</h2>
          <p className="text-shuttle-gray-400 mb-8">Module 1: Introduction to UI/UX Design</p>
          
          <div className="bg-shuttle-gray-900 rounded-xl p-6 border border-shuttle-gray-800">
            <h3 className="font-bold mb-4">Lesson Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-shuttle-gray-800 flex items-center justify-center text-shuttle-gray-400 text-sm">PDF</div>
                <a href="#" className="text-shuttle-gray-200 hover:text-white underline">Presentation_Slides.pdf</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-shuttle-gray-800 flex items-center justify-center text-shuttle-gray-400 text-sm">ZIP</div>
                <a href="#" className="text-shuttle-gray-200 hover:text-white underline">Starter_Files.zip</a>
              </li>
            </ul>
          </div>
        </div>

      </main>

      {/* Sidebar - Curriculum */}
      <aside className="w-full lg:w-96 flex-shrink-0 bg-white border-l border-shuttle-gray-200 flex flex-col h-full max-h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-6 border-b border-shuttle-gray-200 sticky top-0 bg-white z-10">
          <h2 className="font-poppins font-semibold text-lg text-shuttle-gray-950">Course Content</h2>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-shuttle-gray-400">12% Complete</span>
            <span className="text-persian-blue-800 font-medium">3/24 Lessons</span>
          </div>
          <div className="w-full h-1 bg-shuttle-gray-100 mt-2 rounded-full overflow-hidden">
             <div className="h-full bg-persian-blue-800 w-[12%]"></div>
          </div>
        </div>
        
        <div className="flex-1 pb-20">
          {/* Module 1 */}
          <div className="border-b border-shuttle-gray-100">
            <div className="p-4 bg-shuttle-gray-50 flex items-center justify-between cursor-pointer">
              <span className="font-bold text-shuttle-gray-950 text-sm">Module 1: Introduction to UI/UX Design</span>
              <span className="text-shuttle-gray-400">↑</span>
            </div>
            <div className="flex flex-col">
              <button className="p-4 flex items-start gap-3 bg-persian-blue-800/5 hover:bg-persian-blue-800/10 text-left transition-colors">
                <div className="mt-1 w-4 h-4 rounded-full border-2 border-persian-blue-800 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-persian-blue-800">1. Introduction to UI/UX</p>
                  <p className="text-xs text-shuttle-gray-400 mt-1">Video • 15:30</p>
                </div>
              </button>
              <button className="p-4 flex items-start gap-3 hover:bg-shuttle-gray-50 text-left transition-colors">
                <div className="mt-1 w-4 h-4 rounded-full border-2 border-shuttle-gray-300 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-shuttle-gray-700">2. Design Thinking Process</p>
                  <p className="text-xs text-shuttle-gray-400 mt-1">Video • 22:15</p>
                </div>
              </button>
              <button className="p-4 flex items-start gap-3 hover:bg-shuttle-gray-50 text-left transition-colors">
                <div className="mt-1 w-4 h-4 rounded-full border-2 border-shuttle-gray-300 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-shuttle-gray-700">3. Tools of the Trade</p>
                  <p className="text-xs text-shuttle-gray-400 mt-1">Article • 5 min read</p>
                </div>
              </button>
            </div>
          </div>

          {/* Module 2 */}
          <div className="border-b border-shuttle-gray-100">
            <div className="p-4 bg-white hover:bg-shuttle-gray-50 transition-colors flex items-center justify-between cursor-pointer">
              <span className="font-bold text-shuttle-gray-950 text-sm">Module 2: User Research & Personas</span>
              <span className="text-shuttle-gray-400">↓</span>
            </div>
          </div>
          
          {/* Module 3 */}
          <div className="border-b border-shuttle-gray-100">
            <div className="p-4 bg-white hover:bg-shuttle-gray-50 transition-colors flex items-center justify-between cursor-pointer">
              <span className="font-bold text-shuttle-gray-950 text-sm">Module 3: Wireframing Fundamentals</span>
              <span className="text-shuttle-gray-400">↓</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
