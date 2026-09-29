"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show banner when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-r from-[#97F6F6] to-[#1DFCC8] text-white py-2 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between text-sm">
            {/* Promo Content */}
            <div className="flex items-center justify-center gap-4 flex-1">
              <div className="flex items-center gap-2">
                <span className="animate-pulse">🎉</span>
                <span className="font-medium text-[#111111] text-sm md:text-md">
                  Join our Telegram Channel
                </span>
                <span className="text-[#111] hidden md:block">
                  a cozy campfire where innovative educators gather to share
                  their experiences with AI.
                </span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="hidden sm:inline-flex bg-white/20 border-white/30 text-[#6366F1] hover:bg-white/30 text-xs px-3 py-1 h-6"
                onClick={() => window.open("https://t.me/tarteebuz", "_blank")}
              >
                Join Now
              </Button>
            </div>

            {/* Close Button */}
            {/* <button
              onClick={handleClose}
              className="ml-4 p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close banner"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
