import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import "../stylesheet/navbar.css";

function Navbar() {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 500) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <nav className={fix ? "navabar fixed" : "navbar"}>
      <div className="logo"></div>
      <div className="navbar-btn">
        <ul className="navbtn">
          <Link to="/" className="btn1">
            <li>Menu</li>
          </Link>
          <Link to="/shop" className="btn1">
            <li>Shop</li>
          </Link>
          <li>Delivery</li>
          <ScrollLink
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
            className="btn1"
          >
            <li>News</li>
          </ScrollLink>
          <Link to="/contact" className="btn1">
          <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="prof-btn">
        <ul className="profile">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/jai-bhatia-409467222/"
              target="_blank"
              className="link"
            >
              <img color="white" src={linkedin} alt="" />
            </a>
            <a href="" target="_blank" className="link">
              <img src="https://assets.codepen.io/9051928/x.png" alt="" />
            </a>
            <a
              href="https://github.com/JBworks-GIT"
              target="_blank"
              className="link"
            >
              <img src={github} alt="" />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
