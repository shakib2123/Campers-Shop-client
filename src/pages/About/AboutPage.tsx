import AboutBanner from "@/components/about/AboutBanner";
import GoogleMap from "@/components/about/GoogleMap";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <AboutBanner />

      {/* TODO: Contact Information */}

      <GoogleMap />
    </div>
  );
};

export default AboutPage;
