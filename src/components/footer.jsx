import React from "react";
import "../stylesheet/footer.css";
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
function Footer() {
  return (
    <>
      <div className="card">
        <h2>Scroll Now Thank Yourself Later</h2>
        <button>
          <a href="#footer">Scroll</a>
        </button>
      </div>
      <footer id="footer">
        <div className="col col1">
          <h3>Harvest-Hub</h3>
          <p>
            Made with <span style={{ color: "#BA6573" }}>❤</span> by Jai
          </p>
          
          <div className="social">
            <a
              href="https://www.linkedin.com/in/jai-bhatia-409467222/"
              target="_blank"
              className="link"
            >
              <img color="white"
                src={linkedin}
                alt=""
              />
            </a>
            <a
              href=""
              target="_blank"
              className="link"
            >
              <img src="https://assets.codepen.io/9051928/x.png" alt="" />
            </a>
            <a
              href="https://github.com/JBworks-GIT"
              target="_blank"
              className="link"
            >
              <img
                src={github}
                alt=""
              />
            </a>
          </div>
          <p style={{ color: "#818181", fontSize: "smaller" }}>
            2024 © All Rights Reserved
          </p>
        </div>
        <div className="col col2">
          <p>About</p>
          <p>Our mission</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
        <div className="col col3">
          <p>Services</p>
          <p>Products</p>
          <p>Join our team</p>
          <p>Partner with us</p>
        </div>
        <div className="backdrop"></div>
      </footer>
    </>
  );
}
export default Footer;
