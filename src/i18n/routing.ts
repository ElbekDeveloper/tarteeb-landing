import { defineRouting } from "next-intl/routing";

// Uzbek is the default and lives at "/" with no prefix; English and Russian
// get /en and /ru. Browser language never redirects: "/" is always Uzbek.
export const routing = defineRouting({
  locales: ["uz", "en", "ru"],
  defaultLocale: "uz",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
