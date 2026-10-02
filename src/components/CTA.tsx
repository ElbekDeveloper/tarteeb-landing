import { useTranslations } from "next-intl";
import { PlayCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { SIGNUP_TUTORIAL_URL, SIGNUP_URL } from "@/lib/links";

export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <section id="contact" className="bg-gradient-to-br from-[#45d1db] to-[#28eaab] px-4 py-16 lg:py-28">
      <div className="container mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div className="text-[#004068]">
          <h2 className="text-3xl font-semibold text-[#004068] sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg text-[#004068]">
            {t("body")}
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto">
          <Button
            asChild
            size="lg"
            className="w-full bg-[#004068] text-base text-white hover:bg-[#004068]/90 sm:w-auto sm:min-w-56"
          >
            <a href={SIGNUP_URL}>{t("startFree")}</a>
          </Button>
          <a
            href={SIGNUP_TUTORIAL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#004068] underline-offset-4 hover:underline"
          >
            <PlayCircle weight="fill" className="size-5 shrink-0" />
            {t("guide")}
          </a>
        </div>
      </div>
    </section>
  );
}
