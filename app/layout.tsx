import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "自动化社 | Build Real Systems",
  description: "Build Real Systems. 让想法接上电源，让系统开始运行。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
