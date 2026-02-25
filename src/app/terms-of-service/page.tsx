"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const content = {
  th: {
    title: "ข้อกำหนดการใช้งาน",
    subtitle: "บริษัท ทามแทนธิ จำกัด",
    updated: "อัปเดตล่าสุด: 1 มกราคม 2567",
    intro:
      "ข้อกำหนดการใช้งานฉบับนี้กำหนดเงื่อนไขในการใช้บริการ เว็บไซต์ และแอปพลิเคชันของ บริษัท ทามแทนธิ จำกัด ('บริษัท') กรุณาอ่านและทำความเข้าใจข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้บริการ",
    sections: [
      {
        title: "1. การยอมรับข้อกำหนด",
        content:
          "การเข้าถึงหรือใช้บริการของบริษัท ถือว่าท่านได้อ่าน เข้าใจ และยอมรับข้อกำหนดการใช้งานทั้งหมดที่ระบุในเอกสารนี้ หากท่านไม่ยอมรับข้อกำหนดเหล่านี้ กรุณางดใช้บริการ",
      },
      {
        title: "2. คำอธิบายบริการ",
        content: `บริษัทให้บริการดังต่อไปนี้:
• ระบบกล้องวงจรปิดและความปลอดภัย (CCTV & Security)
• เครื่องบันทึกภาพ DVR/NVR และอุปกรณ์ที่เกี่ยวข้อง
• การพัฒนาซอฟต์แวร์แบบ Custom
• การติดตั้ง บำรุงรักษา และให้คำปรึกษาด้านเทคโนโลยี`,
      },
      {
        title: "3. การลงทะเบียนและบัญชีผู้ใช้",
        content: `ในการใช้บริการบางส่วน ท่านอาจต้องลงทะเบียนสร้างบัญชีผู้ใช้ ท่านมีหน้าที่:
• ให้ข้อมูลที่ถูกต้องและครบถ้วนในการลงทะเบียน
• รักษาความลับของรหัสผ่านและไม่เปิดเผยแก่บุคคลอื่น
• แจ้งบริษัททันทีหากพบว่ามีการเข้าถึงบัญชีโดยไม่ได้รับอนุญาต`,
      },
      {
        title: "4. การใช้งานที่ยอมรับได้",
        content: `ท่านตกลงที่จะใช้บริการเพื่อวัตถุประสงค์ที่ถูกกฎหมายเท่านั้น และจะไม่:
• ละเมิดกฎหมายหรือกฎระเบียบที่เกี่ยวข้อง
• ส่งข้อมูลที่เป็นอันตราย ทำให้เข้าใจผิด หรือละเมิดสิทธิ์ของผู้อื่น
• พยายามแฮ็กหรือเจาะระบบของบริษัทหรือผู้ใช้รายอื่น
• ใช้บริการเพื่อส่งสแปมหรือมัลแวร์`,
      },
      {
        title: "5. ทรัพย์สินทางปัญญา",
        content:
          "เนื้อหา โลโก้ ซอฟต์แวร์ และทรัพย์สินทางปัญญาทั้งหมดที่ปรากฏในเว็บไซต์และแอปพลิเคชันของบริษัทเป็นกรรมสิทธิ์ของ บริษัท ทามแทนธิ จำกัด ห้ามคัดลอก ดัดแปลง เผยแพร่ หรือนำไปใช้โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร",
      },
      {
        title: "6. ข้อจำกัดความรับผิด",
        content: `บริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจาก:
• การใช้หรือไม่สามารถใช้บริการได้
• การสูญหายของข้อมูลหรือผลกำไร
• เหตุการณ์ที่อยู่นอกการควบคุมของบริษัท (Force Majeure)
• ความบกพร่องของระบบอันเนื่องมาจากบุคคลที่สาม`,
      },
      {
        title: "7. การชำระเงินและการคืนเงิน",
        content: `สำหรับบริการที่มีค่าใช้จ่าย:
• ราคาและเงื่อนไขการชำระเงินจะระบุในสัญญาหรือใบเสนอราคา
• การคืนเงินพิจารณาเป็นรายกรณีตามนโยบายของบริษัท
• บริษัทสงวนสิทธิ์ในการปรับราคาโดยแจ้งล่วงหน้า 30 วัน`,
      },
      {
        title: "8. การสิ้นสุดการให้บริการ",
        content:
          "บริษัทสงวนสิทธิ์ระงับหรือยุติการให้บริการแก่ผู้ใช้ที่ละเมิดข้อกำหนดนี้ หรือใช้บริการในลักษณะที่ไม่เหมาะสม โดยไม่ต้องแจ้งล่วงหน้า ท่านสามารถยกเลิกบัญชีได้เมื่อใดก็ได้โดยติดต่อบริษัท",
      },
      {
        title: "9. กฎหมายที่บังคับใช้",
        content:
          "ข้อกำหนดการใช้งานนี้อยู่ภายใต้และตีความตามกฎหมายไทย ข้อพิพาทใดๆ ที่เกิดขึ้นจากข้อกำหนดนี้จะอยู่ในเขตอำนาจของศาลในประเทศไทย",
      },
      {
        title: "10. การเชื่อมโยงไปยังเว็บไซต์ภายนอก",
        content:
          "บริการของเราอาจมีลิงก์ไปยังเว็บไซต์ภายนอก บริษัทไม่รับผิดชอบต่อเนื้อหา นโยบายความเป็นส่วนตัว หรือการปฏิบัติของเว็บไซต์เหล่านั้น",
      },
      {
        title: "11. ติดต่อเรา",
        content: `หากท่านมีคำถามเกี่ยวกับข้อกำหนดการใช้งาน ติดต่อเราได้ที่:
บริษัท ทามแทนธิ จำกัด
อีเมล: info@ttthi.com
โทรศัพท์: +66 (0) 00 000 0000`,
      },
    ],
  },
  en: {
    title: "Terms of Service",
    subtitle: "Thamthanthi Co., Ltd.",
    updated: "Last updated: January 1, 2024",
    intro:
      "These Terms of Service outline the conditions for using the services, website, and applications of Thamthanthi Co., Ltd. ('Company'). Please read and understand these terms carefully before using our services.",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content:
          "By accessing or using the Company's services, you confirm that you have read, understood, and agreed to all terms outlined in this document. If you do not agree to these terms, please discontinue use of our services.",
      },
      {
        title: "2. Description of Services",
        content: `The Company provides the following services:
• CCTV and security systems installation and maintenance
• DVR/NVR recorders and related hardware
• Custom software development
• Technology installation, maintenance, and consulting`,
      },
      {
        title: "3. Registration and User Accounts",
        content: `Some services may require you to create a user account. You are responsible for:
• Providing accurate and complete information during registration
• Maintaining the confidentiality of your password and not sharing it with others
• Immediately notifying the Company of any unauthorized access to your account`,
      },
      {
        title: "4. Acceptable Use",
        content: `You agree to use the services for lawful purposes only, and you will not:
• Violate any applicable laws or regulations
• Transmit harmful, misleading, or rights-infringing content
• Attempt to hack or gain unauthorized access to the Company's or other users' systems
• Use the services to send spam or malware`,
      },
      {
        title: "5. Intellectual Property",
        content:
          "All content, logos, software, and intellectual property appearing on the Company's website and applications are the property of Thamthanthi Co., Ltd. Copying, modifying, distributing, or using them without prior written authorization is strictly prohibited.",
      },
      {
        title: "6. Limitation of Liability",
        content: `The Company shall not be liable for any damages arising from:
• Use of or inability to use the services
• Loss of data or profits
• Events beyond the Company's control (Force Majeure)
• System failures caused by third parties`,
      },
      {
        title: "7. Payments and Refunds",
        content: `For paid services:
• Pricing and payment terms will be specified in contracts or quotations
• Refunds are evaluated on a case-by-case basis per Company policy
• The Company reserves the right to adjust pricing with 30 days prior notice`,
      },
      {
        title: "8. Termination of Service",
        content:
          "The Company reserves the right to suspend or terminate service to users who violate these terms or misuse the services, without prior notice. You may cancel your account at any time by contacting the Company.",
      },
      {
        title: "9. Governing Law",
        content:
          "These Terms of Service are governed by and interpreted in accordance with the laws of Thailand. Any disputes arising from these terms shall be subject to the jurisdiction of courts in Thailand.",
      },
      {
        title: "10. Links to External Websites",
        content:
          "Our services may contain links to external websites. The Company is not responsible for the content, privacy policies, or practices of those websites.",
      },
      {
        title: "11. Contact Us",
        content: `If you have questions about these Terms of Service, please contact us:
Thamthanthi Co., Ltd.
Email: info@ttthi.com
Phone: +66 (0) 00 000 0000`,
      },
    ],
  },
};

export default function TermsOfServicePage() {
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
