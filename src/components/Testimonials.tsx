import { Reveal } from "@/components/motion/Reveal";

// Excerpts from center feedback. Add the owner's name and role when known.
const testimonials = [
  {
    company: "Lingo Pro LC, Bukhara",
    text: "Rarely a day passes without parents being notified about how successful their children are doing in our center.",
  },
  {
    company: "Smart School, Farg'ona",
    text: "It helps us stay closely connected with students and their parents.",
  },
  {
    company: "Buxoro School, Tashkent",
    text: "Parents receive automatic updates on their child's attendance, even without internet access, directly to their mobile phones.",
  },
];

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="px-4 py-16 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            What study centers say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Centers in Bukhara, Farg&apos;ona and Tashkent keep parents informed
            with Tarteeb.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          <Reveal className="flex flex-col justify-between rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10 lg:col-span-3">
            <blockquote className="text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <p className="mt-10 font-medium">{featured.company}</p>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2">
            {rest.map((testimonial, index) => (
              <Reveal
                key={testimonial.company}
                delay={0.08 * (index + 1)}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
              >
                <blockquote className="leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-medium text-muted-foreground">
                  {testimonial.company}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
