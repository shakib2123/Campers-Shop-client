import AboutBanner from "@/components/about/AboutBanner";
import ContactUs from "@/components/about/ContactUs";

import GoogleMap from "@/components/about/GoogleMap";
import Social from "@/components/about/Social";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <AboutBanner />
      <ContactUs />
      <GoogleMap />
      <Social />
    </div>
  );
};

export default AboutPage;
