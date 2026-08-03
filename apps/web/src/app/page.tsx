import ArchitectureSection from "@/components/landing/ArchitectureSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import FeatureSection from "@/components/landing/FeatureSection";
import HeroSection from "@/components/landing/HeroSection";
import SecuritySection from "@/components/landing/SecuritySection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <SecuritySection />
        <ArchitectureSection />
        <CallToActionSection />
      </main>
      <SiteFooter />
    </>
  );
}
