"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  // Ensure menu closes on route change
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, [pathname]);

  const navLinks = [
    { href: "/new-portfolio", label: "Home", exact: true },
    { href: "/new-portfolio/about", label: "About" },
    { href: "/new-portfolio/portfolio", label: "My Work" },
    { href: "/new-portfolio/strength", label: "Strength" },
    { href: "/new-portfolio/contact", label: "Contact" }
  ];

  // Prefetch routes for seamless zero-lag navigation
  useEffect(() => {
    navLinks.forEach((link) => {
      router.prefetch(link.href);
    });
  }, [router]);

  const isLinkActive = (item) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  const handleNavClick = (e, href) => {
    if (pathname === href) {
      e.preventDefault();
      setIsMenuOpen(false);
      return;
    }
    // Smooth choreographed transition: close menu with animation then navigate
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(href);
    }, 180);
  };

  return (
    <>
      {/* Header Section Start */}
      <div className="cv_header_wrapper">
        <div className="cv_container container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="cv_navbar">
                <div className="cv_logo">
                  <Link href="/new-portfolio" className="cv_signature_logo">
                    Portfolio<span className="cv_signature_dot">.</span>
                  </Link>
                </div>
                <a
                  href="javascript:void(0);"
                  className="cv_toggle_btn"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                >
                  <svg className="ham hamRotate ham7" viewBox="0 0 100 100">
                    <path
                      className="line top"
                      d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
                    />
                    <path className="line middle" d="m 70,50 h -40" />
                    <path
                      className="line bottom"
                      d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Overlay Start */}
      <div className="cv_header_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="cv_menus_wrapper">
                <ul className="cv_menus">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={isLinkActive(item) ? "active" : ""}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="cv_header_social">
                  <h4>Follow Me</h4>
                  <ul>
                    <li>
                      <a
                        href={portfolioData.personal.socialLinks.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/new-portfolio/images/fb.svg"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href={portfolioData.personal.socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/new-portfolio/images/in.svg"
                          alt="LinkedIn"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href={portfolioData.personal.socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/new-portfolio/images/github.svg"
                          alt="GitHub"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href={portfolioData.personal.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/new-portfolio/images/whatsapp.svg"
                          alt="WhatsApp"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar Overlay End */}
    </>
  );
}
