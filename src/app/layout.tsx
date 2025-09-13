import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YourName - 全栈开发者 | UI/UX设计师",
  description: "专业的全栈开发者，专注于创造美观、实用的数字体验。提供前端开发、后端开发、UI/UX设计等服务。",
  keywords: "全栈开发, 前端开发, 后端开发, UI设计, UX设计, React, Next.js, TypeScript",
  authors: [{ name: "YourName" }],
  openGraph: {
    title: "YourName - 全栈开发者",
    description: "专业的全栈开发者，专注于创造美观、实用的数字体验",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}