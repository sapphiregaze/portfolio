"use client"
import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/ProjectCard"
import ContactForm from "@/components/ContactForm"
import TypewriterEffect from "@/components/TypewriterEffect"

import { cn } from "@/lib/utils"

const skills =
  ["Golang", "TypeScript", "Next.js", "React.js",
    "Tailwind CSS", "SQL", "Rust", "Nix", "Linux",
    "Docker", "C/C++", "Shell", "Python", "Git"];

const projects = [
  {
    title: "Syntinel Nyx",
    description: "IT Automation Platform for Simplified Asset Management, Vulnerability Detection, and Patch Application.",
    link: "https://www.syntinel.dev/",
    tags: ["Golang", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Reverie",
    description: "Cross-Platform Application That Gamifies Self-Care and Productivity.",
    link: "https://devpost.com/software/reverie-zy25ls/",
    tags: ["TypeScript", "Next.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "Discord GoRP",
    description: "Custom Discord Rich Presence Manager for Linux.",
    link: "https://github.com/sapphiregaze/discord-gorp/",
    tags: ["Golang", "Linux", "Shell"],
  },
];

export default function Home() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#121212] font-mono text-black dark:text-white">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-block px-3 py-1 border border-black dark:border-white text-sm">
            SAPPHIREGAZE / 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <TypewriterEffect text="Hey, I'm Jasmine!" />
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Sleep deprived developer who makes silly ideas a reality.
            Incoming SWE intern @ Baker Hughes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-none border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors" asChild>
              <Link href={"#projects"}>View Projects</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-none border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              asChild
            >
              <Link href={"#contact"}>Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20 border-t border-black dark:border-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <span className="mr-4 text-sm opacity-50 font-mono">01</span>
            ABOUT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 leading-relaxed">
                I&apos;m a developer with a passion for creating clean, functional, and secure software for both myself and others. I enjoy working in web development as well systems-level programming. I love programming in general and am looking forward to exploring new fields!
              </p>
              <p className="leading-relaxed">
                &quot;Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.&quot; - Linus Torvalds
              </p>
            </div>
            <div className="border border-black dark:border-white p-6 bg-white dark:bg-[#1a1a1a] text-black dark:text-white">
              <h3 className="text-lg font-bold mb-4">SKILLS</h3>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, i) =>
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-xs">▶</span>
                    {skill}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-4 py-20 border-t border-black dark:border-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <span className="mr-4 text-sm opacity-50 font-mono">02</span>
            PROJECTS
          </h2>
          <div className="grid gap-8">
            {projects.map((project, i) =>
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
              />
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20 border-t border-black dark:border-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <span className="mr-4 text-sm opacity-50 font-mono">03</span>
            CONTACT
          </h2>
          <div className="border border-black dark:border-white p-8 bg-white dark:bg-[#1a1a1a]">
            <p className="mb-6 leading-relaxed">
              Interested in working together? Feel free to send me a message!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t border-black dark:border-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 SapphireGaze. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <Button
        onClick={scrollToTop}
        variant="outline"
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-none border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg",
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}

