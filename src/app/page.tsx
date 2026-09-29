import PromoBanner from "@/components/PromoBanner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import WhoTrustUs from "@/components/WhoTrustUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <Navigation />
      <div className="pt-[104px]">
        <Hero />
        <DashboardPreview />
        <Showcase />
        <Features />
        <Testimonials />
        <WhoTrustUs />

        <Pricing />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
