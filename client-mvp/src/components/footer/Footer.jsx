import "./Footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import LinkedinIcon from "../common/logo/LinkedInIcon";
// import TwitterIcon from "../common/logo/TwitterIcon";
// import FacebookIcon from "../common/logo/FacebookIcon";
import { Divider } from "antd";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <footer className="footer-wrapper ">
      <div className="quick-links">
        <div className="quick-link-wrapper">
          <Link to="/" className="items font-ibm">
            HOME
          </Link>
          <Divider type="vertical" className="footer-divider" />
          <Link to="/guide" className="items font-ibm">
            GUIDE
          </Link>
          <Divider type="vertical" className="footer-divider" />
          <Link to="/about" className="items font-ibm">
            ABOUT
          </Link>
        </div>
      </div>

      <div>
        <h5 className="copyright-text font-ibm">
          © {currentYear} SecureDoc. All rights reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
