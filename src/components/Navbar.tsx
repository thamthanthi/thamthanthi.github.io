"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "เกี่ยวกับเรา" },
  { href: "#products", label: "สินค้า" },
  { href: "#services", label: "บริการ" },
  { href: "#vision", label: "วิสัยทัศน์" },
  { href: "#contact", label: "ติดต่อ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a1842]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/Logo-TTTHI-(T).png"
                alt="TTTHI Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl tracking-wide group-hover:text-amber-400 transition-colors duration-200">
              TTTHI
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-amber-400 font-medium transition-colors duration-200 text-sm tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            ติดต่อเรา
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-amber-400 hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
