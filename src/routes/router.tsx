import App from "@/App";
import AboutPage from "@/pages/About/AboutPage";
import HomePage from "@/pages/Home/HomePage";
import CreateProduct from "@/pages/ProductManagement/CreateProduct";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
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
          path: "about-us",
          element: <AboutPage />,
        },
      ],
    },
  ]);
