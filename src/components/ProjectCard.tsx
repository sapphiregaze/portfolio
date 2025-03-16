import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="border border-black dark:border-white bg-white dark:bg-[#1a1a1a] p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          aria-label={`View ${title} project`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 border border-black dark:border-white">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

