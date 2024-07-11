import AboutBanner from "@/components/about/AboutBanner";
import ContactUs from "@/components/about/ContactUs";

import GoogleMap from "@/components/about/GoogleMap";
import Mission from "@/components/about/Mission";
import Social from "@/components/about/Social";
import Team from "@/components/about/Team";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <AboutBanner />
      <ContactUs />
      <GoogleMap />
      <Social />
      <Mission />
      <Team />
    </div>
  );
};

export default AboutPage;
