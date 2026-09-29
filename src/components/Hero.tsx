"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import AlertPreview from "./AlertPreview";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="overflow-x-clip px-4 pb-16 pt-10 lg:pb-24 lg:pt-16">
        <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              Parents know the moment you mark attendance.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
              Kabutar messages parents the moment you take attendance or enter a mark. Free for solo teachers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://t.me/m/86rEuvWvNDIy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start Free
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base"
                onClick={() => setOpen(true)}
              >
                Watch Demo
              </Button>
            </div>
          </div>

          <AlertPreview />
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="min-w-1/2 rounded-2xl bg-card p-4">
          <div className="relative mt-8 h-[50vh] w-full overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/dx9Cmx-arJM?autoplay=1&embeds_referring_euri=https%3A%2F%2Fwww.tarteeb.uz%2F&source_ve_path=MjM4NTE"
              title="Tarteeb Demo Video"
              className="absolute left-0 top-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
