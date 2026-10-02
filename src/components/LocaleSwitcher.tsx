"use client";

import type { MouseEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { routing } from "@/i18n/routing";
import { getPathname, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

// UZ / EN / RU. Plain links (so they work without JS and crawlers see them);
// with JS the current #section is carried over to the other language.
export default function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  const keepHash = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;
    if (!hash) return;
    event.preventDefault();
    window.location.assign(event.currentTarget.getAttribute("href") + hash);
  };

  return (
    <nav
      aria-label={t("label")}
      className={cn("flex items-center gap-1 text-xs font-medium", className)}
    >
      <Globe aria-hidden className="mr-0.5 size-4 shrink-0 text-muted-foreground" />
      {routing.locales.map((target) => {
        const isCurrent = target === locale;
        return (
          <a
            key={target}
            href={getPathname({ href: pathname, locale: target })}
            hrefLang={target}
            lang={target}
            aria-label={t(`names.${target}`)}
            aria-current={isCurrent ? "true" : undefined}
            onClick={isCurrent ? undefined : keepHash}
            className={cn(
              "rounded-md px-1.5 py-1 uppercase tracking-wide transition-colors",
              isCurrent
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {target}
          </a>
        );
      })}
    </nav>
  );
}
