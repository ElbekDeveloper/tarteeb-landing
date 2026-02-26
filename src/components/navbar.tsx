import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-all duration-300",
        scrolled 
          ? "h-16 border-b border-cyan-light shadow-[0_2px_8px_rgba(0,64,104,0.05)]" 
          : "h-[70px] border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Left side: Brand logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <img src="/t-logo.png" alt="Tarteeb Logo" className="h-12 w-auto rounded-lg" />
        </button>

        {/* Right side: "Get Featured" button */}
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="cursor-not-allowed">
                <Button
                  disabled
                  className="bg-[#d0d0d0] text-[#666666] hover:bg-[#d0d0d0] disabled:opacity-100"
                >
                  Get Featured
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-[250px] bg-navy-dark p-3 text-white">
              <p className="text-sm leading-relaxed">
                Only learn.net.uz students are eligible to get featured. Join our learning community to get started.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  )
}
