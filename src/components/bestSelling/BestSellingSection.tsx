import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCart, { TProduct } from "../ProductCart/ProductCard";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../animation/Error";

const BestSellingSection = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);

  let loadingState;

  if (isLoading) {
    return (loadingState = <Loader height={"h-[500px]"} />);
  }

  return (
    <div className=" mt-28 space-y-16  px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          Best Selling
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-800 font-bold text-center font-young-serif"
        >
          Best selling products
        </h2>
        <p data-aos="fade-up" className="text-gray-600">
          Explore our top-selling camping gear, loved by fellow campers for
          their quality and durability. Find the essential items that will
          enhance your outdoor adventures. Click on any product for more details
          and see why they're our customers' favorites.
        </p>
      </div>
      <div
        className={`${
          isError ? "flex items-center justify-center" : "grid"
        } grid-cols-1 lg:grid-cols-2  gap-6 min-h-80 `}
      >
        {isLoading ? (
          loadingState
        ) : isError ? (
          <div className="max-w-64">
            <Error />
          </div>
        ) : (
          data?.data
            ?.slice(0, 4)
            .map((product: TProduct) => (
              <ProductCart key={product._id} product={product} />
            ))
        )}
      </div>

      <div data-aos="fade-up" className="flex justify-center">
        <Link to="/products">
          <Button className="bg-green-500 hover:bg-green-600">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellingSection;
