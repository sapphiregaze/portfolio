import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";

import "./globals.css";
import { ThemeProviderWrapper } from "../components/ThemeProviderWrapper";

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
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
