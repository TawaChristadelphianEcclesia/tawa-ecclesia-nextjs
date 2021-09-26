// import { Link } from 'gatsby';
import Link from "next/link";
import React from "react";

const DefaultFooter: React.FC = () => {
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
            <h2>More Info</h2>
            <Link href="/">Home</Link>
            <br />
            <Link href="#">About Us</Link>
            <br />
            <Link href="#">Presentations</Link>
            <br />
            <Link href="/articles/">Articles</Link>
            <br />© {new Date().getFullYear()}, Tawa Christadelphian Ecclesia
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

export default DefaultFooter;
