import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center py-24 px-16 text-center">
      
      {/* 404 Illustration Placeholder */}
      <div className="w-64 h-64 bg-shuttle-gray-50 rounded-full mb-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-9xl font-poppins font-black text-persian-blue-800 tracking-tighter">404</span>
        </div>
        <div className="w-32 h-32 bg-shuttle-gray-200 rounded-2xl rotate-12 relative z-10 flex items-center justify-center shadow-lg">
           <div className="text-4xl text-shuttle-gray-400 font-bold">?</div>
        </div>
      </div>
      
      <h1 className="text-5xl font-poppins font-bold text-shuttle-gray-950 mb-4">
        Page Not Found
      </h1>
      
      <p className="text-lg text-shuttle-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
        Oops! The page you're looking for seems to have gone missing. It might have been moved or doesn't exist anymore.
      </p>
      
      <Link href="/" className="bg-persian-blue-800 text-white font-medium px-8 py-4 rounded-full hover:bg-persian-blue-800/90 transition-colors shadow-md">
        Back to Home
      </Link>
      
    </div>
  );
}
