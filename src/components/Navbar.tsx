"use client"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Sheet, SheetTitle, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

const sections = ["About", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#f5f5f5]/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            <span className="text-black dark:text-white">SAPPHIREGAZE_</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((section, i) =>
              <Link key={i} href={`#${section.toLocaleLowerCase()}`} className="hover:underline underline-offset-4 text-black dark:text-white">
                {section}
              </Link>
            )}
            <Button className="rounded-none border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors" asChild>
              <Link href={"https://github.com/sapphiregaze/"}>GitHub</Link>
            </Button>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-none">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] font-mono">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-6 mt-12 px-8">
                  {sections.map((section, i) =>
                    <Link key={i} href={`#${section.toLocaleLowerCase()}`} className="text-xl hover:underline">
                      {section}
                    </Link>
                  )}
                  <Button className="rounded-none border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors w-full mt-4" asChild>
                    <Link href={"https://github.com/sapphiregaze/"}>GitHub</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

