"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Youtube } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { homeTranslations } from "@/lib/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLang();
  const f = homeTranslations.footer;

  return (
    <footer className="bg-[#060e28] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12">
                <Image
                  src="/Logo-TTTHI-(T).png"
                  alt="THAMTHANTHI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-2xl tracking-wide">
                <span className="block text-lg font-bold">
                  {lang === "th" ? "ทำทันที" : "THAMTHANTHI"}
                </span>
                <span className="block text-xs text-amber-400/70 tracking-widest">
                  {lang === "th" ? "THAMTHANTHI" : "ทำทันที"}
                </span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              {lang === "th" ? f.tagline.th : f.tagline.en}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 tracking-wide">
              {lang === "th" ? f.menu.th : f.menu.en}
            </h4>
            <ul className="space-y-3">
              {f.menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    {lang === "th" ? item.th : item.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 tracking-wide">
              {lang === "th" ? f.contactTitle.th : f.contactTitle.en}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {lang === "th" ? f.location.th : f.location.en}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a
                  href="tel:+66000000000"
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                >
                  +66 (0) 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a
                  href="mailto:info@ttthi.com"
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                >
                  info@ttthi.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {currentYear} {lang === "th" ? "ทำทันที" : "THAMTHANTHI"} (THAMTHANTHI). {lang === "th" ? f.rights.th : f.rights.en}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
            >
              {lang === "th" ? f.privacy.th : f.privacy.en}
            </Link>
            <span className="text-gray-700">|</span>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
            >
              {lang === "th" ? f.terms.th : f.terms.en}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
