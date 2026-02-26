import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title:
    "บริษัท ทำทันที โซลูชั่น จำกัด – เทคโนโลยีเพื่อความปลอดภัยในวันพรุ่งนี้",
  description:
    "บริษัท ทำทันที โซลูชั่น จำกัด ผู้ให้บริการ GPS Tracking ที่ได้รับการรับรองจากกรมขนส่งทางบก (DLT) พร้อมอุปกรณ์ MDVR ระบบ ADAS & DMS และแพลตฟอร์มติดตามยานพาหนะผ่านเว็บและมือถือ | DLT-certified GPS Tracking, MDVR, ADAS & DMS fleet safety solutions",
  keywords: [
    "บริษัท ทำทันที โซลูชั่น จำกัด",
    "Thamthanthi Solution Co., Ltd.",
    "GPS Tracking",
    "MDVR",
    "ADAS",
    "DMS",
    "DLT",
    "กรมขนส่งทางบก",
    "Fleet Safety",
    "Software Development",
    "ติดตามยานพาหนะ",
    "พัฒนาซอฟต์แวร์",
  ],
  icons: {
    icon: "/Logo-TTTHI-(T).png",
    apple: "/Logo-TTTHI-(T).png",
  },
  openGraph: {
    title:
      "บริษัท ทำทันที โซลูชั่น จำกัด – เทคโนโลยีเพื่อความปลอดภัยในวันพรุ่งนี้",
    description:
      "บริษัท ทำทันที โซลูชั่น จำกัด ผู้ให้บริการ GPS Tracking ที่ได้รับการรับรองจากกรมขนส่งทางบก (DLT) พร้อมอุปกรณ์ MDVR ระบบ ADAS & DMS และแพลตฟอร์มติดตามยานพาหนะผ่านเว็บและมือถือ",
    url: "https://ttthi.com",
    siteName: "บริษัท ทำทันที โซลูชั่น จำกัด",
    images: [
      {
        url: "https://ttthi.com/Logo-TTTHI-(T).png",
        width: 512,
        height: 512,
        alt: "บริษัท ทำทันที โซลูชั่น จำกัด",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "บริษัท ทำทันที โซลูชั่น จำกัด – เทคโนโลยีเพื่อความปลอดภัยในวันพรุ่งนี้",
    description:
      "บริษัท ทำทันที โซลูชั่น จำกัด ผู้ให้บริการ GPS Tracking ที่ได้รับการรับรองจากกรมขนส่งทางบก (DLT) พร้อมอุปกรณ์ MDVR ระบบ ADAS & DMS และแพลตฟอร์มติดตามยานพาหนะผ่านเว็บและมือถือ",
    images: ["https://ttthi.com/Logo-TTTHI-(T).png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
