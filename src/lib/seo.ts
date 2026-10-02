import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://www.tarteeb.uz";

const OG_LOCALES: Record<Locale, string> = {
  uz: "uz_UZ",
  en: "en_US",
  ru: "ru_RU",
};

// Uzbek is served at the root; other locales carry their prefix.
export function localeUrl(locale: Locale): string {
  return locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
}

type MetaCopy = {
  title: string;
  description: string;
  keywords: string;
  ogAlt: string;
};

export function buildMetadata(locale: Locale, copy: MetaCopy): Metadata {
  const url = localeUrl(locale);

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords.split(",").map((keyword) => keyword.trim()),
    authors: [{ name: "Tarteeb team" }],
    creator: "tarteeb team",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l)])),
        "x-default": SITE_URL,
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALES[l]),
      url,
      siteName: "Tarteeb.uz",
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: "/logo-gradient.jpg",
          width: 1200,
          height: 630,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/logo-gradient.jpg"],
      creator: "tarteeb team",
    },
    icons: {
      icon: "/favicon.svg", // For browsers
      shortcut: "/favicon.svg", // Optional, older browser shortcut
      apple: "/logo.jpg", // For iOS home screen
    },
  };
}
