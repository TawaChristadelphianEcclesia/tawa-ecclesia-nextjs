import React from "react";
import { GlobalStyles } from "twin.macro";

const Layout: React.FC = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
