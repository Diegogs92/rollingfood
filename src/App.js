import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Breakfast from "./components/Breakfast";
import Favourites from "./components/Favourites";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import scrollreveal from "scrollreveal";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #breakfast,
        #reviews,
        #favourites,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Breakfast />
      <Reviews />
      <Favourites />
      <Footer />
    </>
  );
}
