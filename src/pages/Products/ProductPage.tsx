import ProductsBanner from "@/components/products/Banner";
import Products from "@/components/products/Products";
import SearchBar from "@/components/products/SearchBar";

const ProductPage = () => {
  return (
    <section>
      <ProductsBanner />
      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        <SearchBar />
        <Products />
      </div>
    </section>
  );
};

export default ProductPage;
