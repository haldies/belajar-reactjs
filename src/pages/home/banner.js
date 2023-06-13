import React from "react";

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src="/assets/images/banner.jpg"
        alt="Banner"
      />
      <div className="banner__content">
        <h2>New Collection</h2>
        <p>Check out our latest collection of high-quality products.</p>
        <button className="btn btn-primary">Shop Now</button>
      </div>
    </div>
  );
}

export default Banner;