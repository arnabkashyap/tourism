import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NE Threads | Cultural Marketplace & Tourism",
  description: "Tactical marketplace for authentic handloom and cultural tourism in Northeast India.",
};

import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-background text-foreground`}>
        <Providers>
          <TopBar />
          <main className="flex-1 pt-44 pb-24 px-4 overflow-y-auto">
            {children}
          </main>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
