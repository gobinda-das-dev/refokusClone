import React from "react";
import Navbar from "./component/Navbar";
import Work from "./component/Work";
import Stripes from "./component/Stripes";
import Products from "./component/Products";
import Marquees from "./component/Marquees";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Lenis from "@studio-freight/lenis";

const App = () => {
  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();

  return (
    <div className="min-h-screen w-full bg-[#161618] text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
