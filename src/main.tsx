import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { Toaster } from "sonner";

import "aos/dist/aos.css";

import "@smastrom/react-rating/style.css";

import AOS from "aos";

// Initialize AOS
AOS.init({
  duration: 600,
  easing: "ease-in-out",
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </Provider>
  </React.StrictMode>
);
