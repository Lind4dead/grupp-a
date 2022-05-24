import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-4">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <div className="footer-title">
              <h4>Om Romio</h4>
            </div>
            <ul>
              <li>
                <a href="!#">Det här är Romio</a>
              </li>
              <li>
                <a href="!#">Jobba på Romio</a>
              </li>
              <li>
                <a href="!#">Hållbarhet</a>
              </li>
              <li>
                <a href="!#">Press</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">
              <h4>Handla på Romio</h4>
            </div>

            <ul>
              <li>
                <NavLink to="/allproducts">Alla produkter</NavLink>
              </li>
              <li>
                <NavLink to="/rom">Rom</NavLink>
              </li>
              <li>
                <NavLink to="/whisky">Whisky</NavLink>
              </li>
              <li>
                <NavLink to="/tequila">Tequila</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-title">
              <h4>KundKlubb</h4>
            </div>

            <ul>
              <li>
                <a href="!#">Bli medlem</a>
              </li>
              <li>
                <a href="!#">Medlemsvillkor</a>
              </li>
              <li>
                <a href="!#">Katalog</a>
              </li>
              <li>
                <a href="!#">Nyhetsbrev</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <a href="!#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="!#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="!#">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="!#">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
