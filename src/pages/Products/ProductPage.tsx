import ProductsBanner from "@/components/products/Banner";
import Products from "@/components/products/Products";

const ProductPage = () => {
  return (
    <section>
      <ProductsBanner />
      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        <Products />
      </div>
    </section>
  );
};

export default ProductPage;
