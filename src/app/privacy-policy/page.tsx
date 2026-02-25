"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const content = {
  th: {
    title: "นโยบายความเป็นส่วนตัว",
    subtitle: "บริษัท ทำทันที โซลูชั่น จำกัด",
    updated: "อัปเดตล่าสุด: 1 มกราคม 2567",
    intro:
      "บริษัท ทำทันที โซลูชั่น จำกัด ('บริษัท') ผู้ให้บริการ GPS Tracking ที่ได้รับการรับรองจากกรมขนส่งทางบก (DLT) และจำหน่ายอุปกรณ์ MDVR สำหรับยานพาหนะ ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งานและลูกค้าทุกท่าน เราจัดทำนโยบายความเป็นส่วนตัวฉบับนี้เพื่ออธิบายวิธีการเก็บรวบรวม ใช้ และคุ้มครองข้อมูลส่วนบุคคลของท่าน",
    sections: [
      {
        title: "1. ข้อมูลที่เราเก็บรวบรวม",
        content: `เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของท่านในหลายรูปแบบ ได้แก่:
• ข้อมูลที่ท่านให้โดยตรง: ชื่อ-นามสกุล, อีเมล, เบอร์โทรศัพท์, ที่อยู่
• ข้อมูลการใช้งานระบบ: ข้อมูลการเข้าถึงเว็บไซต์ แอปพลิเคชัน และแพลตฟอร์ม GPS Tracking
• ข้อมูลยานพาหนะและการเดินทาง: ตำแหน่ง GPS, เส้นทาง, ความเร็ว และพฤติกรรมการขับขี่จากอุปกรณ์ MDVR
• ข้อมูลอุปกรณ์: IP address, ประเภทเบราว์เซอร์, ระบบปฏิบัติการ`,
      },
      {
        title: "2. วัตถุประสงค์ในการใช้ข้อมูล",
        content: `เราใช้ข้อมูลส่วนบุคคลของท่านเพื่อ:
• ให้บริการ ติดต่อ และตอบสนองต่อคำถามของท่าน
• ปรับปรุงคุณภาพการบริการและผลิตภัณฑ์
• ส่งข้อมูลข่าวสาร โปรโมชั่น หรือการอัปเดตที่เกี่ยวข้อง
• ปฏิบัติตามข้อกำหนดทางกฎหมาย`,
      },
      {
        title: "3. การเปิดเผยข้อมูลแก่บุคคลที่สาม",
        content: `บริษัทจะไม่ขาย แลกเปลี่ยน หรือเปิดเผยข้อมูลส่วนบุคคลของท่านแก่บุคคลภายนอก ยกเว้นในกรณีดังต่อไปนี้:
• ได้รับความยินยอมจากท่านอย่างชัดแจ้ง
• เป็นไปตามข้อกำหนดทางกฎหมายหรือคำสั่งศาล
• เพื่อดำเนินการให้บริการโดยผู้ให้บริการที่น่าเชื่อถือ`,
      },
      {
        title: "4. ความปลอดภัยของข้อมูล",
        content:
          "เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสม รวมถึงการเข้ารหัสข้อมูล SSL/TLS และการควบคุมการเข้าถึงข้อมูล เพื่อปกป้องข้อมูลส่วนบุคคลของท่านจากการสูญหาย การเข้าถึงโดยไม่ได้รับอนุญาต หรือการเปิดเผยโดยไม่ชอบด้วยกฎหมาย",
      },
      {
        title: "5. ระยะเวลาการเก็บรักษาข้อมูล",
        content:
          "เราจะเก็บรักษาข้อมูลส่วนบุคคลของท่านตราบเท่าที่จำเป็นสำหรับวัตถุประสงค์ที่ระบุไว้ในนโยบายนี้ หรือตามที่กฎหมายกำหนด เมื่อข้อมูลไม่มีความจำเป็นอีกต่อไป เราจะดำเนินการลบหรือทำลายข้อมูลอย่างปลอดภัย",
      },
      {
        title: "6. สิทธิของเจ้าของข้อมูล",
        content: `ท่านมีสิทธิ์ดังต่อไปนี้เกี่ยวกับข้อมูลส่วนบุคคลของท่าน:
• สิทธิ์รับทราบและเข้าถึงข้อมูล
• สิทธิ์แก้ไขข้อมูลที่ไม่ถูกต้อง
• สิทธิ์ขอลบข้อมูล (Right to be Forgotten)
• สิทธิ์คัดค้านการประมวลผลข้อมูล
• สิทธิ์ขอถ่ายโอนข้อมูล`,
      },
      {
        title: "7. คุกกี้และเทคโนโลยีที่คล้ายกัน",
        content:
          "เว็บไซต์และแอปพลิเคชันของเราอาจใช้คุกกี้เพื่อเพิ่มประสบการณ์การใช้งาน วิเคราะห์การใช้งาน และนำเสนอเนื้อหาที่เหมาะสม ท่านสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้ได้ แต่อาจส่งผลต่อการใช้งานบางส่วน",
      },
      {
        title: "8. การเปลี่ยนแปลงนโยบาย",
        content:
          "บริษัทอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว เราจะแจ้งให้ท่านทราบถึงการเปลี่ยนแปลงที่สำคัญผ่านเว็บไซต์หรืออีเมล การใช้บริการต่อเนื่องหลังจากมีการเปลี่ยนแปลงถือว่าท่านยอมรับนโยบายที่ปรับปรุงแล้ว",
      },
      {
        title: "9. ติดต่อเรา",
        content: `หากท่านมีคำถามหรือต้องการใช้สิทธิ์ที่เกี่ยวข้องกับข้อมูลส่วนบุคคล สามารถติดต่อเราได้ที่:
บริษัท ทำทันที โซลูชั่น จำกัด
อีเมล: info@ttthi.com
โทรศัพท์: +66 (0) 00 000 0000`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "Thamthanthi Solution Co., Ltd.",
    updated: "Last updated: January 1, 2024",
    intro:
      "Thamthanthi Solution Co., Ltd. ('Company'), a DLT-certified GPS Tracking service provider and MDVR device distributor, is committed to protecting the privacy of all users and customers. This Privacy Policy explains how we collect, use, and safeguard your personal information.",
    sections: [
      {
        title: "1. Information We Collect",
        content: `We may collect personal information in various ways, including:
• Information you provide directly: full name, email address, phone number, address
• System usage data: information about how you access our website, application, and GPS Tracking platform
• Vehicle and trip data: GPS location, routes, speed, and driving behavior from MDVR devices
• Device information: IP address, browser type, operating system`,
      },
      {
        title: "2. How We Use Your Information",
        content: `We use your personal information to:
• Provide services, contact you, and respond to your inquiries
• Improve the quality of our services and products
• Send relevant news, promotions, or service updates
• Comply with legal requirements and obligations`,
      },
      {
        title: "3. Disclosure to Third Parties",
        content: `The Company will not sell, trade, or disclose your personal information to outside parties, except in the following circumstances:
• With your explicit consent
• As required by law or court order
• To trusted service providers who assist in operating our services`,
      },
      {
        title: "4. Data Security",
        content:
          "We implement appropriate security measures, including SSL/TLS encryption and access controls, to protect your personal information from loss, unauthorized access, or unlawful disclosure.",
      },
      {
        title: "5. Data Retention",
        content:
          "We retain your personal information for as long as necessary for the purposes described in this policy or as required by law. When data is no longer needed, we will securely delete or destroy it.",
      },
      {
        title: "6. Your Rights",
        content: `You have the following rights regarding your personal information:
• Right to be informed and to access your data
• Right to rectification of inaccurate data
• Right to erasure (Right to be Forgotten)
• Right to object to processing
• Right to data portability`,
      },
      {
        title: "7. Cookies and Similar Technologies",
        content:
          "Our website and applications may use cookies to enhance user experience, analyze usage, and present relevant content. You can configure your browser to refuse cookies, but this may affect some functionality.",
      },
      {
        title: "8. Policy Changes",
        content:
          "The Company may update this Privacy Policy from time to time. We will notify you of significant changes through our website or by email. Continued use of our services after changes constitutes acceptance of the updated policy.",
      },
      {
        title: "9. Contact Us",
        content: `If you have questions or wish to exercise your data rights, please contact us:
Thamthanthi Solution Co., Ltd.
Email: info@ttthi.com
Phone: +66 (0) 00 000 0000`,
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  const c = lang === "th" ? content.th : content.en;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Link
              href="/"
              className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
            >
              {lang === "th" ? "← หน้าหลัก" : "← Home"}
            </Link>
          </div>
          <h1 className="text-4xl font-extrabold text-[#0a1842] mb-2">
            {c.title}
          </h1>
          <p className="text-gray-500 font-medium mb-1">{c.subtitle}</p>
          <p className="text-gray-400 text-sm">{c.updated}</p>
          <p className="mt-6 text-gray-600 leading-relaxed">{c.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {c.sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-xl font-bold text-[#0a1842] mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0a1842] hover:bg-[#1a3e9e] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg text-sm"
          >
            {lang === "th" ? "← กลับหน้าหลัก" : "← Back to Home"}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
