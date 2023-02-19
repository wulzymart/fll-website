import React from "react";

import Footer from "./Footer";
import SiteNavBar from "./SiteNavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <SiteNavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
