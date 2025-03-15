import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "SapphireGaze",
  description: "SapphireGaze's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
