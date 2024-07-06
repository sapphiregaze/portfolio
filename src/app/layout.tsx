import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";

import { Box } from "@mui/material";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";

const zilla = Zilla_Slab({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sapphire Cottage",
  description: "Portfolio Home Page For SapphireGaze!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zilla.className}>
        <ThemeProviderWrapper>
          <Box component="main" sx={{ padding: 5 }}>
            <Navbar />
            {children}
          </Box>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
