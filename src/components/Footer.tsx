import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-shuttle-gray-50 pt-20 pb-8 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-16">
        
        {/* Brand & Description */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="ByteSpace Logo" width={32} height={32} className="w-8 h-8 filter invert" />
            <span className="text-2xl font-bold text-shuttle-gray-950 tracking-wide">ByteSpace</span>
          </Link>
          <p className="text-shuttle-gray-400 text-base leading-relaxed">
            Empowering creators to share their knowledge and learners to reach their potential. Join our community today.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">IG</div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">TW</div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">LN</div>
          </div>
        </div>

        {/* Links Columns */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-shuttle-gray-950 text-lg mb-2">Company</h4>
            <Link href="/about" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">About Us</Link>
            <Link href="/careers" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Careers</Link>
            <Link href="/press" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Press</Link>
            <Link href="/blog" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Blog</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-shuttle-gray-950 text-lg mb-2">Resources</h4>
            <Link href="/courses" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Courses</Link>
            <Link href="/creators" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Creators</Link>
            <Link href="/community" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Community</Link>
            <Link href="/help" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Help Center</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-shuttle-gray-950 text-lg mb-2">Legal</h4>
            <Link href="/terms" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Terms</Link>
            <Link href="/privacy" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-shuttle-gray-400 hover:text-shuttle-gray-950 transition-colors">Cookies</Link>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-shuttle-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-shuttle-gray-400 text-sm">© 2026 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/terms" className="text-shuttle-gray-400 text-sm hover:text-shuttle-gray-950 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="text-shuttle-gray-400 text-sm hover:text-shuttle-gray-950 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
