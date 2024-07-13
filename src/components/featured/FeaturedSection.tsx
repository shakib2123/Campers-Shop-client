import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCart, { TProduct } from "../ProductCart/ProductCard";
import Loader from "../Loader/Loader";
import Error from "../animation/Error";

const FeaturedSection = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);

  let loadingState;

  if (isLoading) {
    return (loadingState = <Loader height={"h-[500px]"} />);
  }
  return (
    <div className="bg-green-200 min-h-[600px] py-16 mb-28 px-3 ">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-orange-500 font-bold text-center font-young-serif"
        >
          Featured products
        </h2>
        <p data-aos="fade-up" className="text-gray-700">
          Check out our handpicked selection of top-rated camping gear. These
          featured items stand out for their exceptional quality and innovative
          design, ensuring you have the best experience on your next adventure.
        </p>
      </div>
      <div
        className={` ${
          isError ? "flex items-center justify-center" : "grid"
        } max-w-screen-xl mx-auto  grid-cols-1 lg:grid-cols-2 gap-6 min-h-80`}
      >
        {isLoading ? (
          loadingState
        ) : isError ? (
          <div className="max-w-64">
            <Error />
          </div>
        ) : (
          data?.data
            ?.slice(-4)
            .map((product: TProduct) => (
              <ProductCart key={product._id} product={product} />
            ))
        )}
      </div>
    </div>
  );
};

export default FeaturedSection;
