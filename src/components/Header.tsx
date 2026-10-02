"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { List, TelegramLogo, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link as LocaleLink } from "@/i18n/navigation";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/links";

const BANNER_HEIGHT = 40;

const links = [
  { href: "#features", key: "features" },
  { href: "#pricing", key: "pricing" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#contact", key: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // Hide the promo bar on scroll down, bring it back on scroll up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const shouldHide = latest > previous && latest > 100;
    if (shouldHide !== hidden) setHidden(shouldHide);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      animate={{ y: hidden ? -BANNER_HEIGHT : 0 }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 30 }}
    >
      {/* Promo bar */}
      <div
        className="bg-[#1a1a1a] text-white"
        style={{ height: BANNER_HEIGHT }}
      >
        <div className="container mx-auto flex h-full max-w-6xl items-center justify-center gap-3 px-4 text-sm">
          <TelegramLogo weight="fill" className="size-4 shrink-0 text-zinc-50" />
          <span className="font-medium">{t("promoTitle")}</span>
          <span className="hidden text-zinc-300 xl:inline">
            {t("promoBody")}
          </span>
          <a
            href="https://t.me/tarteebuz"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-zinc-600 px-3 py-0.5 text-xs font-medium transition-colors hover:bg-zinc-800 sm:inline-block"
          >
            {t("promoCta")}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-border bg-background/85 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <LocaleLink href="/" aria-label={t("homeLabel")} className="py-2">
              <Logo className="h-9 w-auto text-[#004068] dark:text-white" />
            </LocaleLink>

            {/* Links and actions move into the menu below lg: with the
                language switcher the full bar no longer fits a tablet. */}
            <div className="hidden items-center gap-6 lg:flex xl:gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <LocaleSwitcher />
              <ThemeToggle />
              <Button asChild variant="ghost">
                <Link href={LOGIN_URL}>{t("signIn")}</Link>
              </Button>
              <Button asChild>
                <a href={SIGNUP_URL}>{t("startFree")}</a>
              </Button>
            </div>

            <button
              className="-mr-2 p-2 lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={t("toggleMenu")}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="size-6" /> : <List className="size-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="flex flex-col gap-1 border-t border-border py-4 lg:hidden">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <div className="mt-3 flex flex-col items-start gap-2 border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <LocaleSwitcher className="text-sm" />
                  <ThemeToggle />
                </div>
                <Button asChild variant="ghost">
                  <Link href={LOGIN_URL}>{t("signIn")}</Link>
                </Button>
                <Button asChild>
                  <a href={SIGNUP_URL}>{t("startFree")}</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
