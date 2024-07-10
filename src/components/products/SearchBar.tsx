import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const SearchBar = () => {
  const [sortValue, setSortValue] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: string) => {
    console.log(data);
  };

  console.log(sortValue);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-3 py-4 flex justify-between items-center ">
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
          <Button className="bg-gray-100 rounded-l-none" type="submit">
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
        <div className="flex items-center justify-between gap-4">
          <div>
            <Select onValueChange={(value: string) => setSortValue(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="1">Low To High</SelectItem>
                  <SelectItem value="-1">High To Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={(value: string) => setSortValue(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="1">Low To High</SelectItem>
                  <SelectItem value="-1">High To Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
