import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoTrustUs from "@/components/WhoTrustUs";
import DashboardPreview from "@/components/DashboardPreview";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[104px]">
        <Hero />
        <WhoTrustUs />
        <DashboardPreview />
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
