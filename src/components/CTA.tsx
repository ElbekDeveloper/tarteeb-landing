import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/links";

export default function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[#45d1db] to-[#28eaab] px-4 py-16 lg:py-28">
      <div className="container mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div className="text-[#004068]">
          <h2 className="text-3xl font-semibold text-[#004068] sm:text-4xl lg:text-5xl">
            Get your center set up.
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg text-[#004068]">
            Create your account and start sending parents alerts today. Free
            for solo teachers.
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="w-full bg-[#004068] text-base text-white hover:bg-[#004068]/90 sm:w-auto"
        >
          <a href={SIGNUP_URL}>Start Free</a>
        </Button>
      </div>
    </section>
  );
}
