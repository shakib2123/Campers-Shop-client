import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToCart } from "@/redux/features/CartSlice";
import { toast } from "sonner";
import Loader from "@/components/Loader/Loader";
import React, { useState } from "react";

import "./ImageMagnifier.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import visa from "../../assets/images/footer/visa.svg";
import paypal from "../../assets/images/footer/paypal.svg";
import shopPay from "../../assets/images/footer/shop-pay.svg";
import mastercard from "../../assets/images/footer/mastercard.svg";

const ProductDetails = () => {
  const { id } = useParams();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const { data, isLoading } = useGetSingleProductQuery(id);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const currentProduct = cart?.find((item) => item._id === id);

  const handleAddToCart = async () => {
    const { __v, quantity: oldQuantity, ...otherData } = data.data;

    const cartData = {
      ...otherData,
      quantity: 1,
    };

    dispatch(addToCart(cartData));

    toast.success("Product added to cart");
  };

  const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
    // Corrected the usage of getBoundingClientRect
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    const cursorX = e.pageX - left - window.scrollX;
    const cursorY = e.pageY - top - window.scrollY;

    setPosition({ x, y });

    setCursorPosition({ x: cursorX, y: cursorY });
  };

  if (isLoading) {
    return <Loader height={"h-[600px]"} />;
  }

  return (
    <section className="max-w-screen-xl mx-auto my-16 px-3 flex flex-col lg:flex-row items-center gap-12 ">
      <div
        className="flex-[2] h-[600px] img-magnifier-container"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseHover}
      >
        <img
          className="rounded-2xl magnifier-img w-full h-full object-cover"
          src={data?.data?.image}
          alt=""
        />
        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              left: `${cursorPosition.x - 100}px`,
              top: `${cursorPosition.y - 100}px`,
              pointerEvents: "none",
              width: "200px",
              height: "200px",
              border: "2px solid #fff",
              borderRadius: "10px",
              backgroundImage: `url(${data?.data?.image})`,

              backgroundSize: "600%",
              backgroundPosition: `${position.x}% ${position.y}%`,
              zIndex: 10,
            }}
          ></div>
        )}
      </div>
      <div className="flex-1 w-full min-h-[600px] border-2 border-gray-800 p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-800 font-bold ">
            CATEGORY: <span className="text-sm">{data?.data?.category}</span>
          </h4>
          <div className="max-w-24">
            <Rating className="size-6 w-fit" value={data?.data?.rating} />
          </div>
        </div>
        <div className="py-4 border-b-2 border-gray-800  space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {data?.data?.name}
          </h2>
          <div className="text-orange-500 text-3xl font-bold flex items-center gap-3">
            <h2 className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 fill-current "
                viewBox="0 0 320 512"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
              {data?.data?.price}.00 USD
            </h2>
            <del className="text-gray-500  flex items-center gap-1 text-2xl">
              $ {data?.data?.price + 11}.00 USD
            </del>
          </div>
        </div>

        <div className="py-4 border-b-2 border-gray-800">
          <p className="text-gray-800 font-medium">
            Your one-stop online store for all camping essentials. From tents to
            hiking gear, we offer top-quality products to make your outdoor
            adventures unforgettable. Explore, discover, and gear up with
            Campers Shop.
          </p>
          <Button
            onClick={handleAddToCart}
            disabled={
              !data?.data?.stock ||
              data?.data?.quantity === currentProduct?.quantity
            }
            className="w-full  bg-green-500 hover:bg-green-600 mt-4"
          >
            Add To Cart
          </Button>
        </div>

        <div className="py-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className=" border-2 border-gray-800 px-5 rounded-lg hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-lg">
                Details
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableBody>
                    <TableRow className="border-gray-400 flex items-center justify-between">
                      <TableCell className="font-semibold text-lg">
                        In Stock
                      </TableCell>
                      <TableCell className="font-semibold text-lg">
                        {data?.data?.stock ? "Available" : "Out Of Stock"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-gray-400 flex items-center justify-between">
                      <TableCell className="font-semibold text-lg">
                        Available Quantity
                      </TableCell>
                      <TableCell className="font-semibold text-lg">
                        {data?.data?.quantity}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className=" border-2 border-gray-800 px-5 rounded-lg hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-lg">
                Delivery Time
              </AccordionTrigger>
              <AccordionContent className="text-gray-800 font-medium text-base">
                At our company, we prioritize swift delivery. Orders are
                processed within 24 hours and shipped using trusted partners,
                ensuring your products reach you within three days. Your
                satisfaction is our top priority.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className=" border-2 border-gray-800 px-5 rounded-lg hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-lg">
                Refund Policy
              </AccordionTrigger>
              <AccordionContent className="text-gray-800 font-medium text-base">
                Our refund policy is straightforward: if you're not satisfied
                with your purchase, contact us within 7 days of receipt, and
                we'll guide you through the return process. Once we receive the
                item in its original condition, we'll issue a refund to your
                original payment method. Your satisfaction is our priority, and
                we aim to make the refund process hassle-free.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-gray-800 text-lg font-bold">Payment method:</p>

          <img src={visa} alt="visa" />
          <img src={paypal} alt="paypal" />
          <img src={shopPay} alt="shop-pay" />
          <img src={mastercard} alt="mastercard" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
