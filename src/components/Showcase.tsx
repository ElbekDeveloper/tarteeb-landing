import Image from "next/image";
import {
  BellRinging,
  ChatCircleText,
  Exam,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";

export default function Showcase() {
  return (
    <section id="features" className="bg-muted/50 px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Meet Kabutar, the messenger for parents
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kabutar is the Telegram bot every Tarteeb parent connects to. It
            sends a message as soon as attendance is taken.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Reveal className="rounded-2xl bg-primary p-8 text-primary-foreground md:col-span-4">
            <BellRinging weight="duotone" className="size-8" />
            <h3 className="mt-10 text-2xl font-semibold">Attendance alerts</h3>
            <p className="mt-2 max-w-[44ch] text-primary-foreground/90">
              Take attendance and parents are messaged within seconds, by
              Telegram or SMS.
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className="flex flex-col justify-between rounded-2xl bg-accent p-8 text-accent-foreground md:col-span-2"
          >
            <Image
              src="/images/kabutar-logo.jpg"
              alt="Kabutar"
              width={64}
              height={64}
              className="size-16 rounded-full"
            />
            <div className="mt-8">
              <p className="text-4xl font-semibold tracking-tight">100,000+</p>
              <p className="mt-1">messages sent by Kabutar</p>
            </div>
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
              Enter a mark and parents receive it right away, with the
              attendance message.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="rounded-2xl bg-muted p-8 md:col-span-2"
          >
            <ChatCircleText weight="duotone" className="size-8 text-primary" />
            <h3 className="mt-8 text-xl font-semibold">Connect by SMS</h3>
            <p className="mt-2 text-muted-foreground">
              Register a student and their parents get an SMS to connect to
              Kabutar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
