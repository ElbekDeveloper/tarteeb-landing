"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ChatCircleText, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

// Sample alert copy shown to parents. Swap this component for a real Telegram
// bot screenshot once one is available.
const messages = [
  {
    id: "absence",
    text: "Aziza Karimova was marked absent from IELTS 6.5 today.",
    time: "18:12",
  },
  {
    id: "mark",
    text: "Aziza Karimova received 82/100 for the Speaking test in IELTS 6.5.",
    time: "19:45",
  },
];

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function AlertPreview() {
  const reduce = useReducedMotion();

  return (
    <div className="relative isolate mx-auto w-full max-w-[340px] lg:mx-0 lg:ml-auto">
      {/* Tinted plate behind the phone */}
      <div
        aria-hidden
        className="absolute -inset-x-5 -inset-y-4 -z-10 rotate-3 rounded-[2.75rem] bg-gradient-to-br from-[#45d1db] to-[#28eaab]"
      />

      <motion.div
        className="overflow-hidden rounded-[2.25rem] border border-border bg-card shadow-[0_24px_60px_-24px_rgba(0,64,104,0.35)]"
        initial={reduce ? false : "hidden"}
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.9, delayChildren: 0.5 } } }}
      >
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PaperPlaneTilt weight="fill" className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Your Center</p>
            <p className="text-xs text-muted-foreground">bot</p>
          </div>
        </div>

        <div className="flex min-h-[300px] flex-col justify-end gap-3 bg-muted/60 px-4 py-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              variants={item}
              className="max-w-[88%] self-start rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 text-sm leading-relaxed"
            >
              {message.text}
              <span className="mt-1 block text-right text-[11px] text-muted-foreground">
                {message.time}
              </span>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* SMS variant for parents without Telegram */}
      <motion.div
        className="mt-4 rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-[0_16px_40px_-20px_rgba(0,64,104,0.3)] sm:absolute sm:-bottom-16 sm:-left-16 sm:mt-0 sm:w-64"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 2.6 }}
      >
        <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <ChatCircleText weight="fill" className="size-4" />
          SMS
        </p>
        Jasur Toshmatov was absent from Math 8-A today.
      </motion.div>
    </div>
  );
}
