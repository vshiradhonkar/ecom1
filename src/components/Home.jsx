// src/components/Homepage.js
import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
// import PriceComparison from "./PriceComparison";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ProductList from "./ProductList";

const Home = () => {

  return (
    <div className="homepage-container">
        <Hero />
        <Categories />
        <ProductList />
        {/* <PriceComparison /> */}
        <Testimonials />
        <section className="product-grid">
          {/* Product cards will be displayed here */}
        </section>
        <Footer />
    </div>
  );
};

export default Home;
