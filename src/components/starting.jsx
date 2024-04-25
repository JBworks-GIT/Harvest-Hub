import React from "react";
import "../stylesheet/starting.css";
import illy from "../assets/illy.svg";

function Starting() {
  return (
    <div className="dstart">
      <div className="utext">
        <h6>Welcome to Harvest-Hub</h6>
        <h1>Leading commercial website for sale of organic product in INDIA</h1>
        <div className="boxxy">
          <img src={illy} alt="" srcset="" />
          <p>
            Providing you the best and fresh Fruits, vegetables, grains and
            dairy products.
          </p>
        </div>
      </div>
      <div className="rtext">
        {" "}
        <h4>
          Here is One of the examples of farms from where our  Products are based.
        </h4>{" "}
        <iframe
          width="430"
          height="215"
          src="https://www.youtube.com/embed/aRxymTETvXk?si=6xya2SoqqlDtLlwN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Starting;
