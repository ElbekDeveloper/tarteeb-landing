import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { notFound } from "next/navigation";
import { Archivo, Onest } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import "../globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
});

// Archivo has no Cyrillic. Onest is the companion grotesque that renders
// Russian; it only downloads when Cyrillic text is on the page.
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  preload: false,
});

// Archivo first, then Onest for the glyphs Archivo lacks, then each font's
// metric-matched fallback. Built here because next/font hashes family names.
const [archivoFamily, archivoFallback] = archivo.style.fontFamily.split(", ");
const [onestFamily, onestFallback] = onest.style.fontFamily.split(", ");
const fontStack = [archivoFamily, onestFamily, archivoFallback, onestFallback]
  .filter(Boolean)
  .join(", ");

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Meta" });
  return buildMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    ogAlt: t("ogAlt"),
  });
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${onest.variable}`}
      style={{ "--font-stack": fontStack } as CSSProperties}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {/* 100% privacy-first analytics */}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
