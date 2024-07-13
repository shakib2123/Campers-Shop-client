import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCart, { TProduct } from "../ProductCart/ProductCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import Loader from "../Loader/Loader";
import NoDataFound from "../animation/NoDataFound";
import Error from "../animation/Error";

type TFormData = {
  search: string;
};

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { register, handleSubmit } = useForm<TFormData>();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    setSearchValue(data.search);
  };

  const handleReset = () => {
    setSearchValue("");
    setSortValue("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
  };

  const { data, isLoading, isError } = useGetProductsQuery({
    search: searchValue,
    sort: sortValue,
    category,
    minPrice,
    maxPrice,
  });

  let loading;

  if (isLoading) {
    return (loading = <Loader height={"h-[500px]"} />);
  }

  return (
    <div>
      <div className="mb-4">
        <div className="max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row gap-4 justify-between items-center  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full  max-w-sm items-center"
          >
            <Input
              className="focus-visible:ring-offset-0 rounded-r-none bg-gray-100"
              type="text"
              placeholder="Search here..."
              {...register("search")}
            />
            <Button
              className="bg-gray-100 hover:bg-gray-200 rounded-l-none"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Button>
          </form>
          <div className="flex items-center justify-between gap-1 md:gap-2 lg:gap-4">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Price Range</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 px-3 py-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="min" className="">
                      Min:
                    </Label>
                    <Input
                      id="min"
                      onChange={(e) => setMinPrice(e.target.value)}
                      className=""
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="max" className="">
                      Max:
                    </Label>
                    <Input
                      id="max"
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className=""
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <Select onValueChange={(value: string) => setCategory(value)}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Footwear">Footwear</SelectItem>
                    <SelectItem value="Cooking Equipment">
                      Cooking Equipment
                    </SelectItem>
                    <SelectItem value="Outdoor Furniture">
                      Outdoor Furniture
                    </SelectItem>
                    <SelectItem value="Accessories">Accessories</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select onValueChange={(value: string) => setSortValue(value)}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="asc">Low To High</SelectItem>
                    <SelectItem value="desc">High To Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button
                onClick={handleReset}
                variant={"outline"}
                className="bg-gray-100"
              >
                Reset All
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          data?.data.length > 0 ? "grid" : "flex justify-center items-center"
        } grid-cols-1 lg:grid-cols-2 gap-6 min-h-96 `}
      >
        {isLoading ? (
          loading
        ) : isError ? (
          <div className="pt-12 max-w-64">
            <Error />
          </div>
        ) : data?.data.length > 0 ? (
          data?.data?.map((product: TProduct) => (
            <ProductCart key={product._id} product={product} />
          ))
        ) : (
          <div className="pt-12 max-w-64">
            <NoDataFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
