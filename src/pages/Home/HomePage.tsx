import CategorySection from "@/components/category/CategorySection";
import HeroSection from "../../components/layout/HeroSection";
import Navbar from "../../components/layout/Navbar";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/FAQ/FAQSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
        {/* Todo: Best Selling Products */}
        <CategorySection />
        <TestimonialSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
