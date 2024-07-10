import CategorySection from "@/components/category/CategorySection";
import HeroSection from "../../components/layout/HeroSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import FAQSection from "@/components/FAQ/FAQSection";
import BestSellingSection from "@/components/bestSelling/BestSellingSection";

const HomePage = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
        <BestSellingSection />
        <CategorySection />
        {/* Todo: Featured Products */}
        <TestimonialSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default HomePage;
