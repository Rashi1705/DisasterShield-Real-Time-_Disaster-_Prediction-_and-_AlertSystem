import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { CoreFeaturesSection } from "./components/CoreFeaturesSection.jsx";
import { AlarmingSystemSection } from "./components/AlarmingSystemSection.jsx";
import { HowItWorksSection } from "./components/HowItWorksSection.jsx";
import { ImpactBenefitsSection } from "./components/ImpactBenefitsSection.jsx";
import { CTABanner } from "./components/CTABanner.jsx";
import { Footer } from "./components/Footer.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
