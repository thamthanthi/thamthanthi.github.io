import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Server,
  MonitorPlay,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────── */
const products = [
  {
    name: "Smart Alpha",
    tag: "Smart Camera",
    description:
      "กล้องวงจรปิดอัจฉริยะรุ่น Smart Alpha ติดตั้ง AI วิเคราะห์ภาพแบบเรียลไทม์ รองรับ Full HD ทำงานได้ในสภาพแสงน้อย ออกแบบมาเพื่อการรักษาความปลอดภัยสูงสุด",
    images: ["/images/smart Alpha-01_0.png", "/images/smart Alpha-02_0.png"],
    features: ["AI Detection", "Full HD", "Night Vision", "IP67 Waterproof"],
    icon: Camera,
  },
  {
    name: "XS High View 4CH",
    tag: "4-Channel DVR",
    description:
      "ระบบบันทึกภาพ 4 ช่องสัญญาณความละเอียดสูง เหมาะสำหรับธุรกิจขนาดเล็กและบ้านพักอาศัย รองรับการดูภาพผ่านมือถือแบบ Real-time",
    images: [
      "/images/xs high view 4ch-01_0.png",
      "/images/xs high view 4ch-02_0.png",
    ],
    features: ["4 ช่องสัญญาณ", "Full HD Recording", "Mobile Viewing", "H.265+"],
    icon: MonitorPlay,
  },
  {
    name: "XS High View 8CH",
    tag: "8-Channel DVR",
    description:
      "ระบบบันทึกภาพ 8 ช่องสัญญาณรองรับกล้องความละเอียดสูง เหมาะสำหรับธุรกิจขนาดกลาง คลังสินค้า หรืออาคารสำนักงาน",
    images: [
      "/images/xs high view-08-01 (1)_0.png",
      "/images/xs high view-08-02 (1)_0.png",
    ],
    features: ["8 ช่องสัญญาณ", "4K Support", "Smart Playback", "RAID Storage"],
    icon: Server,
  },
  {
    name: "XS233 Pro",
    tag: "Pro NVR",
    description:
      "เครื่องบันทึกภาพระดับ Pro รองรับมาตรฐานสูงสุด ออกแบบมาเพื่อโครงการขนาดใหญ่ ห้างสรรพสินค้า โรงงาน และโครงการอสังหาริมทรัพย์",
    images: ["/images/xs233pro_0.png"],
    features: [
      "High Performance",
      "Multi-Channel",
      "Enterprise Grade",
      "Cloud Ready",
    ],
    icon: Server,
  },
];

const services = [
  {
    title: "ระบบกล้องวงจรปิด",
    description:
      "ออกแบบ ติดตั้ง และดูแลรักษาระบบกล้อง CCTV ครบวงจร ตั้งแต่โครงการขนาดเล็กจนถึงระดับองค์กร",
    icon: Camera,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "พัฒนาระบบซอฟต์แวร์",
    description:
      "รับพัฒนาซอฟต์แวร์แบบ Custom ตามความต้องการของธุรกิจ ทั้ง Web App, Mobile App และระบบหลังบ้าน",
    icon: Code2,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "ระบบรักษาความปลอดภัย",
    description:
      "โซลูชันความปลอดภัยอัจฉริยะ ครอบคลุม Access Control, Alarm System และ Integrated Security System",
    icon: Shield,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    title: "ให้คำปรึกษาด้านเทคโนโลยี",
    description:
      "บริการให้คำปรึกษาด้าน IT และความปลอดภัยโดยผู้เชี่ยวชาญ วางแผนโครงสร้างพื้นฐานเทคโนโลยี",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const stats = [
  { value: "500+", label: "โปรเจกต์สำเร็จ", icon: Award },
  { value: "10+", label: "ปีประสบการณ์", icon: Target },
  { value: "300+", label: "ลูกค้าไว้วางใจ", icon: Users },
  { value: "24/7", label: "บริการหลังการขาย", icon: Zap },
];

const visionPoints = [
  "เป็นผู้นำด้านเทคโนโลยีความปลอดภัยในภูมิภาคอาเซียน",
  "พัฒนานวัตกรรมที่ตอบโจทย์ความต้องการจริงของทุกธุรกิจ",
  "มุ่งมั่นให้บริการที่มีคุณภาพสูงสุดแก่ลูกค้าทุกราย",
  "บูรณาการ AI และ IoT เข้ากับระบบความปลอดภัยสมัยใหม่",
];

const missionPoints = [
  "นำเสนอผลิตภัณฑ์และบริการที่มีคุณภาพระดับสากล",
  "สร้างระบบนิเวศความปลอดภัยที่ยั่งยืนให้กับสังคม",
  "พัฒนาทีมงานผู้เชี่ยวชาญที่มีความรู้รอบด้าน",
  "ร่วมเป็นส่วนหนึ่งในการขับเคลื่อนเศรษฐกิจดิจิทัลไทย",
];

/* ─── PAGE ─────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl translate-y-1/2 -translate-x-1/4" />
          {/* Grid lines */}
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
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Zap size={14} />
              Technology for a Safer Tomorrow
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              ระบบความปลอดภัย <span className="gold-shimmer">อัจฉริยะ</span>
              <br />
              สำหรับธุรกิจยุคใหม่
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              TTTHI นำเสนอโซลูชันกล้องวงจรปิด ระบบบันทึกภาพ
              และพัฒนาซอฟต์แวร์ที่ทันสมัย
              เพื่อความปลอดภัยและประสิทธิภาพสูงสุดของธุรกิจคุณ
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm"
              >
                ดูสินค้าของเรา
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 text-sm"
              >
                ติดต่อเรา
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                { icon: Shield, label: "ความปลอดภัยสูง" },
                { icon: Award, label: "การันตีคุณภาพ" },
                { icon: Zap, label: "ติดตั้งรวดเร็ว" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={18} className="text-amber-400" />
                  <span className="text-gray-300 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo + floating badges */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl scale-110 animate-pulse" />
              {/* Logo */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center float-animation">
                <Image
                  src="/images/พัฒนาระบบซอฟต์แวร์_0.png"
                  alt="Software Development"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating info cards */}
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white font-bold text-xl">500+</p>
                <p className="text-gray-300 text-xs">โปรเจกต์</p>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-500 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white font-bold text-xl">10+ ปี</p>
                <p className="text-white/80 text-xs">ประสบการณ์</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">เลื่อนลง</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent group-hover:from-amber-400 transition-colors" />
        </a>
      </section>

      {/* ══════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════ */}
      <section className="bg-[#0a1842] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Icon size={24} className="text-amber-400" />
                </div>
                <p className="text-4xl font-extrabold text-white mb-1">
                  {value}
                </p>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image collage */}
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
              {/* Accent badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0a1842] text-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 whitespace-nowrap">
                <Eye size={20} className="text-amber-400" />
                <span className="font-semibold text-sm">
                  Trusted Security Technology
                </span>
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
                <span className="w-8 h-px bg-amber-500" />
                เกี่ยวกับเรา
              </div>
              <h2 className="text-4xl font-bold text-[#0a1842] leading-tight mb-6">
                ผู้เชี่ยวชาญด้านระบบ
                <br />
                ความปลอดภัยครบวงจร
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                TTTHI
                ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะนำเสนอเทคโนโลยีความปลอดภัยที่ทันสมัย
                พร้อมด้วยบริการที่ครอบคลุมตั้งแต่การออกแบบระบบ การติดตั้ง
                ไปจนถึงการบำรุงรักษาหลังการขาย
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                ด้วยประสบการณ์กว่า 10 ปี และทีมวิศวกรผู้เชี่ยวชาญ
                เราพร้อมให้บริการทั้งองค์กรภาคเอกชน หน่วยงานภาครัฐ
                และโครงการพิเศษทุกประเภท
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "ผลิตภัณฑ์คุณภาพสูงระดับสากล",
                  "ทีมวิศวกรผู้เชี่ยวชาญ 24/7",
                  "รับประกันสินค้าและบริการหลังการขาย",
                  "ราคาเป็นธรรม โปร่งใส คุ้มค่า",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-amber-500 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0a1842] hover:bg-[#1a3e9e] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-sm"
              >
                ปรึกษาผู้เชี่ยวชาญ
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCTS SECTION
      ══════════════════════════════════════ */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              ผลิตภัณฑ์ของเรา
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#0a1842] mb-4">
              สินค้าคุณภาพสูง เพื่อทุกความต้องการ
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              ผลิตภัณฑ์ที่ได้รับการคัดสรรและพัฒนาให้ตรงกับความต้องการ
              ของตลาดประเทศไทย รองรับทุกสภาพแวดล้อมการใช้งาน
            </p>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Image Area */}
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
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0a1842] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0a1842] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>
                  {/* Features */}
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
                    สอบถามข้อมูล
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

      {/* ══════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              บริการของเรา
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#0a1842] mb-4">
              ครบครันทุกบริการด้านเทคโนโลยี
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              เราให้บริการที่ครอบคลุมตั้งแต่ต้นจนจบ
              เพื่อให้ธุรกิจของคุณมีระบบที่มั่นคงปลอดภัย
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1842]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.bg} mb-5`}
                >
                  <service.icon size={26} className={service.color} />
                </div>
                <h3 className="text-xl font-bold text-[#0a1842] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-amber-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>เรียนรู้เพิ่มเติม</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* Software Dev feature image */}
          <div className="mt-16 bg-gradient-to-br from-[#0a1842] to-[#1a3e9e] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-10 lg:p-14">
                <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  <Code2 size={12} />
                  Software Development
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  รับพัฒนาระบบซอฟต์แวร์
                  <br />
                  แบบ Custom
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  ทีมนักพัฒนาของเราพร้อมสร้างระบบซอฟต์แวร์ที่ตรงกับความต้องการของธุรกิจคุณ
                  ไม่ว่าจะเป็น Web Application, Mobile App, Dashboard หรือระบบ
                  Backend พร้อมบูรณาการกับระบบความปลอดภัยได้อย่างลงตัว
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Web & Mobile Application",
                    "Video Management System (VMS)",
                    "Dashboard & Analytics",
                    "API Integration",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-amber-400 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
                >
                  สอบถามโปรเจกต์
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

      {/* ══════════════════════════════════════
          VISION & MISSION SECTION
      ══════════════════════════════════════ */}
      <section
        id="vision"
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #060e28 0%, #0a1842 50%, #060e28 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-amber-500/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              วิสัยทัศน์และพันธกิจ
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              สร้างอนาคตที่ปลอดภัยกว่า
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              เราเชื่อมั่นว่าเทคโนโลยีที่ดีจะสร้างความปลอดภัยและคุณภาพชีวิตที่ดีขึ้น
              สำหรับทุกคนในสังคม
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <Eye size={22} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">วิสัยทัศน์</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                มุ่งสู่การเป็นบริษัทเทคโนโลยีความปลอดภัยชั้นนำในภูมิภาค
                ด้วยนวัตกรรมที่ทันสมัยและบริการที่เชื่อถือได้
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {point}
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
                <h3 className="text-2xl font-bold text-white">พันธกิจ</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                ดำเนินธุรกิจด้วยความซื่อสัตย์ โปร่งใส
                และมุ่งมั่นส่งมอบคุณค่าสูงสุดให้กับลูกค้าและสังคม
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core values */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "นวัตกรรม", en: "Innovation", icon: Cpu },
              { label: "คุณภาพ", en: "Quality", icon: Award },
              { label: "ความน่าเชื่อถือ", en: "Reliability", icon: Shield },
              { label: "ลูกค้าคือหัวใจ", en: "Customer First", icon: Users },
            ].map(({ label, en, icon: Icon }) => (
              <div
                key={label}
                className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-colors"
              >
                <Icon size={28} className="text-amber-400 mx-auto mb-3" />
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-gray-500 text-xs mt-1">{en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wider">
              <span className="w-8 h-px bg-amber-500" />
              ติดต่อเรา
              <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#0a1842] mb-4">
              พร้อมให้บริการคุณ
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              มีคำถามหรือต้องการปรึกษาเรื่องระบบความปลอดภัย?
              ทีมผู้เชี่ยวชาญของเราพร้อมช่วยเหลือคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info cards */}
            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  icon: Phone,
                  label: "โทรศัพท์",
                  value: "+66 (0) 00 000 0000",
                  sub: "จันทร์–เสาร์ 08:00–18:00",
                  href: "tel:+66000000000",
                  color: "bg-blue-50 text-blue-500",
                },
                {
                  icon: Mail,
                  label: "อีเมล",
                  value: "info@ttthi.com",
                  sub: "ตอบกลับภายใน 24 ชั่วโมง",
                  href: "mailto:info@ttthi.com",
                  color: "bg-amber-50 text-amber-500",
                },
                {
                  icon: MapPin,
                  label: "ที่ตั้ง",
                  value: "กรุงเทพมหานคร",
                  sub: "ประเทศไทย",
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
                ส่งข้อความหาเรา
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกชื่อ-นามสกุล"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      เบอร์โทรศัพท์ *
                    </label>
                    <input
                      type="tel"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    placeholder="กรอกอีเมล"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    สนใจบริการ
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-700 bg-white">
                    <option value="">เลือกบริการที่สนใจ</option>
                    <option>ระบบกล้องวงจรปิด</option>
                    <option>พัฒนาระบบซอฟต์แวร์</option>
                    <option>ระบบรักษาความปลอดภัย</option>
                    <option>ให้คำปรึกษาด้านเทคโนโลยี</option>
                    <option>อื่นๆ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ข้อความ
                  </label>
                  <textarea
                    rows={4}
                    placeholder="กรอกรายละเอียดที่ต้องการสอบถาม"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-sm text-gray-800 placeholder:text-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0a1842] hover:bg-[#1a3e9e] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2"
                >
                  ส่งข้อความ
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            พร้อมเริ่มต้นระบบความปลอดภัยของคุณแล้วหรือยัง?
          </h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            ติดต่อผู้เชี่ยวชาญของเราวันนี้
            รับข้อเสนอพิเศษและคำปรึกษาฟรีไม่มีค่าใช้จ่าย
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+66000000000"
              className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-amber-50 font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <Phone size={16} />
              โทรหาเรา
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 border border-amber-400 text-sm"
            >
              ส่งข้อความ
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
