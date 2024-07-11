import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <section className=" bg-black/85 py-5 px-4">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="max-w-9 lg:max-w-14"
              src={logo}
              alt="mountain-image"
            />
            <h2 className="font-bold text-lg md:text-xl lg:text-3xl text-orange-500 font-young-serif">
              Campers Shop
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500 font-medium"
                : "text-gray-100 hover:text-green-500 hover:border-b-2 font-medium hover:border-green-500"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500 font-medium"
                : "text-gray-100 hover:text-green-500 hover:border-b-2 font-medium hover:border-green-500"
            }
            to="/products"
          >
            Products
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500 font-medium"
                : "text-gray-100 hover:text-green-500 hover:border-b-2 font-medium hover:border-green-500"
            }
            to="/product-management"
          >
            Product Management
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500 font-medium"
                : "text-gray-100 hover:text-green-500 hover:border-b-2 font-medium hover:border-green-500"
            }
            to="/about-us"
          >
            About Us
          </NavLink>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-1 ${
                isActive
                  ? "text-green-500"
                  : "text-gray-100 hover:text-green-500"
              }`
            }
            to="/cart"
          >
            <p className="hidden lg:block">Cart</p>
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-1 ${
                isActive
                  ? "text-green-500"
                  : "text-gray-100 hover:text-green-500"
              }`
            }
            to="/wishlist"
          >
            <p className="hidden lg:block">Wishlist</p>
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
