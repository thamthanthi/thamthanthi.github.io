import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "THAMTHANTHI – Technology for a Safer Tomorrow",
  description:
    "THAMTHANTHI ผู้ให้บริการ GPS Tracking ที่ได้รับการรับรองจากกรมขนส่งทางบก (DLT) พร้อมอุปกรณ์ MDVR ระบบ ADAS & DMS และแพลตฟอร์มติดตามยานพาหนะผ่านเว็บและมือถือ | DLT-certified GPS Tracking, MDVR, ADAS & DMS fleet safety solutions",
  keywords: [
    "THAMTHANTHI",
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
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "THAMTHANTHI – Technology for a Safer Tomorrow",
    description:
      "THAMTHANTHI ผู้ให้บริการ GPS Tracking ที่ได้รับการรับรองจากกรมขนส่งทางบก (DLT) พร้อมอุปกรณ์ MDVR ระบบ ADAS & DMS และแพลตฟอร์มติดตามยานพาหนะผ่านเว็บและมือถือ",
    url: "https://ttthi.com",
    siteName: "THAMTHANTHI",
    images: [
      {
        url: "https://ttthi.com/Logo%20TTTHI.png",
        width: 512,
        height: 512,
        alt: "THAMTHANTHI Logo",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "THAMTHANTHI – Technology for a Safer Tomorrow",
    description:
      "GPS Tracking รับรองโดย DLT พร้อม MDVR, ADAS & DMS และแพลตฟอร์มติดตามยานพาหนะ",
    images: ["https://ttthi.com/Logo%20TTTHI.png"],
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
