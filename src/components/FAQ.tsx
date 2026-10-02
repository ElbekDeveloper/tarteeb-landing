import { useTranslations } from "next-intl";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { SIGNUP_TUTORIAL_URL, SIGNUP_URL } from "@/lib/links";

const linkClass = "font-medium text-foreground underline underline-offset-4";

// Answers only restate facts already stated in the pricing and product copy.
const questions = [
  "signup",
  "kabutar",
  "connect",
  "telegram",
  "limit",
  "guarantee",
] as const;

export default function FAQ() {
  const t = useTranslations("FAQ");

  // Only the sign-up answer carries links; the Uzbek copy drops the
  // "(in Uzbek)" note the other locales keep.
  const answer = (key: (typeof questions)[number]) =>
    key === "signup"
      ? t.rich("items.signup.a", {
          portal: (chunks) => (
            <a href={SIGNUP_URL} className={linkClass}>
              {chunks}
            </a>
          ),
          guide: (chunks) => (
            <a
              href={SIGNUP_TUTORIAL_URL}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              {chunks}
            </a>
          ),
        })
      : t(`items.${key}.a`);

  return (
    <section id="faq" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {t("title")}
        </h2>

        <div className="divide-y divide-border border-y border-border">
          {questions.map((key) => (
            <details key={key} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {t(`items.${key}.q`)}
                <Plus className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-[60ch] text-muted-foreground">
                {answer(key)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
