import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustav James - Full Stack Developer | Cybersecurity Specialist",
  description: "Professional full-stack developer specializing in secure digital solutions. Offering frontend development, backend development, cybersecurity, and network engineering services.",
  keywords: "full stack development, frontend development, backend development, cybersecurity, network security, React, Next.js, TypeScript, Kali Linux, Node.js",
  authors: [{ name: "Gustav James" }],
  openGraph: {
    title: "Gustav James - Full Stack Developer",
    description: "Professional full-stack developer specializing in secure digital solutions",
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