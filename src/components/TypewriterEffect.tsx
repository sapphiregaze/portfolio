"use client"
import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
}

export default function TypewriterEffect({ text, delay = 100 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      const blinkInterval = setInterval(() => {
        setCursorVisible((prev) => !prev)
      }, 500)

      return () => clearInterval(blinkInterval)
    }
  }, [currentIndex, delay, text])

  return (
    <span className="inline-block">
      {displayText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-black dark:bg-white ml-1 align-middle ${cursorVisible ? "opacity-100" : "opacity-0"}`}
      ></span>
    </span>
  )
}

