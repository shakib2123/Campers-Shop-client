import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import sliderImage1 from "../../assets/images/mountain-img.jpeg";
import sliderImage2 from "../../assets/images/ClassicAir.webp";
import sliderImage3 from "../../assets/images/Classic_Instant.webp";
import sliderImage4 from "../../assets/images/Lismore.webp";
import { Button } from "../ui/button";

const HeroSection = () => {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
    {
      id: 3,
      image: sliderImage3,
    },
    {
      id: 4,
      image: sliderImage4,
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url(${sliderImage1})`,
      }}
      className="h-[400px] md:h-[520px] lg:h-[600px] bg-cover bg-center bg-no-repeat md:mt-2 lg:rounded-lg "
    >
      <div className="bg-gradient-to-r from-black h-[400px] md:h-[500px] lg:h-[600px] w-full lg:flex items-center justify-center gap-9">
        <div className="flex-1 p-4 space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-100">
            Camping
          </h1>
          <p className="lg:text-lg text-gray-300 max-w-lg">
            Create your dream campsite with our camping essentials. Under the
            stars, every night is an adventure waiting to unfold.
          </p>
          <Button variant={"secondary"}>Shop Now</Button>
        </div>
        <div className="flex-1 relative w-full h-[150px] md:h-[300px] lg:h-[400px] px-2 lg:p-0 lg:mr-4">
          <Carousel
            className=" overflow-hidden rounded-lg shadow-lg"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent className="flex">
              {sliderData.map((slider) => (
                <CarouselItem key={slider.id} className="min-w-full">
                  <Card className="bg-transparent">
                    <CardContent className="flex items-center justify-center h-[150px] md:h-[300px] lg:h-[400px] p-0">
                      <img
                        src={slider?.image}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        alt=""
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9654;
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
