import AboutBanner from "@/components/about/AboutBanner";
import Contact from "@/components/about/Contact";
import GoogleMap from "@/components/about/GoogleMap";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <AboutBanner />

      <Contact />

      <GoogleMap />
    </div>
  );
};

export default AboutPage;
