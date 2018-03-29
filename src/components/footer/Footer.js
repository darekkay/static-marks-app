import React from "react";

import Icon from "../icon/Icon";
import Link from "../link/Link";
import "./Footer.css";

const Footer = () => (
  <footer>
    <Link url="https://darekkay.com">Handmade with &hearts; by Darek Kay</Link>

    <div className="github">
      <Link url="https://github.com/darekkay/static-marks">
        Fork me on GitHub
      </Link>
      <Icon name="github" position="right" />
    </div>
  </footer>
);

export default Footer;
