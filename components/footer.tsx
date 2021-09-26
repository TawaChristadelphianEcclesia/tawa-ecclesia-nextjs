import React from "react";
// import { RichText } from "prismic-reactjs";
import { IFooterData } from "../lib/api";
import Link from "next/link";

const Footer: React.FC<{ footerData: IFooterData }> = ({ footerData }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#2f2e2e",
          color: "#a0a09f",
        }}
      >
        <div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Link href="/">Home</Link>
            {footerData.footerLinks.map((link) => (
              <>
                <br />
                <Link href={link.src}>
                  <a>{link.label}</a>
                </Link>
              </>
            ))}
            <br />
            {footerData.footerText}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#1b1a1a",
          height: "50px",
        }}
      ></div>
    </>
  );
};

export default Footer;
