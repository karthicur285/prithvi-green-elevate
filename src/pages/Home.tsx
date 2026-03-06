import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesSection from "@/components/sections/ServicesSection";
import DoorOperatorSection from "@/components/sections/DoorOperatorSection";
import ComponentsSection from "@/components/sections/ComponentsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProductCategories from "@/components/sections/ProductCategories";
import TrustSection from "@/components/sections/TrustSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ComboOfferSection from "@/components/sections/ComboOfferSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ServicesSection />
        <DoorOperatorSection />
        <ComponentsSection />
        <ProcessSection />
        <ProductCategories />
        <TrustSection />
        <ConsultationSection />
        <IndustriesSection />
        <ComboOfferSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
