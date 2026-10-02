import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import AlertPreview from "./AlertPreview";
import { SIGNUP_URL } from "@/lib/links";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="overflow-x-clip px-4 pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="text-base">
              <a href={SIGNUP_URL}>{t("startFree")}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#demo">{t("watchDemo")}</a>
            </Button>
          </div>
        </div>

        <AlertPreview />
      </div>
    </section>
  );
}
