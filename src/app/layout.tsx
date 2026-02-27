import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const googleSans = Google_Sans({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-google-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ทำทันที โซลูชั่น จำกัด | GPS Tracking & Fleet Safety",
  description:
    "ผู้ให้บริการ GPS Tracking รับรองโดย DLT พร้อมระบบ MDVR, ADAS & DMS ติดตามยานพาหนะ Real-time ผ่านเว็บและมือถือ ติดต่อเราวันนี้",
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
    title: "ทำทันที โซลูชั่น จำกัด | GPS Tracking & Fleet Safety",
    description:
      "ผู้ให้บริการ GPS Tracking รับรองโดย DLT พร้อมระบบ MDVR, ADAS & DMS ติดตามยานพาหนะ Real-time ผ่านเว็บและมือถือ ติดต่อเราวันนี้",
    url: "https://ttthi.com",
    siteName: "ทำทันที โซลูชั่น จำกัด",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ทำทันที โซลูชั่น จำกัด | GPS Tracking & Fleet Safety",
    description:
      "ผู้ให้บริการ GPS Tracking รับรองโดย DLT พร้อมระบบ MDVR, ADAS & DMS ติดตามยานพาหนะ Real-time ผ่านเว็บและมือถือ ติดต่อเราวันนี้",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${googleSans.variable} scroll-smooth`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
