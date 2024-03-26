import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { env } from '@/env'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(env.APP_URL),
  title: {
    template: "%s | devstore",
    default: "devstore",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
