import { useUserContext } from "@/contexts/authContext";
import React from "react";

import Footer from "./Footer";
import SiteNavBar from "./SiteNavBar";

const Layout = ({ children }) => {
  const { loading } = useUserContext();
  return (
    <div>
      {!loading && <SiteNavBar />}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
