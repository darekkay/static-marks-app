import React from "react";

import Link from "../link/Link";
import "./Footer.css";

const Footer = () => (
  <footer>
    <Link url="https://darekkay.com">Handmade with &hearts; by Darek Kay</Link>
    {process.env.REACT_APP_VERSION && (
      <Link url="https://github.com/darekkay/static-marks">
        Version {process.env.REACT_APP_VERSION}
      </Link>
    )}
  </footer>
);

export default Footer;
