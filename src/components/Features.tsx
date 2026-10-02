import Image from "next/image";
import {
  CalendarCheck,
  Exam,
  PaperPlaneTilt,
  TelegramLogo,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";

const features = [
  { icon: PaperPlaneTilt, key: "speed" },
  { icon: UsersThree, key: "groups" },
  { icon: CalendarCheck, key: "overview" },
  { icon: Exam, key: "marks" },
  { icon: TelegramLogo, key: "kabutar" },
] as const;

export default function Features() {
  const t = useTranslations("Features");

  return (
    <section id="admin" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="lg:sticky lg:top-32">
          <div className="overflow-hidden rounded-2xl border border-border bg-white p-6">
            <Image
              src="/images/admin-1.webp"
              alt={t("imageAlt")}
              width={800}
              height={778}
              className="mx-auto w-full max-w-lg scale-x-[-1]"
            />
          </div>
        </Reveal>

        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <ul className="mt-10 divide-y divide-border">
            {features.map((feature, index) => (
              <li key={feature.key}>
                <Reveal delay={index * 0.05} className="flex gap-5 py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <feature.icon weight="duotone" className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {t(`items.${feature.key}.title`)}
                    </h3>
                    <p className="mt-1.5 text-muted-foreground">
                      {t(`items.${feature.key}.body`)}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
