import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Om GruppA</h4>
            <ul>
              <li>
                <a href="#">Det här är GruppA</a>
              </li>
              <li>
                <a href="#">Jobba på GruppA</a>
              </li>
              <li>
                <a href="#">Hållbarhet</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Handla på GruppA</h4>
            <ul>
              <li>
                <a href="#">Hitta din butik</a>
              </li>
              <li>
                <a href="#">Hemleverans</a>
              </li>
              <li>
                <a href="#">Betalning</a>
              </li>
              <li>
                <a href="#">Tjänster</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hjälp</h4>
            <ul>
              <li>
                <a href="#">Kundservice</a>
              </li>
              <li>
                <a href="#">Reklamation</a>
              </li>
              <li>
                <a href="#">Öppet köp</a>
              </li>
              <li>
                <a href="#">Faktablad</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>KundKlubb</h4>
            <ul>
              <li>
                <a href="#">Bli medlem</a>
              </li>
              <li>
                <a href="#">Medlemsvillkor</a>
              </li>
              <li>
                <a href="#">Katalog</a>
              </li>
              <li>
                <a href="#">Nyhetsbrev</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
