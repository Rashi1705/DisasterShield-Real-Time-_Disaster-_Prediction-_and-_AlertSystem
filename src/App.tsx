import { HeroSection } from "./components/HeroSection";
import { CoreFeaturesSection } from "./components/CoreFeaturesSection";
import { AlarmingSystemSection } from "./components/AlarmingSystemSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ImpactBenefitsSection } from "./components/ImpactBenefitsSection";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoreFeaturesSection />
      <AlarmingSystemSection />
      <HowItWorksSection />
      <ImpactBenefitsSection />
      <CTABanner />
      <Footer />
    </div>
  );
}