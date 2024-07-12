import CategorySection from "@/components/category/CategorySection";
import HeroSection from "../../components/layout/HeroSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import FAQSection from "@/components/FAQ/FAQSection";
import BestSellingSection from "@/components/bestSelling/BestSellingSection";
import FeaturedSection from "@/components/featured/FeaturedSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto">
        <BestSellingSection />
        <CategorySection />
      </div>
      <FeaturedSection />
      <div className="max-w-screen-xl mx-auto">
        <TestimonialSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default HomePage;
