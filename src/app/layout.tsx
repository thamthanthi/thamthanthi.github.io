import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "TTTHI – Technology for a Safer Tomorrow",
  description:
    "TTTHI delivers cutting-edge CCTV solutions, recording systems, and custom software development. นำเสนอโซลูชันระบบกล้องวงจรปิด อุปกรณ์บันทึกภาพ และพัฒนาระบบซอฟต์แวร์ที่ทันสมัย",
  keywords: [
    "TTTHI",
    "กล้องวงจรปิด",
    "CCTV",
    "Smart Camera",
    "DVR",
    "NVR",
    "Software Development",
    "Security System",
    "พัฒนาซอฟต์แวร์",
    "ระบบรักษาความปลอดภัย",
  ],
  icons: {
    icon: "/favicon.ico",
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
