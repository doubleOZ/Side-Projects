import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vera_V2",
  description: "Landing page for eco diving adventures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-r from-neutral-800 from-30% via-yellow-400 to-yellow-300"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
