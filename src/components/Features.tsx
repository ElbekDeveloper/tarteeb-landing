import Image from "next/image";
import {
  CalendarCheck,
  Exam,
  PaperPlaneTilt,
  TelegramLogo,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";

const features = [
  {
    icon: PaperPlaneTilt,
    title: "Attendance and parent SMS in seconds",
    body: "Take attendance and grade in one click. Parents get an instant SMS, with no calls or Excel reports after class.",
  },
  {
    icon: UsersThree,
    title: "Students and groups, stress-free",
    body: "Register students, assign them to groups and handle changes in a click.",
  },
  {
    icon: CalendarCheck,
    title: "Monthly and yearly attendance at a glance",
    body: "Color-coded monthly tables for every group. The yearly heatmap turns red as absences grow, so directors spot problems early.",
  },
  {
    icon: Exam,
    title: "Marks sent to parents instantly",
    body: "Enter a mark once. Parents receive it by SMS or Telegram, so results never sit unseen in a notebook.",
  },
  {
    icon: TelegramLogo,
    title: "Kabutar keeps parents in the loop",
    body: "Register a student and their parents get an SMS to connect to Kabutar. From then on it messages them whenever you take attendance.",
  },
];

export default function Features() {
  return (
    <section id="admin" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="lg:sticky lg:top-32">
          <div className="overflow-hidden rounded-2xl border border-border bg-white p-6">
            <Image
              src="/images/admin-1.webp"
              alt="Tarteeb admin panel with attendance, groups and marks"
              width={800}
              height={778}
              className="mx-auto w-full max-w-lg scale-x-[-1]"
            />
          </div>
        </Reveal>

        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Complete study center management
          </h2>

          <ul className="mt-10 divide-y divide-border">
            {features.map((feature, index) => (
              <li key={feature.title}>
                <Reveal delay={index * 0.05} className="flex gap-5 py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <feature.icon weight="duotone" className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-muted-foreground">
                      {feature.body}
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
