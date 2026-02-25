import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight } from "lucide-react";

export const metadata = {
  title: "นโยบายความเป็นส่วนตัว | TTTHI",
  description:
    "นโยบายความเป็นส่วนตัวของ TTTHI — การเก็บรวมรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณ",
};

const sections = [
  {
    id: "1",
    title: "ข้อมูลที่เราเก็บรวบรวม",
    content: [
      {
        subtitle: "1.1 ข้อมูลที่คุณให้โดยตรง",
        text: "เราเก็บข้อมูลที่คุณให้แก่เราโดยตรง เช่น ชื่อ-นามสกุล อีเมล เบอร์โทรศัพท์ ที่อยู่ รวมถึงข้อมูลอื่นๆ ที่คุณกรอกผ่านแบบฟอร์มติดต่อหรือขอรับบริการ",
      },
      {
        subtitle: "1.2 ข้อมูลที่เก็บโดยอัตโนมัติ",
        text: "เมื่อคุณใช้บริการของเรา เราอาจเก็บข้อมูลทางเทคนิค เช่น ที่อยู่ IP ประเภทเบราว์เซอร์ ระบบปฏิบัติการ หน้าที่คุณเข้าชม วันและเวลาที่เข้าชม เพื่อวิเคราะห์การใช้งานและปรับปรุงบริการ",
      },
      {
        subtitle: "1.3 ข้อมูล Cookies",
        text: "เราใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อปรับปรุงประสบการณ์การใช้งาน จดจำการตั้งค่าผู้ใช้ และวิเคราะห์รูปแบบการใช้งาน",
      },
    ],
  },
  {
    id: "2",
    title: "วัตถุประสงค์การใช้ข้อมูล",
    content: [
      {
        subtitle: "",
        text: "เราใช้ข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้:",
      },
      {
        subtitle: "2.1 การให้บริการ",
        text: "เพื่อประมวลผลและดำเนินการตามคำขอบริการ รับประกันสินค้า ติดตั้งระบบ และสนับสนุนหลังการขาย",
      },
      {
        subtitle: "2.2 การสื่อสาร",
        text: "เพื่อติดต่อสื่อสารกับคุณเกี่ยวกับคำสั่งซื้อ บริการ การอัปเดต และข้อมูลสำคัญที่เกี่ยวข้อง",
      },
      {
        subtitle: "2.3 การปรับปรุงบริการ",
        text: "เพื่อวิเคราะห์รูปแบบการใช้งาน พัฒนาผลิตภัณฑ์ และปรับปรุงคุณภาพการบริการให้ดียิ่งขึ้น",
      },
      {
        subtitle: "2.4 การตลาด (เฉพาะเมื่อได้รับความยินยอม)",
        text: "เพื่อส่งข้อมูลโปรโมชั่น ข่าวสาร และข้อเสนอพิเศษ หากคุณได้ให้ความยินยอม",
      },
    ],
  },
  {
    id: "3",
    title: "การเปิดเผยข้อมูลต่อบุคคลที่สาม",
    content: [
      {
        subtitle: "",
        text: "เราจะไม่ขาย ให้เช่า หรือเปิดเผยข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สามเพื่อวัตถุประสงค์ทางการตลาด เว้นแต่:",
      },
      {
        subtitle: "3.1 ผู้ให้บริการที่ได้รับมอบหมาย",
        text: "เราอาจแบ่งปันข้อมูลกับผู้ให้บริการที่ได้รับมอบหมายซึ่งช่วยดำเนินการในนามของเรา โดยผูกพันด้วยข้อตกลงรักษาความลับ",
      },
      {
        subtitle: "3.2 ข้อกำหนดทางกฎหมาย",
        text: "เราอาจเปิดเผยข้อมูลเมื่อมีข้อกำหนดทางกฎหมาย คำสั่งศาล หรือเพื่อปกป้องสิทธิ์และความปลอดภัย",
      },
    ],
  },
  {
    id: "4",
    title: "การรักษาความปลอดภัยของข้อมูล",
    content: [
      {
        subtitle: "",
        text: "เราใช้มาตรการรักษาความปลอดภัยทางเทคนิคและองค์กรที่เหมาะสม เพื่อปกป้องข้อมูลส่วนบุคคลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต การสูญหาย การแก้ไข หรือการเปิดเผย ซึ่งรวมถึงการเข้ารหัสข้อมูล SSL/TLS การควบคุมการเข้าถึง และการตรวจสอบระบบอย่างสม่ำเสมอ",
      },
    ],
  },
  {
    id: "5",
    title: "ระยะเวลาการเก็บรักษาข้อมูล",
    content: [
      {
        subtitle: "",
        text: "เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณเป็นระยะเวลาที่จำเป็นสำหรับวัตถุประสงค์ที่ระบุในนโยบายนี้ หรือตามที่กฎหมายกำหนด เมื่อไม่จำเป็นต้องใช้ข้อมูลอีกต่อไป เราจะลบหรือทำให้ข้อมูลนั้นไม่สามารถระบุตัวตนได้",
      },
    ],
  },
  {
    id: "6",
    title: "สิทธิ์ของเจ้าของข้อมูล",
    content: [
      {
        subtitle: "",
        text: "ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) คุณมีสิทธิ์ดังต่อไปนี้:",
      },
      {
        subtitle: "สิทธิ์การเข้าถึง",
        text: "ขอดูข้อมูลส่วนบุคคลของคุณที่เราเก็บรักษาไว้",
      },
      {
        subtitle: "สิทธิ์การแก้ไข",
        text: "ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่ครบถ้วน",
      },
      {
        subtitle: "สิทธิ์การลบ",
        text: "ขอให้ลบข้อมูลส่วนบุคคลของคุณในบางกรณี",
      },
      {
        subtitle: "สิทธิ์การคัดค้าน",
        text: "คัดค้านการประมวลผลข้อมูลในบางกรณี",
      },
      {
        subtitle: "สิทธิ์การถอนความยินยอม",
        text: "ถอนความยินยอมได้ตลอดเวลา โดยไม่กระทบต่อการประมวลผลที่ผ่านมา",
      },
    ],
  },
  {
    id: "7",
    title: "การเปลี่ยนแปลงนโยบาย",
    content: [
      {
        subtitle: "",
        text: "เราอาจอัปเดตนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว การเปลี่ยนแปลงสำคัญจะแจ้งให้คุณทราบผ่านอีเมลหรือประกาศบนเว็บไซต์ แนะนำให้ตรวจสอบนโยบายนี้เป็นระยะ",
      },
    ],
  },
  {
    id: "8",
    title: "ติดต่อเรา",
    content: [
      {
        subtitle: "",
        text: "หากคุณมีคำถามหรือต้องการใช้สิทธิ์เกี่ยวกับข้อมูลส่วนบุคคล กรุณาติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ของเรา ผ่านอีเมล: privacy@ttthi.com หรือโทร: +66 (0) 00 000 0000",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0a1842] pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 mb-6">
            <Shield size={28} className="text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="text-gray-400 text-lg">
            อัปเดตล่าสุด: 25 กุมภาพันธ์ 2026
          </p>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            TTTHI ให้ความสำคัญกับความเป็นส่วนตัวของคุณอย่างยิ่ง
            นโยบายนี้อธิบายว่าเราเก็บรวบรวม ใช้
            และปกป้องข้อมูลส่วนบุคคลของคุณอย่างไร
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            หน้าแรก
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-800">นโยบายความเป็นส่วนตัว</span>
        </div>
      </div>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="bg-blue-50 border-l-4 border-[#0a1842] rounded-r-2xl p-6 mb-12">
            <p className="text-gray-700 leading-relaxed text-sm">
              นโยบายความเป็นส่วนตัวนี้มีผลบังคับใช้กับการรวบรวม การใช้
              และการเปิดเผยข้อมูลส่วนบุคคลโดย{" "}
              <strong>บริษัท ธรรมธันธิ์ จำกัด (TTTHI)</strong>{" "}
              ให้กับผู้ใช้งานเว็บไซต์และบริการทั้งหมดของเรา
              การใช้บริการของเราถือว่าคุณยอมรับนโยบายนี้
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
            <h2 className="font-bold text-[#0a1842] text-base mb-4">สารบัญ</h2>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#section-${s.id}`}
                    className="text-sm text-blue-700 hover:text-amber-600 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">{s.id}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="scroll-mt-24"
              >
                <h2 className="text-xl font-bold text-[#0a1842] mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 text-sm font-bold flex items-center justify-center shrink-0">
                    {section.id}
                  </span>
                  {section.title}
                </h2>
                <div className="space-y-4 pl-11">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      {item.subtitle && (
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-b border-gray-100" />
              </div>
            ))}
          </div>

          {/* Back button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0a1842] hover:bg-[#1a3e9e] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-lg hover:-translate-y-0.5"
            >
              กลับสู่หน้าแรก
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
