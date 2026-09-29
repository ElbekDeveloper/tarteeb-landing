import { Check } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

const plans = [
  {
    name: "Solo Teacher",
    price: "Free",
    currency: "",
    period: "forever",
    description: "For individual teachers with up to 20 students",
    features: [
      "Kabutar Telegram bot for parents",
      "Attendance & marks alerts to parents",
      "SMS and Telegram notifications",
      "Up to 20 students",
    ],
    cta: "Start Free",
    highlighted: false,
    badge: "",
    comments: "Made possible by the Nippon Foundation's support.",
    link: "https://t.me/m/86rEuvWvNDIy",
  },
  {
    name: "Pro",
    price: "299 000",
    currency: "UZS",
    period: "month",
    description: "For growing study centers with up to 100 students",
    features: [
      "Kabutar Telegram bot for parents",
      "Attendance & marks alerts to parents",
      "SMS and Telegram notifications",
      "Up to 100 students",
      "Groups & attendance analytics",
    ],
    cta: "Get Pro",
    highlighted: true,
    badge: "Recommended",
    comments: "",
    link: "https://t.me/m/WPclTnvIZDdi",
  },
  {
    name: "Pro Max",
    price: "1 850 000",
    currency: "UZS",
    period: "month",
    description: "Everything you need to run a large study center",
    features: [
      "Kabutar Telegram bot for parents",
      "Attendance & marks alerts to parents",
      "SMS and Telegram notifications",
      "Unlimited students",
      "Priority support",
      "Onboarding & Customer Success",
      "Money-back guarantee, risk-free",
    ],
    cta: "Get Pro Max",
    highlighted: false,
    badge: "",
    comments: "",
    link: "https://t.me/m/WPclTnvIZDdi",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-muted/50 px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free and scale as your center grows.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 0.06}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-primary bg-card shadow-[0_24px_60px_-28px_rgba(0,64,104,0.4)]"
                  : "border border-border bg-card"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-1 min-h-12 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                {plan.currency && (
                  <span className="text-muted-foreground">{plan.currency}</span>
                )}
                <span className="text-muted-foreground">/{plan.period}</span>
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
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
                {plan.comments && (
                  <p className="mb-3 text-xs text-muted-foreground">
                    {plan.comments}
                  </p>
                )}
                <Button
                  asChild
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                >
                  <a href={plan.link} target="_blank" rel="noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
