import Image from "next/image";
import {
  BellRinging,
  ChatCircleText,
  Exam,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";

export default function Showcase() {
  const t = useTranslations("Showcase");

  return (
    <section id="features" className="bg-muted/50 px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Reveal className="rounded-2xl bg-primary p-8 text-primary-foreground md:col-span-4">
            <BellRinging weight="duotone" className="size-8" />
            <h3 className="mt-10 text-2xl font-semibold">{t("attendance.title")}</h3>
            <p className="mt-2 max-w-[44ch] text-primary-foreground/90">
              {t("attendance.body")}
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
              <p className="text-4xl font-semibold tracking-tight">{t("stat.value")}</p>
              <p className="mt-1">{t("stat.label")}</p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-64 overflow-hidden rounded-2xl border border-border bg-card md:col-span-4 md:row-span-2"
          >
            <Image
              src="/images/admin-2.webp"
              alt={t("tableAlt")}
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
            <h3 className="mt-8 text-xl font-semibold">{t("marks.title")}</h3>
            <p className="mt-2 text-muted-foreground">
              {t("marks.body")}
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="rounded-2xl bg-muted p-8 md:col-span-2"
          >
            <ChatCircleText weight="duotone" className="size-8 text-primary" />
            <h3 className="mt-8 text-xl font-semibold">{t("sms.title")}</h3>
            <p className="mt-2 text-muted-foreground">
              {t("sms.body")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
