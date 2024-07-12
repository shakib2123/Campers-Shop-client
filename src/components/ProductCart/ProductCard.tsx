import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Rating from "react-rating";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div
      data-aos="fade-up"
      className="h-full rounded-lg border border-gray-200 p-4 flex flex-col md:flex-row md:items-center gap-5 lg:gap-4"
    >
      <div className="max-w-[350px] h-[280px] flex-grow overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg md:rounded-l-lg"
          src={product?.image}
          alt={product?.name}
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-700 ">{product?.name}</h3>
          <Rating
            emptySymbol={<Star size={15} color="orange" />}
            fullSymbol={<Star size={15} color="orange" fill="orange" />}
            fractions={2}
            initialRating={product?.rating}
            stop={5}
          />
          <h3 className="text-xl font-bold text-orange-500">
            $ {product?.price} USD
          </h3>
          <h3 className="font-bold text-gray-700">
            AVAILABLE QUANTITY:<span className="text-sm"></span>{" "}
            {product?.quantity}.00
          </h3>
          <h3 className="font-bold text-gray-700">
            STOCK:{" "}
            <span className="text-sm text-orange-500">
              {product?.stock ? "AVAILABLE" : "OUT OF STOCK"}
            </span>
          </h3>
        </div>

        <Link to={`/products-details/${product?._id}`}>
          <Button className="w-full bg-green-500 hover:bg-green-600">
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
