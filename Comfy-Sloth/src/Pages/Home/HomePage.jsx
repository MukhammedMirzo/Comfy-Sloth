import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../../Components";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
