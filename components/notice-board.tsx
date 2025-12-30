"use client"

import { Bell } from "lucide-react"
import { useState, useEffect } from "react"

const notices = [
  "[Important Notice 1 - Add your notice text here]",
  "[Important Notice 2 - Add your notice text here]",
  "[Important Notice 3 - Add your notice text here]",
  "[Important Notice 4 - Add your notice text here]",
]

export function NoticeBoard() {
  const [currentNotice, setCurrentNotice] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-accent text-accent-foreground py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Bell className="h-5 w-5 animate-pulse" />
            <span className="font-semibold text-sm">Latest Notice:</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentNotice * 100}%)` }}
            >
              {notices.map((notice, index) => (
                <p key={index} className="text-sm h-6 leading-6">
                  {notice}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
