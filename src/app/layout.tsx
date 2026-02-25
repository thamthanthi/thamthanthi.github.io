import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TTTHI – Technology for a Safer Tomorrow",
  description:
    "TTTHI นำเสนอโซลูชันระบบกล้องวงจรปิด อุปกรณ์บันทึกภาพ และพัฒนาระบบซอฟต์แวร์ที่ทันสมัย ตอบโจทย์ทุกความต้องการด้านความปลอดภัยและเทคโนโลยี",
  keywords: [
    "TTTHI",
    "กล้องวงจรปิด",
    "CCTV",
    "Smart Camera",
    "DVR",
    "NVR",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
