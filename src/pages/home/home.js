import React from "react";
import Banner from "./banner";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__content">
        <h1>Welcome to our online store</h1>
        <p>
          We offer a wide range of high-quality products at affordable prices.
          Browse our catalog and find your favorite items today!
        </p>
      </div>
    </div>
  );
}

export default Home;