import Image from "next/image";
import {
  BellRinging,
  ChatCircleText,
  Exam,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";

export default function Showcase() {
  return (
    <section id="features" className="bg-muted/50 px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Telegram bot and SMS for parents
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A bot branded for your center keeps parents in the loop. Parents
            without Telegram get the same alerts by SMS.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Reveal className="rounded-2xl bg-primary p-8 text-primary-foreground md:col-span-4">
            <BellRinging weight="duotone" className="size-8" />
            <h3 className="mt-10 text-2xl font-semibold">Attendance alerts</h3>
            <p className="mt-2 max-w-[44ch] text-primary-foreground/90">
              Mark a student absent and their parents are notified within
              seconds, by Telegram or SMS.
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className="rounded-2xl bg-accent p-8 text-accent-foreground md:col-span-2"
          >
            <TelegramLogo weight="duotone" className="size-8" />
            <h3 className="mt-10 text-xl font-semibold">
              Your center&apos;s own bot
            </h3>
            <p className="mt-2">
              Branded with your name. Parents check attendance and marks any
              time.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-64 overflow-hidden rounded-2xl border border-border bg-card md:col-span-4 md:row-span-2"
          >
            <Image
              src="/images/admin-2.webp"
              alt="Tarteeb attendance table showing present and absent students by day"
              fill
              sizes="(min-width: 1152px) 760px, (min-width: 768px) 66vw, 100vw"
              className="object-cover object-left-top"
            />
          </Reveal>

          <Reveal
            delay={0.15}
            className="rounded-2xl border border-border bg-card p-8 md:col-span-2"
          >
            <Exam weight="duotone" className="size-8 text-primary" />
            <h3 className="mt-8 text-xl font-semibold">Marks alerts</h3>
            <p className="mt-2 text-muted-foreground">
              Enter a mark and parents receive it instantly. Everything is
              stored.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="rounded-2xl bg-muted p-8 md:col-span-2"
          >
            <ChatCircleText weight="duotone" className="size-8 text-primary" />
            <h3 className="mt-8 text-xl font-semibold">SMS for everyone else</h3>
            <p className="mt-2 text-muted-foreground">
              Parents without Telegram get the same alerts by SMS.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
