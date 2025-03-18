import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "sapphiregaze",
  description: "despite everything, it's still you",
  openGraph: {
    images: ["https://www.sapphiregaze.dev/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script defer src="https://umami.sapphiregaze.dev/script.js" data-website-id="7018053a-c964-49ec-9fe6-ae183a349ded"></script>
      <body
        className={`${jetbrainsMono.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster position="bottom-left" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
