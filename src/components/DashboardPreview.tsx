import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";

const rows = ["absences", "marks", "calls", "overview"] as const;

export default function DashboardPreview() {
  const t = useTranslations("Solutions");

  return (
    <section id="solutions" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {rows.map((row, index) => (
            <li key={row}>
              <Reveal
                delay={index * 0.05}
                className="grid items-center gap-4 py-7 md:grid-cols-[1fr_auto_1fr] md:gap-10"
              >
                <p className="flex items-start gap-3 text-muted-foreground">
                  <XCircle
                    weight="fill"
                    className="mt-0.5 size-5 shrink-0 text-muted-foreground/60"
                  />
                  {t(`rows.${row}.before`)}
                </p>
                <ArrowRight className="hidden size-5 text-muted-foreground md:block" />
                <ArrowDown className="size-5 text-muted-foreground md:hidden" />
                <p className="flex items-start gap-3 text-lg font-medium">
                  <CheckCircle
                    weight="fill"
                    className="mt-1 size-5 shrink-0 text-primary"
                  />
                  {t(`rows.${row}.after`)}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
