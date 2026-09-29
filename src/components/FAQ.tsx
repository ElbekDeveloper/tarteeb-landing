import { Plus } from "@phosphor-icons/react/dist/ssr";

// Answers only restate facts already stated in the pricing and product copy.
const questions = [
  {
    q: "Does every parent need Telegram?",
    a: "No. Parents with Telegram use your center's branded bot. Parents without it get the same alerts by SMS.",
  },
  {
    q: "What can parents see in the bot?",
    a: "Attendance history and marks, whenever they want, under your center's name.",
  },
  {
    q: "What if I have more than 20 students?",
    a: "The free Solo Teacher plan covers up to 20 students. Pro covers up to 100, and Pro Max has no student limit.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes. Pro Max includes a risk-free money-back guarantee.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Questions, answered
        </h2>

        <div className="divide-y divide-border border-y border-border">
          {questions.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-[60ch] text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
