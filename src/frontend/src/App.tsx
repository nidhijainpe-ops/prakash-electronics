import BrandsCarousel from "@/components/BrandsCarousel";
import ContactSection from "@/components/ContactSection";
import FloatingContactBar from "@/components/FloatingContactBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import StickyNav from "@/components/StickyNav";
import TrustBadges from "@/components/TrustBadges";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <main>
        <Hero />
        <ProductCategories />
        <BrandsCarousel />
        <TrustBadges />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactBar />
    </div>
  );
}
