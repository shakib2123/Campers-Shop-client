import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCart from "../ProductCart/ProductCart";

const BestSellingSection = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  let loadingState;

  if (isLoading) {
    return (loadingState = <div>Loading...</div>);
  }

  return (
    <div className=" mt-28 space-y-16">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p className="text-orange-500 font-semibold text-sm md:text-lg">
          Best Selling
        </p>
        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-center font-young-serif">
          Best selling products
        </h2>
        <p className="text-gray-600">
          Explore our top-selling camping gear, loved by fellow campers for
          their quality and durability. Find the essential items that will
          enhance your outdoor adventures. Click on any product for more details
          and see why they're our customers' favorites.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 min-h-80 ">
        {isLoading
          ? loadingState
          : data?.data
              ?.slice(0, 4)
              .map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}
      </div>
    </div>
  );
};

export default BestSellingSection;
