import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ChevronRight } from "lucide-react";

export const metadata = {
  title: "ข้อกำหนดการใช้งาน | TTTHI",
  description: "ข้อกำหนดและเงื่อนไขการใช้งานบริการของ TTTHI",
};

const sections = [
  {
    id: "1",
    title: "การยอมรับข้อกำหนด",
    content: [
      {
        subtitle: "",
        text: "การเข้าถึงหรือใช้งานเว็บไซต์และบริการของ TTTHI ถือว่าคุณได้อ่าน เข้าใจ และยอมรับข้อกำหนดการใช้งานเหล่านี้ทั้งหมด หากคุณไม่เห็นด้วย กรุณาหยุดใช้บริการของเรา",
      },
    ],
  },
  {
    id: "2",
    title: "คำอธิบายบริการ",
    content: [
      {
        subtitle: "",
        text: "TTTHI ให้บริการด้านระบบกล้องวงจรปิด อุปกรณ์รักษาความปลอดภัย และพัฒนาระบบซอฟต์แวร์ บริการของเราครอบคลุมการให้คำปรึกษา ออกแบบ ติดตั้ง และบำรุงรักษาระบบ",
      },
      {
        subtitle: "ขอบเขตบริการ",
        text: "รายละเอียดและขอบเขตของบริการแต่ละประเภทจะถูกระบุในใบเสนอราคาหรือสัญญาให้บริการแยกต่างหาก ซึ่งถือเป็นส่วนหนึ่งของข้อตกลงนี้",
      },
    ],
  },
  {
    id: "3",
    title: "การใช้งานที่ยอมรับได้",
    content: [
      {
        subtitle: "3.1 การใช้งานที่อนุญาต",
        text: "คุณสามารถใช้บริการของเราเพื่อวัตถุประสงค์ที่ถูกกฎหมายและตามที่ระบุในข้อตกลงเท่านั้น",
      },
      {
        subtitle: "3.2 สิ่งที่ห้ามกระทำ",
        text: "ห้ามใช้บริการเพื่อวัตถุประสงค์ที่ผิดกฎหมาย ละเมิดสิทธิ์ผู้อื่น เผยแพร่เนื้อหาที่เป็นอันตราย หรือพยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต",
      },
      {
        subtitle: "3.3 การละเมิดระบบ",
        text: "ห้ามกระทำการใดๆ ที่อาจขัดขวางการทำงานของระบบ รวมถึงการส่งไวรัส มัลแวร์ หรือโค้ดที่เป็นอันตราย",
      },
    ],
  },
  {
    id: "4",
    title: "ทรัพย์สินทางปัญญา",
    content: [
      {
        subtitle: "4.1 สิทธิ์ของ TTTHI",
        text: "เนื้อหา โลโก้ เครื่องหมายการค้า ซอฟต์แวร์ และวัสดุทั้งหมดบนเว็บไซต์เป็นทรัพย์สินของ TTTHI และได้รับการคุ้มครองโดยกฎหมายทรัพย์สินทางปัญญา",
      },
      {
        subtitle: "4.2 สิทธิ์การใช้งานจำกัด",
        text: "คุณได้รับอนุญาตให้ใช้งานเนื้อหาเพื่อวัตถุประสงค์ส่วนตัวและไม่ใช่เชิงพาณิชย์เท่านั้น ห้ามทำซ้ำ แก้ไข หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร",
      },
      {
        subtitle: "4.3 ซอฟต์แวร์ที่พัฒนาตามสั่ง",
        text: "ในกรณีที่เราพัฒนาซอฟต์แวร์ตามสั่งให้กับคุณ สิทธิ์ความเป็นเจ้าของจะถูกกำหนดตามสัญญาให้บริการแยกต่างหาก",
      },
    ],
  },
  {
    id: "5",
    title: "ข้อจำกัดความรับผิด",
    content: [
      {
        subtitle: "5.1 ขอบเขตความรับผิด",
        text: "TTTHI ไม่รับผิดชอบต่อความเสียหายทางอ้อม ความเสียหายที่เป็นผลสืบเนื่อง หรือความเสียหายพิเศษใดๆ ที่เกิดจากการใช้หรือไม่สามารถใช้บริการของเราได้",
      },
      {
        subtitle: "5.2 ความพร้อมใช้งาน",
        text: "เราพยายามให้บริการอย่างต่อเนื่อง แต่ไม่รับประกันว่าบริการจะไม่มีการหยุดชะงัก ความล่าช้า หรือข้อผิดพลาด",
      },
      {
        subtitle: "5.3 เนื้อหาของบุคคลที่สาม",
        text: "เราไม่รับผิดชอบต่อเนื้อหา ผลิตภัณฑ์ หรือบริการของบุคคลที่สามที่อาจเชื่อมโยงกับบริการของเรา",
      },
    ],
  },
  {
    id: "6",
    title: "การชำระเงินและการคืนเงิน",
    content: [
      {
        subtitle: "6.1 เงื่อนไขการชำระเงิน",
        text: "การชำระเงินเป็นไปตามเงื่อนไขที่ระบุในใบเสนอราคาหรือสัญญาแต่ละโครงการ",
      },
      {
        subtitle: "6.2 นโยบายการคืนเงิน",
        text: "TTTHI มีนโยบายคืนเงินสำหรับกรณีที่บริการไม่เป็นไปตามข้อกำหนดที่ตกลงกัน โดยพิจารณาเป็นรายกรณี กรุณาติดต่อฝ่ายบริการลูกค้าเพื่อรับทราบรายละเอียด",
      },
    ],
  },
  {
    id: "7",
    title: "การรับประกันสินค้าและบริการ",
    content: [
      {
        subtitle: "7.1 การรับประกันฮาร์ดแวร์",
        text: "สินค้าฮาร์ดแวร์มีการรับประกันตามที่ระบุในเอกสารรับประกันสินค้าแต่ละรายการ ครอบคลุมข้อบกพร่องจากการผลิต",
      },
      {
        subtitle: "7.2 การรับประกันการติดตั้ง",
        text: "งานติดตั้งที่ดำเนินการโดยทีมงาน TTTHI มีการรับประกันงานติดตั้ง 1 ปี นับจากวันที่ส่งมอบงาน",
      },
      {
        subtitle: "7.3 ข้อยกเว้นการรับประกัน",
        text: "การรับประกันไม่ครอบคลุมความเสียหายจากการใช้งานผิดวัตถุประสงค์ อุบัติเหตุ ภัยธรรมชาติ หรือการดัดแปลงโดยไม่ได้รับอนุญาต",
      },
    ],
  },
  {
    id: "8",
    title: "การยกเลิกบริการ",
    content: [
      {
        subtitle: "",
        text: "TTTHI ขอสงวนสิทธิ์ในการระงับหรือยกเลิกการให้บริการหากพบว่ามีการละเมิดข้อกำหนดเหล่านี้ การดำเนินกิจกรรมผิดกฎหมาย หรือพฤติกรรมที่ไม่เหมาะสม โดยจะแจ้งให้ทราบล่วงหน้าตามความเหมาะสม",
      },
    ],
  },
  {
    id: "9",
    title: "กฎหมายที่ใช้บังคับ",
    content: [
      {
        subtitle: "",
        text: "ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย ข้อพิพาทใดๆ ที่เกิดขึ้นจากหรือเกี่ยวข้องกับข้อกำหนดนี้จะถูกนำเสนอต่อศาลไทยที่มีเขตอำนาจ",
      },
    ],
  },
  {
    id: "10",
    title: "การเปลี่ยนแปลงข้อกำหนด",
    content: [
      {
        subtitle: "",
        text: "เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ได้ตลอดเวลา การเปลี่ยนแปลงจะมีผลทันทีเมื่อประกาศบนเว็บไซต์ การใช้บริการต่อไปหลังจากการเปลี่ยนแปลงถือว่าคุณยอมรับข้อกำหนดที่แก้ไขแล้ว",
      },
    ],
  },
  {
    id: "11",
    title: "ติดต่อเรา",
    content: [
      {
        subtitle: "",
        text: "หากมีคำถามเกี่ยวกับข้อกำหนดการใช้งาน กรุณาติดต่อ: อีเมล: legal@ttthi.com หรือโทร: +66 (0) 00 000 0000 หรือส่งจดหมายมาที่: บริษัท ธรรมธันธิ์ จำกัด กรุงเทพมหานคร ประเทศไทย",
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0a1842] pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 mb-6">
            <FileText size={28} className="text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            ข้อกำหนดการใช้งาน
          </h1>
          <p className="text-gray-400 text-lg">
            อัปเดตล่าสุด: 25 กุมภาพันธ์ 2026
          </p>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            กรุณาอ่านข้อกำหนดและเงื่อนไขเหล่านี้อย่างละเอียดก่อนใช้บริการของ
            TTTHI
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
          <span className="text-gray-800">ข้อกำหนดการใช้งาน</span>
        </div>
      </div>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6 mb-12">
            <p className="text-gray-700 leading-relaxed text-sm">
              ข้อกำหนดการใช้งานนี้เป็นข้อตกลงระหว่างคุณกับ{" "}
              <strong>บริษัท ธรรมธันธิ์ จำกัด (TTTHI)</strong>{" "}
              ซึ่งกำหนดเงื่อนไขการใช้งานเว็บไซต์และบริการทั้งหมดของเรา
              การใช้บริการถือว่าคุณยอมรับข้อกำหนดเหล่านี้ทั้งหมด
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
            <h2 className="font-bold text-[#0a1842] text-base mb-4">สารบัญ</h2>
            <ol className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
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
                  <span className="w-8 h-8 rounded-lg bg-[#0a1842]/10 text-[#0a1842] text-sm font-bold flex items-center justify-center shrink-0">
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

          {/* Back + Privacy */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0a1842] hover:bg-[#1a3e9e] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-lg hover:-translate-y-0.5"
            >
              กลับสู่หน้าแรก
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 border-2 border-[#0a1842] text-[#0a1842] hover:bg-[#0a1842] hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
