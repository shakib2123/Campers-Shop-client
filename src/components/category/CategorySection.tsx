import image1 from "../../assets/images/category/Accessories.jpeg";
import image2 from "../../assets/images/category/Apparel.jpeg";
import image3 from "../../assets/images/category/Climbing-Gear.jpeg";
import image4 from "../../assets/images/category/Headwear.jpeg";
import image5 from "../../assets/images/category/Hiking-Boots.jpg";
import image6 from "../../assets/images/category/Jackets.jpeg";

const categoryData = [
  {
    id: 1,
    name: "Accessories",
    image: image1,
    description: "Accessories you didn't know you needed.",
  },
  {
    id: 2,
    name: "Apparel",
    image: image2,
    description: "Check out our line of non-hiking clothes.",
  },
  {
    id: 3,
    name: "Climbing Gear",
    image: image3,
    description: "Climbing gear for every occasion.",
  },
  {
    id: 4,
    name: "Headwear",
    image: image4,
    description: "Our beanies are so comfy you won't believe it.",
  },
  {
    id: 5,
    name: "Hiking Gear",
    image: image5,
    description: "Desert or mountain? Doesn't matter.",
  },
  {
    id: 6,
    name: "Jackets",
    image: image6,
    description: "Our jackets are perfect for every season.",
  },
];

const CategorySection = () => {
  return (
    <section className="my-20 lg:my-28  px-3 lg:px-0 ">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          MEET THE FAMILY
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-800 font-bold text-center font-young-serif"
        >
          What we have in store for you.
        </h2>
        <p data-aos="fade-up" className="text-gray-600">
          Find everything you need for your next adventure, from high-quality
          tents and sleeping bags to cooking equipment and outdoor accessories.
          Browse our carefully curated categories to elevate your camping
          experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryData.map((category) => (
          <div
            key={category.id}
            data-aos="fade-up"
            className="h-[490px]  bg-slate-500 rounded-lg group overflow-hidden relative"
          >
            <img
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-200"
              src={category.image}
              alt="category-image"
            />
            <div className="absolute inset-0 flex flex-col items-center pt-12 bg-black/45 group-hover:bg-black/60 transition-colors duration-200 px-[70px] text-center gap-2 ">
              <h3 className="text-3xl font-medium text-gray-100 font-young-serif">
                {category.name}
              </h3>
              <p className="text-gray-300 ">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
