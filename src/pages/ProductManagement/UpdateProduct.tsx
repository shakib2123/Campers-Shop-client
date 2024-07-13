import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { TFormData } from "./CreateProduct";

const apiKey = import.meta.env.VITE_IMAGEBB_API_KEY;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const UpdateProduct = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const { data: product, isLoading: isProductLoading } =
    useGetSingleProductQuery(id);

  const navigate = useNavigate();

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  if (isProductLoading) {
    return <Loader height={"h-500px"} />;
  }

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const imgData = await response.json();

    setLoading(false);

    const productData = {
      name: data.name,
      price: data.price,
      description: data.description,
      image: imgData.data.url,
      quantity: data.quantity,
      category: data.category,
      rating: data.rating,
    };

    const updateProductData = {
      id,
      updatedData: productData,
    };

    try {
      const res = await updateProduct(updateProductData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        navigate("/product-management");
      }
    } catch (err) {
      toast.error("Failed to update product");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 min-h-96">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center text-gray-800">
          Update A Product
        </h1>
      </div>

      <form
        className="p-5 bg-gray-50 border border-gray-300 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex flex-col gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={product?.data?.name}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm ">Name is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="">
              Description
            </Label>
            <Input
              id="description"
              defaultValue={product?.data?.description}
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm ">Description is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="" htmlFor="image">
              Image
            </Label>
            <Input
              className=" border border-gray-400"
              id="image"
              type="file"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">Image is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="category" className="">
              Category
            </Label>
            <Input
              id="category"
              defaultValue={product?.data?.category}
              {...register("category", { required: true })}
            />
            {errors.category && (
              <p className="text-red-500 text-sm ">Category is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="price" className="">
              Price
            </Label>
            <Input
              type="number"
              id="price"
              defaultValue={product?.data?.price}
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm ">Price is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity" className="">
              Quantity
            </Label>
            <Input
              type="number"
              id="quantity"
              defaultValue={product?.data?.quantity}
              {...register("quantity", { required: true })}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm ">Quantity is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="rating" className="">
              Rating
            </Label>
            <Input
              type="number"
              id="rating"
              className=""
              defaultValue={product?.data?.rating}
              {...register("rating", { required: true, min: 1, max: 5 })}
            />
            {errors.rating?.type === "required" && (
              <p className="text-red-500 text-sm ">Rating is required</p>
            )}
            {errors.rating?.type === "min" && (
              <p className="text-red-500 text-sm ">Rating must be at least 1</p>
            )}
            {errors.rating?.type === "max" && (
              <p className="text-red-500 text-sm ">
                Rating must be no more than 5
              </p>
            )}
          </div>

          <Button
            className="w-full bg-green-500 hover:bg-green-600"
            type="submit"
          >
            {loading || isLoading ? "Loading..." : "Update Product"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
