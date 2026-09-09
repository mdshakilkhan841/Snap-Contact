"use client";

import React, { useState, useEffect } from "react";

export default function TopIcon() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`cv_top_icon ${show ? "show" : ""}`}>
      <a
        id="button"
        href="#top"
        onClick={scrollToTop}
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? 1 : 0
        }}
      >
        <img
          src="/new-portfolio/images/gototop.svg"
          alt="Go to top"
          className="img-fluid"
        />
      </a>
    </div>
  );
}
