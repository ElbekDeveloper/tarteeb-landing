import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";

// Excerpts from center feedback, translated faithfully in messages. Add the
// owner's name and role when known.
const testimonials = ["lingoPro", "smartSchool", "buxoroSchool"] as const;

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          <Reveal className="flex flex-col justify-between rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10 lg:col-span-3">
            <blockquote className="text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;{t(`items.${featured}.text`)}&rdquo;
            </blockquote>
            <p className="mt-10 font-medium">
              {t(`items.${featured}.company`)}
            </p>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2">
            {rest.map((testimonial, index) => (
              <Reveal
                key={testimonial}
                delay={0.08 * (index + 1)}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
              >
                <blockquote className="leading-relaxed">
                  &ldquo;{t(`items.${testimonial}.text`)}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-medium text-muted-foreground">
                  {t(`items.${testimonial}.company`)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
