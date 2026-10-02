import { useTranslations } from "next-intl";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { SIGNUP_URL } from "@/lib/links";

// Prices are fixed; names, periods, features and labels come from messages.
const plans = [
  { key: "solo", paid: false, highlighted: false },
  { key: "pro", paid: true, highlighted: true },
  { key: "proMax", paid: true, highlighted: false },
] as const;

export default function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section id="pricing" className="bg-muted/50 px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-4 md:grid-cols-3">
          {plans.map((plan, index) => {
            const badge = t(`plans.${plan.key}.badge`);
            const comments = t(`plans.${plan.key}.comments`);
            const features = t.raw(`plans.${plan.key}.features`) as string[];

            return (
              <Reveal
                key={plan.key}
                delay={index * 0.06}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "border-2 border-primary bg-card shadow-[0_24px_60px_-28px_rgba(0,64,104,0.4)]"
                    : "border border-border bg-card"
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {badge}
                  </span>
                )}

                <h3 className="text-xl font-semibold">
                  {t(`plans.${plan.key}.name`)}
                </h3>
                <p className="mt-1 min-h-12 text-sm text-muted-foreground">
                  {t(`plans.${plan.key}.description`)}
                </p>

                {/* "Бесплатно /навсегда" is the widest price row; it steps down a
                    size in the cramped three-column tablet layout. */}
                <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
                  <span className="text-4xl font-semibold tracking-tight md:max-lg:text-3xl">
                    {t(`plans.${plan.key}.price`)}
                  </span>
                  {plan.paid && (
                    <span className="text-muted-foreground">{t("currency")}</span>
                  )}
                  <span className="text-muted-foreground">
                    /{t(`plans.${plan.key}.period`)}
                  </span>
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        weight="bold"
                        className="mt-0.5 size-4 shrink-0 text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {comments && (
                    <p className="mb-3 text-xs text-muted-foreground">
                      {comments}
                    </p>
                  )}
                  <Button
                    asChild
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    <a href={SIGNUP_URL}>{t(`plans.${plan.key}.cta`)}</a>
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
