import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoTrustUs from "@/components/WhoTrustUs";
import DashboardPreview from "@/components/DashboardPreview";
import DemoVideos from "@/components/DemoVideos";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // The layout already rejected unknown locales.
  setRequestLocale(locale as Locale);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[104px]">
        <Hero />
        <WhoTrustUs />
        <DashboardPreview />
        <DemoVideos />
        <Showcase />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
