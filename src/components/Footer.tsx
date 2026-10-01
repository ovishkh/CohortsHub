import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-shuttle-gray-50 pt-16 sm:pt-20 pb-8 px-4 sm:px-8 lg:px-16 border-t border-shuttle-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-12 sm:mb-16">
        
        {/* Brand & Description */}
        <div className="flex flex-col gap-5 max-w-sm">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <Image src="/logo.svg" alt="ByteSpace Logo" width={32} height={32} className="w-8 h-8 filter invert transition-transform group-hover:scale-105" />
            <span className="text-2xl font-bold text-shuttle-gray-950 tracking-wide font-poppins">ByteSpace</span>
          </Link>
          <p className="text-shuttle-gray-400 text-sm sm:text-base leading-relaxed font-satoshi">
            Empowering creators to share their knowledge and learners to reach their potential. Join our community today.
          </p>
          <div className="flex items-center gap-3">
            {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
              <a
                key={social}
                href={`https://${social.toLowerCase()}.com`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-shuttle-gray-200 hover:border-[#003BE2] hover:text-[#003BE2] flex items-center justify-center text-xs font-bold text-shuttle-gray-700 shadow-sm transition-all hover:scale-110 active:scale-95"
                aria-label={social}
              >
                {social.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="font-bold text-shuttle-gray-950 text-base sm:text-lg mb-1 font-poppins">Company</h4>
            <Link href="/about" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">About Us</Link>
            <Link href="/careers" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Careers</Link>
            <Link href="/press" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Press</Link>
            <Link href="/blog" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Blog</Link>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="font-bold text-shuttle-gray-950 text-base sm:text-lg mb-1 font-poppins">Resources</h4>
            <Link href="/courses" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Courses</Link>
            <Link href="/creators" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Creators</Link>
            <Link href="/community" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Community</Link>
            <Link href="/help" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Help Center</Link>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 col-span-2 sm:col-span-1">
            <h4 className="font-bold text-shuttle-gray-950 text-base sm:text-lg mb-1 font-poppins">Legal</h4>
            <Link href="/terms" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Terms of Service</Link>
            <Link href="/privacy" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Privacy Policy</Link>
            <Link href="/cookies" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors text-sm sm:text-base font-satoshi py-1">Cookie Settings</Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-shuttle-gray-200/80 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-shuttle-gray-400 text-xs sm:text-sm font-satoshi">
          © 2026 ByteSpace. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/terms" className="text-shuttle-gray-400 text-xs sm:text-sm hover:text-shuttle-gray-950 transition-colors font-satoshi">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-shuttle-gray-400 text-xs sm:text-sm hover:text-shuttle-gray-950 transition-colors font-satoshi">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
