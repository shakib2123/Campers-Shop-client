import HeroSection from "../../components/layout/HeroSection";
import Navbar from "../../components/layout/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
