import type { routing } from "@/i18n/routing";
import type messages from "../../messages/en.json";

// English is the reference shape: a key missing from a component call fails
// the type check. scripts/check-messages.mjs keeps uz and ru in step with it.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
