"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Search, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [cartPopped, setCartPopped] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCartClick = () => {
    setCartPopped(true);
    setTimeout(() => setCartPopped(false), 300);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
    { name: "Search", href: "/search" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 py-5 sm:py-6 lg:py-8 bg-transparent">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
              <Image src="/logo.svg" alt="ByteSpace Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-wide font-poppins">
              ByteSpace
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.filter(l => l.name !== "Search").map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-satoshi font-medium text-base transition-colors relative py-1 ${
                  isActive
                    ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CBFC01]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth & Cart */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/login"
            className="text-white/85 hover:text-white font-satoshi font-medium text-base transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="bg-[#CBFC01] hover:bg-[#bbf000] text-shuttle-gray-950 font-bold px-5 py-2.5 rounded-full text-[15px] font-satoshi transition-all transform hover:scale-105 shadow-sm"
          >
            Join Us
          </Link>
          <button
            onClick={handleCartClick}
            aria-label="Shopping Cart"
            className={`relative p-2 text-white/85 hover:text-white transition-transform ${
              cartPopped ? "scale-125" : "scale-100"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#CBFC01] text-shuttle-gray-950 text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Header Actions (Cart + Hamburger) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={handleCartClick}
            aria-label="Shopping Cart"
            className={`relative p-2 text-white hover:text-[#CBFC01] transition-transform ${
              cartPopped ? "scale-125" : "scale-100"
            }`}
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#CBFC01] text-shuttle-gray-950 text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="w-11 h-11 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur transition-all active:scale-95"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#003BE2] z-50 shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out md:hidden border-l border-white/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <Image src="/logo.svg" alt="ByteSpace" width={28} height={28} className="w-7 h-7" />
              <span className="text-xl font-bold text-white font-poppins">ByteSpace</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close drawer"
              className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-satoshi text-[17px] font-medium transition-all ${
                    isActive
                      ? "bg-white/15 text-[#CBFC01] font-bold"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#CBFC01]" />}
                </Link>
              );
            })}
          </div>

          {/* Quick Search Shortcut */}
          <Link
            href="/search"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 mt-4 px-4 py-3 bg-white/10 text-white/80 rounded-xl hover:bg-white/15 transition-colors text-sm"
          >
            <Search className="w-4 h-4 text-[#CBFC01]" />
            <span>Search courses, mentors...</span>
          </Link>
        </div>

        {/* Drawer Footer Auth CTAs */}
        <div className="flex flex-col gap-3 pt-6 border-t border-white/15">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-white font-medium font-satoshi rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 bg-[#CBFC01] text-shuttle-gray-950 font-bold font-satoshi rounded-xl shadow-lg hover:bg-[#bbf000] transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join Us Today</span>
          </Link>
          <p className="text-center text-[12px] text-white/50 font-satoshi mt-2">
            © 2026 ByteSpace. Learn & Grow.
          </p>
        </div>
      </div>
    </>
  );
}
