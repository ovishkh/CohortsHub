import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-8 bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo vector will be placed here */}
          <Image src="/logo.svg" alt="ByteSpace Logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-2xl font-bold text-white tracking-wide">ByteSpace</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-white hover:text-brand-lime font-satoshi font-normal text-base transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white">Home</Link>
        <Link href="/courses" className="text-white/80 hover:text-white font-satoshi font-normal text-base transition-colors">Courses</Link>
        <Link href="/creators" className="text-white/80 hover:text-white font-satoshi font-normal text-base transition-colors">Creators</Link>
      </nav>

      {/* Auth */}
      <div className="flex items-center gap-8">
        <Link href="/login" className="text-white/80 hover:text-white font-satoshi font-normal text-base transition-colors">Sign In</Link>
        <Link href="/register" className="text-white/80 hover:text-white font-satoshi font-normal text-base transition-colors">Join Us</Link>
        <button className="text-white/80 hover:text-white transition-colors">
          <Image src="/cart.svg" alt="Cart" width={24} height={24} className="w-6 h-6 invert" />
        </button>
      </div>
    </header>
  );
}
