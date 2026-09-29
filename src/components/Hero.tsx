"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Dialog, DialogContent } from "./ui/dialog";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {/* Welcome to */}
            <Image
              src={"/images/tarteeb.svg"}
              alt="logo"
              width={400}
              height={400}
              className="inline-block align-middle"
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <br />
            <p data-aos="fade-up" data-aos-delay="500">
              AI Teaching Assistant <br /> for your study center
            </p>
          </h1>
          {/* Subheading */}
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your workflow with our powerful task management platform.
            Organize, prioritize, and accomplish more with intelligent automation.
          </p> */}
          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              See Pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 px-8 py-3 text-lg hover:bg-gray-50"
              onClick={() => setOpen(true)}
            >
              Watch Demo
            </Button>
          </div>
          {/*  */}
        </div>
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="min-w-1/2 p-4 bg-white rounded-xl">
          <div className="relative w-full mt-8 h-[50vh] rounded overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dx9Cmx-arJM?autoplay=1&embeds_referring_euri=https%3A%2F%2Fwww.tarteeb.uz%2F&source_ve_path=MjM4NTE"
              title="Tarteeb Demo Video"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
