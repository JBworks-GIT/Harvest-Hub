import React from "react";
import "../stylesheet/discovery.css";
import { Link } from "react-router-dom";

function Discovery() {
  return (
    <>
      <div className="dis">
        <h1>
          "The Discovery of Agriculture was the first big step towards a
          civilized life"
        </h1>
        <h6>Mike Hardson</h6>
      </div>
      <div className="why">
        <div className="lwhy">
          <h5>Why Choose Us?</h5>
          <ol>
            <li>Quality Check</li>
            <h4>
              Special Grade Quality Checks are Performed On Quaterly bases.
            </h4>
            <li>Regular Feedback</li>
            <h4>
              Feeback from Customers is one of the most Important Things of our
              Company.
            </h4>
          </ol>

          <button className="di"><Link to="/shop">
          Discover more</Link></button>
        </div>
        <div className="wheat"></div>
      </div>
      <div className="high">
        <p>WE PROVIDE HIGH-QUALITY PRODUCTS AT YOUR DOORSTEP</p>
        <button><Link to="/shop" >
          Shop Now</Link></button>
      </div>
    </>
  );
}

export default Discovery;