import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import { useAppSelector } from "./redux/hook";

function App() {
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    function handleOnBeforeUnload(event: BeforeUnloadEvent) {
      // Check if the cart is empty
      if (cart.length === 0) {
        return;
      }

      event.preventDefault();

      return (event.returnValue = "");
    }

    window.addEventListener("beforeunload", handleOnBeforeUnload, {
      capture: true,
    });

    return () => {
      window.removeEventListener("beforeunload", handleOnBeforeUnload, {
        capture: true,
      });
    };
  }, [cart]);

  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
