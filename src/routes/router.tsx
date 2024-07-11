import App from "@/App";
import AboutPage from "@/pages/About/AboutPage";
import HomePage from "@/pages/Home/HomePage";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import CreateProduct from "@/pages/ProductManagement/CreateProduct";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import UpdateProduct from "@/pages/ProductManagement/UpdateProduct";
import ProductPage from "@/pages/Products/ProductPage";
import { createBrowserRouter } from "react-router-dom";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "product-management",
          element: <ProductManagement />,
        },
        {
          path: "create-product",
          element: <CreateProduct />,
        },
        {
          path: "update-product/:id",
          element: <UpdateProduct />,
        },
        {
          path: "products-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "about-us",
          element: <AboutPage />,
        },
      ],
    },
  ]);
