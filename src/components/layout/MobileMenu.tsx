import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/products",
    name: "Products",
  },

  {
    path: "/product-management",
    name: "Product Management",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
];

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-xl font-medium bg-transparent p-0">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="bg-gray-100">
        <SheetHeader className="text-left mb-5">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        </SheetHeader>
        <div className="flex flex-col space-y-2">
          {routes.map((route) => (
            <SheetClose asChild>
              <NavLink
                key={route.path}
                className={({ isActive }) =>
                  ` text-lg font-medium text-gray-800 hover:text-green-500 py-3 hover:border-b-2 hover:border-green-500 ${
                    isActive ? "text-green-500" : ""
                  }`
                }
                to={route.path}
              >
                {route.name}
              </NavLink>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
