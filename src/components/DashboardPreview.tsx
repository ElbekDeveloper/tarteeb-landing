import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";

const rows = [
  {
    before: "Parents found out about absences days later, or never.",
    after: "Parents get an SMS or Telegram alert seconds after you mark it.",
  },
  {
    before: "Marks lived in notebooks and Excel files.",
    after: "Enter a mark once. It reaches the parent and stays on record.",
  },
  {
    before: "Teachers spent evenings calling parents.",
    after: "Every alert goes out automatically. No calls.",
  },
  {
    before: "Directors had no view of attendance across groups.",
    after: "Attendance across every group, in one graph.",
  },
];

export default function DashboardPreview() {
  return (
    <section id="solutions" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Stop calling parents after class.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four evening chores that now run themselves.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {rows.map((row, index) => (
            <li key={row.before}>
              <Reveal
                delay={index * 0.05}
                className="grid items-center gap-4 py-7 md:grid-cols-[1fr_auto_1fr] md:gap-10"
              >
                <p className="flex items-start gap-3 text-muted-foreground">
                  <XCircle
                    weight="fill"
                    className="mt-0.5 size-5 shrink-0 text-muted-foreground/60"
                  />
                  {row.before}
                </p>
                <ArrowRight className="hidden size-5 text-muted-foreground md:block" />
                <ArrowDown className="size-5 text-muted-foreground md:hidden" />
                <p className="flex items-start gap-3 text-lg font-medium">
                  <CheckCircle
                    weight="fill"
                    className="mt-1 size-5 shrink-0 text-primary"
                  />
                  {row.after}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
