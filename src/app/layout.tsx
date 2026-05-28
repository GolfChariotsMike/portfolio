import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Brayshaw — Web & AI Development",
  description: "Full-stack web development, AI-powered SaaS, and digital products for Australian businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
