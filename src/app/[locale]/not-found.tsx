import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-semibold sm:text-4xl">{t("title")}</h1>
      <p className="text-muted-foreground">{t("body")}</p>
      <Button asChild className="mt-4">
        <Link href="/">{t("home")}</Link>
      </Button>
    </main>
  );
}
