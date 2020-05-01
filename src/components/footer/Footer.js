import React from "react";

import Link from "../link/Link";
import "./Footer.scss";

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <span>
        <span>Handmade with &hearts; by </span>
        <Link url="https://darekkay.com">Darek Kay</Link>
      </span>

      {process.env.REACT_APP_VERSION && (
        <span>
          <Link url="https://github.com/darekkay/static-marks">
            Static Marks
          </Link>
          <span> {process.env.REACT_APP_VERSION}</span>
        </span>
      )}
    </div>
  </footer>
);

export default React.memo(Footer);
