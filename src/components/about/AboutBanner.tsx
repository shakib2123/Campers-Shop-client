import bannerImage from "../../assets/images/About-Hero.jpg";

const AboutBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="h-[500px] lg:h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      <div className="bg-black/10 h-full w-full flex flex-col justify-end py-10">
        <div className="mx-auto text-center max-w-xl mb-8 space-y-2">
          <p
            data-aos="fade-up"
            className="text-orange-500 font-semibold text-sm md:text-lg"
          >
            ABOUT US
          </p>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl text-gray-100 font-bold text-center font-young-serif"
          >
            How we ended up where we're at today (& where we're going).
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
