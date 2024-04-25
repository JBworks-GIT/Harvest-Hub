import React from "react";
import { Link } from "react-router-dom";

import "../stylesheet/product.css";
function Products() {
  return (
    <div className="wtext">
      <h2 class>Some of our bestsellers in Your Area</h2>
      <div className="allpro">
        <div className="ft">
          <div className="fruit"></div>
          <h3>Berries</h3>
          <p>Click here to get your locally grown Fresh Berries.</p>
          <button>
            <Link to="/shop">Buy From here</Link>
          </button>
        </div>
        <div className="ft">
          <div className="vegetable"></div>
          <h3>Vegetables</h3>
          <p>Click here to get your locally grown Fresh veggies!</p>
          <button>
            <Link to="/shop">Buy From here</Link>
          </button>
        </div>
        <div className="ft">
          <div className="organic"></div>
          <h3>Grains</h3>
          <p>Click here to get your locally grown Chemical Free Grains</p>
          <button>
            <Link to="/shop">Buy From here</Link>
          </button>
        </div>
        <div className="ft">
          <div className="dairy"></div>
          <h3>Milk</h3>
          <p>Click here to get Freshly Extracted and Pure Milk</p>
          <button>
            <Link to="/shop">Buy From here</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
