import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCart from "../ProductCart/ProductCart";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-80 ">
        {data?.data?.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
