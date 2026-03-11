import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import Glass from "@/components/sections/GlassSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesSection from "@/components/sections/ServicesSection";
import DoorOperatorSection from "@/components/sections/DoorOperatorSection";
import ComponentsSection from "@/components/sections/ComponentsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProductCategories from "@/components/sections/ProductCategories";
import ConsultationSection from "@/components/sections/ConsultationSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ComboOfferSection from "@/components/sections/ComboOfferSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQ from "@/components/sections/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <Glass />
        <ComponentsSection />
        <DoorOperatorSection />
        <WhyChooseUs />
        <ServicesSection />
        <ProductCategories />
        <ConsultationSection />
        <IndustriesSection />
        <ComboOfferSection />
        <TestimonialsSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
