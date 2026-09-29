"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show banner when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setBannerVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setBannerVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40 transition-all duration-300 ease-in-out ${
        bannerVisible ? "top-10" : "top-0"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="w-8 h-8 bg-purple-600 rounded-sm flex items-center justify-center overflow-hidden">
            <Image src={"/images/logo.jpg"} alt="logo" width={32} height={32} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Products
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Reviews
            </a>
            {/* <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </a> */}
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href={"https://portal.tarteeb.uz/login"}>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
            <Link href="#pricing">
              <Button className="bg-purple-600 hover:bg-purple-700">
                See Pricing
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-4 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Products
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Reviews
              </a>
              {/* <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Blog
              </a> */}
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Contact us
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Link href={"https://portal.tarteeb.uz/login"}>
                  <Button
                    variant="ghost"
                    className="justify-start cursor-ponter"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="#pricing">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    See Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
