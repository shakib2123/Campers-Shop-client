import NoDataFound from "@/components/animation/NoDataFound";
import Loader from "@/components/Loader/Loader";
import { TProduct } from "@/components/ProductCart/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  TCartItem,
} from "@/redux/features/CartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartPage = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const isDisabled = (item: TCartItem) => {
    const result = products.data.find(
      (data: TProduct) => data._id === item._id
    );
    return result.quantity === item.quantity || result.stock === false;
  };

  const handleDeleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  let loading;

  if (isLoading) {
    return (loading = <Loader height={"h-[500px]"} />);
  }
  return (
    <section className=" max-w-screen-xl mx-auto py-20 min-h-[400px]">
      <div className="max-w-screen-xl mx-auto py-20 px-3 ">
        <div className="border border-gray-400 rounded-lg p-8">
          <div className="pb-6 flex items-center justify-between border-b border-gray-400">
            <h2 className="text-xl text-gray-700 font-bold">Your Cart</h2>
            <h2 className="text-xl text-gray-700 font-bold">
              Total product: {cart?.length}
            </h2>
          </div>
          {!cart.length ? (
            <div className="flex items-center justify-center max-w-64 mx-auto min-h-60 h-full min-w-64">
              <NoDataFound />
            </div>
          ) : (
            <Table className="p-12 min-w-[570px] md:w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Name & Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading
                  ? loading
                  : cart?.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell>
                          <img
                            className="object-cover rounded-lg size-14"
                            src={item.image}
                            alt={item.name}
                          />
                        </TableCell>
                        <TableCell className="text-sm">
                          <p className="flex flex-col gap-1">
                            <p> {item.name}</p>{" "}
                            <p className="text-orange-500">
                              $ {item.price} USD
                            </p>
                          </p>
                        </TableCell>
                        <TableCell className="flex items-center gap-3">
                          <Button
                            onClick={() => dispatch(decreaseQuantity(item._id))}
                            disabled={item.quantity === 1}
                            className="border border-gray-300"
                            variant={"ghost"}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          </Button>
                          <p className="text-lg font-semibold text-gray-700">
                            {item.quantity}
                          </p>
                          <Button
                            onClick={() => dispatch(increaseQuantity(item._id))}
                            disabled={isDisabled(item)}
                            variant={"ghost"}
                            className="border border-gray-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </Button>
                        </TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            onClick={() => handleDeleteItem(item._id)}
                            variant={"destructive"}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total Amount</TableCell>
                  <TableCell className="text-right">${totalPrice}.00</TableCell>
                  <Link to="/checkout">
                    <Button className="bg-green-500 hover:bg-green-600 mt-2">
                      Place Order
                    </Button>
                  </Link>
                </TableRow>
              </TableFooter>
            </Table>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
