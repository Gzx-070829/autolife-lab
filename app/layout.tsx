import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoLife Lab",
  description: "以 AI 学习与嵌入式机器人实践为双主线，以开源协作和成果产出为核心。",
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
