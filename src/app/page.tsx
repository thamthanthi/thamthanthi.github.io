"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";
import { homeTranslations } from "@/lib/translations";
import {
  Shield,
  Cpu,
  Code2,
  Eye,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Zap,
  Target,
  Users,
  Award,
  ChevronRight,
  Camera,
} from "lucide-react";

const serviceIcons = [Camera, Code2, Shield, Cpu];
const serviceColors = [
  "text-blue-500",
  "text-amber-500",
  "text-green-500",
  "text-purple-500",
];
const serviceBgs = ["bg-blue-50", "bg-amber-50", "bg-green-50", "bg-purple-50"];
const statsIcons = [Award, Target, Users, Zap];
const coreValueIcons = [Cpu, Award, Shield, Users];

export default function HomePage() {
  const { lang } = useLang();
  const T = homeTranslations;
  const h = T.hero;
  const st = T.stats;
  const ab = T.about;
  const pr = T.products;
  const sv = T.services;
  const vs = T.vision;
  const ct = T.contact;
  const cta = T.cta;

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ══ HERO ══ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Zap size={14} />
              {lang === "th" ? h.badge.th : h.badge.en}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {lang === "th" ? h.title1.th : h.title1.en}{" "}
              <span className="gold-shimmer">
                {lang === "th" ? h.titleHighlight.th : h.titleHighlight.en}
              </span>
              <br />
              {lang === "th" ? h.title2.th : h.title2.en}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              {lang === "th" ? h.desc.th : h.desc.en}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm"
              >
                {lang === "th" ? h.cta1.th : h.cta1.en}
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 text-sm"
              >
                {lang === "th" ? h.cta2.th : h.cta2.en}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                {
                  icon: Shield,
                  label: lang === "th" ? h.badge1.th : h.badge1.en,
                },
                {
                  icon: Award,
                  label: lang === "th" ? h.badge2.th : h.badge2.en,
                },
                { icon: Zap, label: lang === "th" ? h.badge3.th : h.badge3.en },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={18} className="text-amber-400" />
                  <span className="text-gray-300 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl scale-110 animate-pulse" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center float-animation">
                <Image
                  src="/images/พัฒนาระบบซอฟต์แวร์_0.png"
                  alt="Software Development"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white font-bold text-xl">500+</p>
                <p className="text-gray-300 text-xs">
                  {lang === "th" ? h.projects.th : h.projects.en}
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-500 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white font-bold text-xl">
                  10+ {lang === "th" ? "ปี" : "Yrs"}
                </p>
                <p className="text-white/80 text-xs">
                  {lang === "th" ? h.experience.th : h.experience.en}
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">
            {lang === "th" ? h.scrollDown.th : h.scrollDown.en}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent group-hover:from-amber-400 transition-colors" />
        </a>
      </section>

      {/* ══ STATS ══ */}
      <section className="bg-[#0a1842] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {st.map((s, i) => {
              const Icon = statsIcons[i];
              return (
                <div key={s.value} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <Icon size={24} className="text-amber-400" />
                  </div>
                  <p className="text-4xl font-extrabold text-white mb-1">
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {lang === "th" ? s.th : s.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                    <Image
                      src="/images/smart Alpha-01_0.png"
                      alt="Smart Alpha Camera"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                    <Image
                      src="/images/xs high view 4ch-01_0.png"
                      alt="XS High View"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0a1842] text-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 whitespace-nowrap">
                <Eye size={20} className="text-amber-400" />
                <span className="font-semibold text-sm">
                  {lang === "th" ? ab.trustBadge.th : ab.trustBadge.en}
                </span>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
                <span className="w-8 h-px bg-amber-500" />
                {lang === "th" ? ab.tag.th : ab.tag.en}
              </div>
              <h2 className="text-4xl font-bold text-[#0a1842] leading-tight mb-6">
                {lang === "th" ? ab.title1.th : ab.title1.en}
                <br />
                {lang === "th" ? ab.title2.th : ab.title2.en}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {lang === "th" ? ab.desc1.th : ab.desc1.en}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {lang === "th" ? ab.desc2.th : ab.desc2.en}
              </p>
              <ul className="space-y-3 mb-8">
                {ab.points.map((p) => (
                  <li
                    key={p.en}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-amber-500 shrink-0"
                    />
                    {lang === "th" ? p.th : p.en}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0a1842] hover:bg-[#1a3e9e] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-sm"
              >
                {lang === "th" ? ab.cta.th : ab.cta.en}
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              {lang === "th" ? pr.tag.th : pr.tag.en}
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#0a1842] mb-4">
              {lang === "th" ? pr.title.th : pr.title.en}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {lang === "th" ? pr.desc.th : pr.desc.en}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {T.products_data.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="relative bg-gray-50 h-60 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.images[1] && (
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} alt`}
                      fill
                      className="object-contain p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0a1842] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {lang === "th" ? product.tag.th : product.tag.en}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0a1842] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {lang === "th" ? product.desc.th : product.desc.en}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm group/link"
                  >
                    {lang === "th" ? pr.inquire.th : pr.inquire.en}
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              {lang === "th" ? sv.tag.th : sv.tag.en}
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#0a1842] mb-4">
              {lang === "th" ? sv.title.th : sv.title.en}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {lang === "th" ? sv.desc.th : sv.desc.en}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {T.serviceItems.map((s, i) => {
              const Icon = serviceIcons[i];
              const item = lang === "th" ? s.th : s.en;
              return (
                <div
                  key={item.title}
                  className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1842]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${serviceBgs[i]} mb-5`}
                  >
                    <Icon size={26} className={serviceColors[i]} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1842] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-amber-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>
                      {lang === "th" ? sv.learnMore.th : sv.learnMore.en}
                    </span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Software dev banner */}
          <div className="mt-16 bg-gradient-to-br from-[#0a1842] to-[#1a3e9e] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-10 lg:p-14">
                <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  <Code2 size={12} />
                  {lang === "th" ? sv.softwareBadge.th : sv.softwareBadge.en}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {lang === "th" ? sv.softwareTitle1.th : sv.softwareTitle1.en}
                  <br />
                  {lang === "th" ? sv.softwareTitle2.th : sv.softwareTitle2.en}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {lang === "th" ? sv.softwareDesc.th : sv.softwareDesc.en}
                </p>
                <ul className="space-y-2 mb-8">
                  {sv.softwareItems.map((item) => (
                    <li
                      key={item.en}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-amber-400 shrink-0"
                      />
                      {lang === "th" ? item.th : item.en}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
                >
                  {lang === "th" ? sv.softwareCta.th : sv.softwareCta.en}
                  <ArrowRight size={15} />
                </a>
              </div>
              <div className="relative h-72 md:h-full min-h-64 bg-[#0a1842]/50">
                <Image
                  src="/images/พัฒนาระบบซอฟต์แวร์_0.png"
                  alt="Software Development"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISION & MISSION ══ */}
      <section
        id="vision"
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #060e28 0%, #0a1842 50%, #060e28 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-amber-500/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              {lang === "th" ? vs.tag.th : vs.tag.en}
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              {lang === "th" ? vs.title.th : vs.title.en}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {lang === "th" ? vs.desc.th : vs.desc.en}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <Eye size={22} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {lang === "th" ? vs.visionTitle.th : vs.visionTitle.en}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {lang === "th" ? vs.visionDesc.th : vs.visionDesc.en}
              </p>
              <ul className="space-y-3">
                {vs.visionPoints.map((p) => (
                  <li key={p.en} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {lang === "th" ? p.th : p.en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Target size={22} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {lang === "th" ? vs.missionTitle.th : vs.missionTitle.en}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {lang === "th" ? vs.missionDesc.th : vs.missionDesc.en}
              </p>
              <ul className="space-y-3">
                {vs.missionPoints.map((p) => (
                  <li key={p.en} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {lang === "th" ? p.th : p.en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {vs.coreValues.map((v, i) => {
              const Icon = coreValueIcons[i];
              return (
                <div
                  key={v.en}
                  className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-colors"
                >
                  <Icon size={28} className="text-amber-400 mx-auto mb-3" />
                  <p className="text-white font-semibold text-sm">
                    {lang === "th" ? v.th : v.en}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{v.en}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              {lang === "th" ? ct.tag.th : ct.tag.en}
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#0a1842] mb-4">
              {lang === "th" ? ct.title.th : ct.title.en}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              {lang === "th" ? ct.desc.th : ct.desc.en}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info cards */}
            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  icon: Phone,
                  label: lang === "th" ? ct.phone.th : ct.phone.en,
                  value: "+66 (0) 00 000 0000",
                  sub: lang === "th" ? ct.phoneSub.th : ct.phoneSub.en,
                  href: "tel:+66000000000",
                  color: "bg-blue-50 text-blue-500",
                },
                {
                  icon: Mail,
                  label: lang === "th" ? ct.email.th : ct.email.en,
                  value: "info@ttthi.com",
                  sub: lang === "th" ? ct.emailSub.th : ct.emailSub.en,
                  href: "mailto:info@ttthi.com",
                  color: "bg-amber-50 text-amber-500",
                },
                {
                  icon: MapPin,
                  label: lang === "th" ? ct.location.th : ct.location.en,
                  value:
                    lang === "th" ? ct.locationValue.th : ct.locationValue.en,
                  sub: lang === "th" ? ct.locationSub.th : ct.locationSub.en,
                  href: "#",
                  color: "bg-green-50 text-green-500",
                },
              ].map(({ icon: Icon, label, value, sub, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">{label}</p>
                    <p className="text-[#0a1842] font-semibold text-sm group-hover:text-amber-600 transition-colors">
                      {value}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-[#0a1842] mb-6">
                {lang === "th" ? ct.formTitle.th : ct.formTitle.en}
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === "th" ? ct.labelName.th : ct.labelName.en}
                    </label>
                    <input
                      type="text"
                      placeholder={
                        lang === "th"
                          ? ct.placeholderName.th
                          : ct.placeholderName.en
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === "th" ? ct.labelPhone.th : ct.labelPhone.en}
                    </label>
                    <input
                      type="tel"
                      placeholder={
                        lang === "th"
                          ? ct.placeholderPhone.th
                          : ct.placeholderPhone.en
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === "th" ? ct.labelEmail.th : ct.labelEmail.en}
                  </label>
                  <input
                    type="email"
                    placeholder={
                      lang === "th"
                        ? ct.placeholderEmail.th
                        : ct.placeholderEmail.en
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === "th" ? ct.labelService.th : ct.labelService.en}
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-700 bg-white">
                    <option value="">
                      {lang === "th"
                        ? ct.selectService.th
                        : ct.selectService.en}
                    </option>
                    {ct.serviceOptions.map((o) => (
                      <option key={o.en}>{lang === "th" ? o.th : o.en}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === "th" ? ct.labelMessage.th : ct.labelMessage.en}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      lang === "th"
                        ? ct.placeholderMessage.th
                        : ct.placeholderMessage.en
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0a1842] hover:bg-[#1a3e9e] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2"
                >
                  {lang === "th" ? ct.submit.th : ct.submit.en}
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            {lang === "th" ? cta.title.th : cta.title.en}
          </h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            {lang === "th" ? cta.desc.th : cta.desc.en}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+66000000000"
              className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-amber-50 font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <Phone size={16} />
              {lang === "th" ? cta.phone.th : cta.phone.en}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 border border-amber-400 text-sm"
            >
              {lang === "th" ? cta.message.th : cta.message.en}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
