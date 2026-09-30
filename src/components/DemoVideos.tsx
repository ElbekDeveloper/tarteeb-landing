"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

// Tarteeb's own YouTube Shorts, all in Uzbek.
const videos = [
  {
    id: "X04iFi_xlZQ",
    title: "A quick tour",
    description: "Groups, attendance and payments, managed in one place.",
  },
  {
    id: "WtzOWPFM4iQ",
    title: "From a center founder",
    description: "Tolib Toirovich, founder of Lingo Pro, on running lessons with Tarteeb.",
  },
  {
    id: "REJbBvjQ4xo",
    title: "Start for free",
    description: "How to start using Tarteeb free and bring AI into your classroom.",
  },
];

const poster = (id: string) => `https://i.ytimg.com/vi/${id}/oar2.jpg`;

export default function DemoVideos() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const video = videos[active];

  // On phones the list sits under the player; bring the player back into
  // view so the switch is visible.
  const select = (index: number) => {
    setActive(index);
    const player = playerRef.current;
    if (player && player.getBoundingClientRect().top < 0) {
      player.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "center",
      });
    }
  };

  return (
    <section id="demo" className="bg-muted/50 px-4 py-16 lg:py-28">
      <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_minmax(0,340px)] lg:grid-rows-[auto_1fr] lg:gap-x-20">
        <div className="max-w-xl lg:col-start-1">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Watch Tarteeb at work.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three short videos in Uzbek: the product, a founder&apos;s review,
            and how to start free.
          </p>
        </div>

        <Reveal className="w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div
            ref={playerRef}
            className="relative mx-auto aspect-[9/16] w-full max-w-[300px] sm:max-w-[340px] overflow-hidden rounded-[2rem] border border-border bg-[#0b1417] shadow-[0_32px_80px_-32px_rgba(0,64,104,0.45)]"
          >
            {playing ? (
              <iframe
                key={video.id}
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0`}
                title={video.title}
                className="absolute inset-0 size-full"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <AnimatePresence initial={false}>
                <motion.button
                  key={video.id}
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play video: ${video.title}`}
                  className="group absolute inset-0 cursor-pointer"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={poster(video.id)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 340px, 90vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
                  />
                  <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-primary shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                    <Play weight="fill" className="size-8 translate-x-0.5" />
                  </span>
                </motion.button>
              </AnimatePresence>
            )}
          </div>
        </Reveal>

        <ul className="flex flex-col gap-2 lg:col-start-1 lg:row-start-2 lg:self-start">
          {videos.map((item, index) => {
            const isActive = index === active;
            return (
              <li key={item.id}>
                <Reveal delay={index * 0.06}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => select(index)}
                    className={cn(
                      "flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-[background-color,border-color,box-shadow,transform] duration-300 active:scale-[0.99]",
                      isActive
                        ? "border-primary/40 bg-card shadow-[0_12px_32px_-20px_rgba(0,64,104,0.35)]"
                        : "border-transparent hover:bg-card/60"
                    )}
                  >
                    <span className="relative aspect-[9/16] w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={poster(item.id)}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-semibold">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                    <Play
                      weight={isActive ? "fill" : "regular"}
                      className={cn(
                        "size-5 shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
