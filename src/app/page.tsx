import Image from "next/image";
import Link from "next/link";
import { Code, Briefcase, Monitor, PenTool, Megaphone, Camera, HeartPulse, Music, BookOpen, GraduationCap, Languages, Coffee } from "lucide-react";

function CourseCard({ imageSrc, title, author, rating, price }: { imageSrc: string, title: string, author: string, rating: number, price: number }) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-shuttle-gray-200 hover:shadow-xl transition-shadow flex flex-col group cursor-pointer w-[373px] h-[384px] mx-auto p-4 shadow-sm">
      <div className="relative h-[210px] w-full mx-auto rounded-[20px] overflow-hidden shrink-0">
        <Image src={imageSrc} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        
        {/* Overlay stats */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="bg-white/95 backdrop-blur text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 text-shuttle-gray-950 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#003BE2]"></span> 17 Lessons
          </span>
          <span className="bg-white/95 backdrop-blur text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 text-shuttle-gray-950 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span> 2 hrs 15 mins
          </span>
          <span className="bg-white/95 backdrop-blur text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 text-shuttle-gray-950 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#CBFC01]"></span> 59 Comments
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-4 px-1">
        <div className="flex justify-between items-start gap-4 mb-1">
          <h3 className="font-bold text-shuttle-gray-950 text-[18px] leading-tight line-clamp-2">{title}</h3>
          <div className="flex items-center gap-1 shrink-0 mt-0.5">
            <span className="text-[13px] font-bold text-shuttle-gray-950">4.5</span>
            <span className="text-yellow-400 text-[14px]">★</span>
          </div>
        </div>
        
        <p className="text-shuttle-gray-400 text-[13px] mb-auto font-satoshi flex items-center gap-1">
          by <span className="font-medium text-[#003BE2]">{author}</span>
        </p>
        
        <div className="flex justify-between items-end mt-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              <span className="w-1 h-3 bg-[#CBFC01] rounded-sm block"></span>
              <span className="text-[11px] font-medium text-shuttle-gray-400 uppercase tracking-wider">Beginner</span>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-[22px] font-bold text-[#003BE2] leading-none">${price}</span>
              <span className="text-shuttle-gray-400 text-[12px] font-satoshi line-through mb-0.5">${price + 15}</span>
            </div>
          </div>
          
          <div className="flex -space-x-2">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-shuttle-gray-200 relative overflow-hidden shadow-sm">
                <Image src="/hero.png" alt="Avatar" fill className="object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#CBFC01] flex items-center justify-center text-[10px] font-bold text-shuttle-gray-950 z-10 relative shadow-sm">2k+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section (Hero_Frame #1:1695 - 1440x1024) */}
      <section className="relative bg-[#003BE2] w-full min-h-[850px] lg:h-[1024px] overflow-hidden flex flex-col items-center pt-28 lg:pt-[140px] pb-0">
        {/* Faint Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-12 z-0 pointer-events-none"></div>

        {/* Hero Content Wrapper (Headline & Search) */}
        <div className="relative z-30 flex flex-col items-center text-center w-full max-w-[1200px] px-4">
          <h1 className="text-white font-poppins font-semibold text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight whitespace-pre-line mb-4 lg:mb-6">
            {`Get Access to Hundreds\nCourses Available`}
          </h1>
          
          <p className="text-white/80 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-2xl font-satoshi mb-8 lg:mb-12">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-2 rounded-full flex items-center justify-between w-full max-w-[720px] shadow-2xl relative z-40">
            <div className="flex items-center gap-3 px-6 w-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-shuttle-gray-400 flex-shrink-0 w-6 h-6">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.0004 21L16.6504 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Course, topic, creator" 
                className="bg-transparent border-none outline-none text-shuttle-gray-600 w-full placeholder:text-shuttle-gray-400 font-satoshi text-[16px] h-12"
              />
            </div>
            <button className="bg-[#CBFC01] text-shuttle-gray-950 font-bold px-8 py-3.5 rounded-full whitespace-nowrap hover:bg-[#b0d900] transition-colors text-[16px] cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Hero Visuals Container - Clamped to 1440px Figma Frame */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full max-w-[1440px] h-full mx-auto">
            {/* Exact Figma Lime Circle Dome (#1:1866: x: 145, y: 582, w: 1149, h: 1149) */}
            <div className="absolute top-[480px] lg:top-[582px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] lg:w-[1149px] h-[700px] sm:h-[900px] lg:h-[1149px] rounded-full bg-[#CBFC01] z-0 pointer-events-none shadow-[0_0_80px_rgba(203,252,1,0.15)]" />

            {/* 3D Ornaments (#46:79: x: -118, y: 221, w: 1719, h: 803) */}
            <div className="absolute top-[200px] lg:top-[221px] left-1/2 -translate-x-1/2 w-[1000px] sm:w-[1300px] lg:w-[1550px] xl:w-[1719px] h-[650px] lg:h-[803px] z-10 pointer-events-none">
              <Image src="/3d-ornaments.png" alt="3D Shapes" fill className="object-contain" priority />
            </div>

            {/* Student Boy Graphic (#1:1796: x: 431, y: 512, w: 578, h: 541) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[460px] sm:w-[520px] lg:w-[578px] h-[440px] sm:h-[490px] lg:h-[512px] z-20 pointer-events-none">
              <Image src="/hero.png" alt="Hero Student" fill className="object-contain object-bottom" priority />
            </div>

            {/* Floating UI Card 1: UI/UX Design (#46:126: x: 404, y: 639) */}
            <div className="pointer-events-auto absolute top-[520px] sm:top-[570px] lg:top-[639px] left-[5%] sm:left-[10%] lg:left-1/2 lg:-translate-x-[316px] bg-white/95 backdrop-blur-md rounded-[20px] p-4 shadow-[0px_20px_40px_rgba(0,0,0,0.15)] z-30 flex items-center gap-4 w-[260px] sm:w-[280px] transition-transform duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-shuttle-gray-100 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.071 5.929l4 4M5.929 14.071l4 4" stroke="#003BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.515 15.485l9.9-9.9a2.828 2.828 0 014 0 2.828 2.828 0 010 4l-9.9 9.9a2.828 2.828 0 01-4 0 2.828 2.828 0 010-4z" stroke="#003BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-shuttle-gray-950 font-satoshi text-[15px] mb-0.5">UI/UX Design</p>
                <p className="text-shuttle-gray-400 text-[12px]">200 Courses • 1000+ Students</p>
              </div>
            </div>

            {/* Floating UI Card 2: Learning Progress (#1:1797: x: 842, y: 651) */}
            <div className="pointer-events-auto absolute top-[530px] sm:top-[580px] lg:top-[651px] right-[5%] sm:right-[10%] lg:right-auto lg:left-1/2 lg:translate-x-[122px] bg-white/95 backdrop-blur-md rounded-[20px] p-5 shadow-[0px_20px_40px_rgba(0,0,0,0.15)] z-30 w-[220px] sm:w-[240px] transition-transform duration-300 hover:scale-105">
              <p className="font-bold text-shuttle-gray-950 font-satoshi text-[14px] mb-1">Learning Progress</p>
              <p className="text-[32px] font-poppins font-bold text-shuttle-gray-950 mb-3 leading-tight">55%</p>
              <div className="w-full bg-shuttle-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#CBFC01] w-[55%] h-full rounded-full"></div>
              </div>
            </div>

            {/* Floating UI Card 3: Happy Students (#1:1821: x: 328, y: 837) */}
            <div className="pointer-events-auto absolute top-[680px] sm:top-[740px] lg:top-[837px] left-[8%] sm:left-[15%] lg:left-1/2 lg:-translate-x-[392px] bg-white/95 backdrop-blur-md rounded-[20px] p-4 sm:p-5 shadow-[0px_20px_40px_rgba(0,0,0,0.15)] z-30 w-[230px] sm:w-[258px] transition-transform duration-300 hover:scale-105">
              <p className="font-bold text-shuttle-gray-950 font-satoshi text-[14px] mb-2">Happy Students</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-[18px] text-shuttle-gray-950 leading-none">4.5</span>
                <span className="text-[#CBFC01] text-[20px] leading-none">★</span>
                <span className="text-shuttle-gray-400 text-[12px] leading-none mt-1">(240)</span>
              </div>
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[3px] border-white bg-shuttle-gray-200 relative overflow-hidden shadow-sm">
                    <Image src="/hero.png" alt="Avatar" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[3px] border-white bg-[#CBFC01] flex items-center justify-center text-[11px] font-bold text-shuttle-gray-950 z-10 relative shadow-sm">2k+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By (Logos) - Height 202px */}
      <section className="bg-[#FAFAFA] h-[202px] flex items-center justify-center border-b border-shuttle-gray-100">
        <div className="max-w-7xl mx-auto px-16 w-full flex justify-center">
          <Image src="/logo-strip.svg" alt="Trusted Companies" width={1132} height={42} className="w-full max-w-5xl opacity-60 grayscale" />
        </div>
      </section>

      {/* 3. Discover Your Passion Section */}
      <section className="bg-white py-24 px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          <h2 className="text-[44px] font-poppins font-semibold text-shuttle-gray-950 mb-4 text-center">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-shuttle-gray-400 text-[18px] leading-[28px] max-w-3xl text-center mb-16 font-satoshi">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>

          {/* Categories Filter Pills */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 mb-16 max-w-[1000px]">
            <button className="bg-[#CBFC01] text-shuttle-gray-950 px-5 py-2 rounded-full font-bold text-[13px] hover:opacity-90 shadow-sm">Featured</button>
            {['Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Writing', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking'].map((cat) => (
              <button key={cat} className="bg-[#F8F9FB] text-shuttle-gray-500 border border-transparent px-5 py-2 rounded-full font-medium text-[13px] hover:bg-shuttle-gray-100 transition-colors shadow-sm">
                {cat}
              </button>
            ))}
            <button className="text-[#003BE2] font-bold text-[13px] px-4">+ More</button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
            {/* Course Card 1 */}
            <CourseCard 
              imageSrc="/course-1.png"
              title="Learn Figma from Basic"
              author="purepixel studio"
              rating={4.5}
              price={25}
            />
            {/* Course Card 2 */}
            <CourseCard 
              imageSrc="/course-2.png" 
              title="Build Digital Asset"
              author="purepixel studio"
              rating={4.6}
              price={25}
            />
            {/* Course Card 3 */}
            <CourseCard 
              imageSrc="/course-3.png" 
              title="The Power of Big Data"
              author="purepixel studio"
              rating={4.5}
              price={25}
            />
            {/* Course Card 4 */}
            <CourseCard 
              imageSrc="/course-4.png" 
              title="Balancing Productivity an..."
              author="purepixel studio"
              rating={4.5}
              price={25}
            />
            {/* Course Card 5 */}
            <CourseCard 
              imageSrc="/course-5.png" 
              title="Mastering Money Manage..."
              author="purepixel studio"
              rating={4.5}
              price={25}
            />
            {/* Course Card 6 */}
            <CourseCard 
              imageSrc="/course-6.png" 
              title="From Idea to Startup Succ..."
              author="purepixel studio"
              rating={4.5}
              price={25}
            />
          </div>

        </div>
      </section>

      {/* 2. Professional Growth Section */}
      <section className="py-24 px-16 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] w-[672px] h-[672px] bg-brand-lime opacity-10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="flex-1 relative w-full aspect-square order-2 lg:order-1">
             <div className="w-full h-full rounded-2xl relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white border border-shuttle-gray-100 flex items-end">
               <div className="relative w-[90%] h-[90%] mx-auto mb-0">
                 <Image src="/hero.png" alt="Growth Image" fill className="object-contain object-bottom" />
               </div>
             </div>
          </div>
          <div className="flex-1 flex flex-col gap-10 order-1 lg:order-2">
            <h2 className="text-shuttle-gray-950 font-poppins font-semibold text-5xl leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-shuttle-gray-700 text-lg leading-relaxed max-w-lg font-satoshi">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            
            <div className="flex items-center gap-14 mt-4">
              <div>
                <p className="text-brand-blue font-poppins font-semibold text-5xl">12K</p>
                <p className="text-shuttle-gray-700 text-lg mt-2 font-satoshi font-medium">Students</p>
              </div>
              <div>
                <p className="text-brand-blue font-poppins font-semibold text-5xl">70+</p>
                <p className="text-shuttle-gray-700 text-lg mt-2 font-satoshi font-medium">Courses</p>
              </div>
              <div>
                <p className="text-brand-blue font-poppins font-semibold text-5xl">16</p>
                <p className="text-shuttle-gray-700 text-lg mt-2 font-satoshi font-medium">Creators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-5xl font-poppins font-semibold text-shuttle-gray-950 mb-10 leading-[1.2]">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-lg text-shuttle-gray-700 leading-relaxed mb-12 max-w-xl font-satoshi">
              <strong className="text-shuttle-gray-950">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-5">
                <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-shuttle-gray-950 font-bold text-sm">✓</div>
                <span className="text-lg font-medium text-shuttle-gray-950 font-satoshi">Share Your Expertise</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-shuttle-gray-950 font-bold text-sm">✓</div>
                <span className="text-lg font-medium text-shuttle-gray-950 font-satoshi">Monetize Your Passion</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-shuttle-gray-950 font-bold text-sm">✓</div>
                <span className="text-lg font-medium text-shuttle-gray-950 font-satoshi">Flexibility and Autonomy</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-shuttle-gray-950 font-bold text-sm">✓</div>
                <span className="text-lg font-medium text-shuttle-gray-950 font-satoshi">Build a Community</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 relative w-full max-w-md mx-auto aspect-[3/4]">
            <div className="w-full h-full rounded-[32px] relative overflow-hidden shadow-2xl bg-brand-lime/10">
               <Image src="/feature.png" alt="Dashboard Feature" fill className="object-contain object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Categories Section */}
      <section className="py-24 px-16 bg-shuttle-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-poppins font-semibold text-shuttle-gray-950">Explore Diverse Learning Paths at Bytespace</h2>
            <p className="text-lg text-shuttle-gray-400 mt-6 max-w-4xl mx-auto font-satoshi">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
              <div key={category.name} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <div className="w-20 h-20 bg-shuttle-gray-50 rounded-full flex items-center justify-center group-hover:bg-brand-lime transition-colors">
                  <category.icon className="w-8 h-8 text-brand-blue opacity-80" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-shuttle-gray-950 text-center text-base font-satoshi">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section (CTA_Frame) */}
      <section className="bg-brand-blue py-32 px-16 text-center text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <h2 className="text-[56px] font-poppins font-semibold mb-8 max-w-3xl leading-[1.2]">
              Unlock Your Potential as a <span className="text-[#CBFC01] relative inline-block">Creator<svg className="absolute -bottom-2 left-0 w-full text-[#CBFC01]" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/></svg></span> with ByteSpace
            </h2>
            <p className="text-[20px] text-shuttle-gray-50 leading-relaxed mb-12 opacity-90 max-w-4xl font-satoshi font-light">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>
            <Link href="/register" className="bg-[#CBFC01] text-shuttle-gray-950 font-bold px-12 py-5 text-xl rounded-full hover:bg-white transition-all shadow-[0_4px_14px_0_rgba(203,252,1,0.39)] hover:shadow-[0_6px_20px_rgba(203,252,1,0.23)] hover:scale-105">
              Join as Creator
            </Link>
         </div>
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#CBFC01] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
         <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10"></div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-24 px-16 bg-white relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[44px] font-poppins font-semibold text-shuttle-gray-950 mb-16">
            Hear from Our Community
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-shuttle-gray-100 flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-shuttle-gray-100 rounded-full flex items-center justify-center font-bold text-shuttle-gray-950 text-xl">S</div>
                <div>
                  <h4 className="font-bold text-shuttle-gray-950 text-[16px] font-satoshi">Sarah M.</h4>
                  <p className="text-[#003BE2] text-[13px] font-medium font-satoshi mt-0.5">Enthusiastic Learner</p>
                </div>
              </div>
              <p className="text-shuttle-gray-600 leading-[1.6] text-[14px] font-satoshi">
                ByteSpace completely changed my career trajectory. The courses are top-notch and the community is incredibly supportive!
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-shuttle-gray-100 flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-[-30px] right-[-30px] w-32 h-32 bg-[#CBFC01] opacity-20 rounded-full"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-shuttle-gray-100 rounded-full flex items-center justify-center font-bold text-shuttle-gray-950 text-xl">J</div>
                <div>
                  <h4 className="font-bold text-shuttle-gray-950 text-[16px] font-satoshi">James L.</h4>
                  <p className="text-[#003BE2] text-[13px] font-medium font-satoshi mt-0.5">Lifelong Learner</p>
                </div>
              </div>
              <p className="text-shuttle-gray-600 leading-[1.6] text-[14px] font-satoshi relative z-10">
                The platform is so easy to use. I love the variety of categories and the quality of the creators. Highly recommended.
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-shuttle-gray-100 flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-shuttle-gray-100 rounded-full flex items-center justify-center font-bold text-shuttle-gray-950 text-xl">A</div>
                <div>
                  <h4 className="font-bold text-shuttle-gray-950 text-[16px] font-satoshi">Alex B.</h4>
                  <p className="text-[#003BE2] text-[13px] font-medium font-satoshi mt-0.5">Inspired Creator</p>
                </div>
              </div>
              <p className="text-shuttle-gray-600 leading-[1.6] text-[14px] font-satoshi">
                As a creator, ByteSpace gives me all the tools I need to share my knowledge and monetize my passion effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
