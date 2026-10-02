import { useTranslations } from "next-intl";
import Logo from "@/components/Logo";

const productLinks = [
  { href: "#features", key: "features" },
  { href: "#pricing", key: "pricing" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#solutions", key: "solutions" },
] as const;

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#1a1a1a] px-4 py-16 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-sm">
            <Logo className="h-11 w-auto text-white" />
            <p className="mt-6 text-lg font-semibold text-[#45d1db]">
              {t("tagline")}
            </p>
            <p className="mt-3 leading-relaxed text-zinc-400">
              {t("body")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-50">
              {t("productTitle")}
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 transition-colors hover:text-zinc-50"
                  >
                    {t(`links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
          {t("rights", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
