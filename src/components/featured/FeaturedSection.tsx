import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCart from "../ProductCart/ProductCart";

const FeaturedSection = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  let loadingState;

  if (isLoading) {
    return (loadingState = <div>Loading...</div>);
  }
  return (
    <div className="bg-green-200 min-h-[600px] py-16 mb-28">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <h2 className="text-3xl md:text-4xl text-orange-500 font-bold text-center font-young-serif">
          Featured products
        </h2>
        <p className="text-gray-700">
          Check out our handpicked selection of top-rated camping gear. These
          featured items stand out for their exceptional quality and innovative
          design, ensuring you have the best experience on your next adventure.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-80 ">
        {isLoading
          ? loadingState
          : data?.data
              ?.slice(-4)
              .map((product) => (
                <ProductCart key={product._id} product={product} />
              ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
